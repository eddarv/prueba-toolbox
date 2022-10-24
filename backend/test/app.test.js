const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)
const url = 'http://localhost:5000'

describe('List: ', () => {
  it('Debe llamar al API para listar los archivos', (done) => {
    chai
      .request(url)
      .get('/files/list')
      .send()
      .end(function (err, res) {
        expect(res).to.have.status(200)
        done()
      })
  })
  it('la lista debe ser un array', (done) => {
    chai
      .request(url)
      .get('/files/list')
      .send()
      .end(function (err, res) {
        expect(res.body).to.be.an('array')
        done()
      })
  })
  it('Debe llamar al API para obtener los datos especificos de cada archivo', (done) => {
    chai
      .request(url)
      .get('/files/data')
      .send()
      .end(function (err, res) {
        expect(res).to.have.status(200)
        done()
      })
  })
  it('los archivos deben tener dos propiedades: file y lines', (done) => {
    chai
      .request(url)
      .get('/files/data')
      .send()
      .end(function (err, res) {
        expect(res).to.have.status(200)

        const data = res.body
        for (const file of data) {
          expect(file).to.have.property('file')
          expect(file).to.have.property('lines')
        }
        done()
      })
  })
  it('las lineas de los archivos deben tener tres propiedades de tipo string, number y string respectivamente', (done) => {
    chai
      .request(url)
      .get('/files/data')
      .send()
      .end(function (err, res) {
        expect(res).to.have.status(200)

        const data = res.body
        for (const file of data) {
          for (const lines of file.lines) {
            expect(lines).to.have.property('text')
            expect(lines.text).to.be.a('string')
            expect(lines).to.have.property('number')
            expect(lines.number).to.be.a('number')
            expect(lines).to.have.property('hex')
            expect(lines.hex).to.be.a('string')
            expect(lines.hex.length).to.be.equal(32)
          }
        }
        done()
      })
  })
})
