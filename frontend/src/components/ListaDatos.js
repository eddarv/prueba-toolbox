import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from './Spinner';


//Este componente lista las lineas que no fueron descartadas de cada archivo que encontro.


const ListaDatos = ({data,i,name,handleChange,nameList}) => {

    return (
        <>
        <Container fluid className="first_cont border d-inline-flex justify-content-between">
            <span>React Test App</span>

            {/*Añadimos un select que nos permite filtrar por queryparams las lineas de los archivos*/}
            <select name="nombre" onChange={handleChange} value={name} className="select">
                <option value="" defaultValue>Seleccione archivo</option>
                {nameList.map((el,index)=> <option value={el} key={index} >{el}</option>)}
			</select>

        </Container>
        <Container className="border justify-content-md-center">
            <Row className="row_1 border">
                <Col xs="3" className="border col">Filename</Col>
                <Col xs="3" className="border col">Text</Col>
                <Col xs="3" className="border col">Number</Col>
                <Col xs="3" className="border col">Hex</Col>
            </Row>

            {
                (
                        data.length
                    ?
                        ( 
                            data[0]!==false
        
                            ?
                                data.map((file,index) => {
                                    if(file.lines.length===0)i++
                                    i++

                                    return (file.lines.map((line,index)=>{
                                    i++
                                    if(index === 0 ) i++
                                    
                                    return(
                                    <Row className={`row_${ (i%2 === 0) ? 1 : 2} border`} key={`${i}`}>
                                        <Col xs="3" className="border col" key={`${i}-1`}>{file.file}</Col>
                                        <Col xs="3" className="border col" key={`${i}-2`}>{line.text}</Col>
                                        <Col xs="3" className="border col" key={`${i}-3`}>{line.number}</Col>
                                        <Col xs="3" className="border col" key={`${i}-4`}>{line.hex}</Col>
                                    </Row>
                                    )
                                    }))      
                                })
                            :
                                <Row className="row_1 border-0 justify-content-md-center">
                                    <Col xs="4" className="border col">Ha ocurrido un error: Leer consola...</Col>
                                </Row>
                        )
                    :   
                    <Row className="justify-content-md-center">
                        <Col xs="3" align="center"><Spinner/></Col>
                    </Row>
                )
            
            
            }
        </Container>
        </>
    )

}

export default ListaDatos;