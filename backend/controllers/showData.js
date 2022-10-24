const axios = require('axios')

const options = {
  headers: {
    authorization: 'Bearer aSuperSecretKey'
  },
  timeout: 10000 // tiempo de espera de la respuesta del servidor de 10 segundos
}

const showDataController = () => {}

showDataController.showData = (req, res, next) => {
// Esta funcion llama a la lista de archivos y a partir de esta, llama a cada archivo individualmente con una peticion GET

  const customFetch = async () => {
    try {
      const response = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files', options)
      const dataList = response.data.files
      console.log(dataList)

      // la variable dataFiles espera un array con un objeto por cada archivo que exista, si existe un error llamando a uno de los archivos, retorna un objeto con file:null

      let dataFiles = await Promise.all(

        dataList.map(async file => {
          return axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${file}`, options)
            .then(csv => {
              return {

                // La info de cada archivo se formatea usando expresiones regulares. Primero se separa en lineas tomando como referencia los saltos de linea, si no se cumple la expresion regular del método filter se descarta la fila.

                file,
                lines: (
                  csv.data
                    .split((/\n/))
                    .filter(line => ((/.*\.csv\b[,][a-zA-Z]+[,][0-9]+[,]+[0-9a-fA-F]{12}/)).test(line))
                    .reduce((filtered, line) => {
                      const arr = line.split((/,/))
                      filtered.push({
                        text: arr[1],
                        number: parseInt(arr[2]),
                        hex: arr[3]
                      })
                      return filtered
                    }, [])
                )
              }
            })

            .catch(() => { return { file: null } })
        }))

      dataFiles = dataFiles.filter(obj => obj.file)

      if (req.query.fileName) { // Requerimiento opcional (nombre filtrado por queryparams)
        const filtered = dataFiles.filter(obj => obj.file === req.query.fileName)
        return res.status(200).json(filtered)
      }

      return res.status(200).json(dataFiles)
    } catch (error) {
      const customError = {
        message: error.message,
        status: error.status,
        code: error.code
      }
      console.log(customError)
      return res.status(400).json(customError)
    }
  }

  customFetch()
}

showDataController.showList = (req, res, next) => {
// Esta función se encarga de solo llamar a la lista de archivos (uno de los requerimientos extra de la prueba)

  const customFetch = async () => {
    try {
      const response = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files', options)
      const dataList = response.data.files
      return res.status(200).json(dataList)
    } catch (error) {
      const customError = {
        message: error.message,
        status: error.status,
        code: error.code
      }
      console.log(customError)
      return res.status(400).json(customError)
    }
  }

  customFetch()
}

module.exports = showDataController
