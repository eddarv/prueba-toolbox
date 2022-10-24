import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from './Spinner';

//Este componente lista los archivos disponibles del endpoint /files/list (Requerimiento opcional)

const ListaArchivos = ({list}) => {
    return(
        <>
        <Container fluid className="second_cont border">Lista de archivos disponibles (requerimiento opcional)</Container>
        <Container className="border-0 justify-content-md-center">
            <Row className="row_1 border-0 justify-content-md-center">
                <Col xs="4" className="border col">Filename</Col>
            </Row>
        {
            (
                list.length

            ?
                
                ( 
                    list[0]!==false

                    ?
                        list.map((file,index) => {
                            
                            return(
                            <Row className="row_1 border-0 justify-content-md-center" key={`l-${index}`}>
                                <Col xs="4" className="border col" key={`c-${index}`}>{file}</Col>
                            </Row>
                            )
                        
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



export default ListaArchivos;