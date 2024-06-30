import {Col, Row, Container} from "react-bootstrap"

const MainContent = () => {
    return (
        <>
            <Container >
                <Row className="text-justify p-5">
                    <Col xs={4}><hr/></Col>
                    <Col className="text-center" xs={4}><p>Some of my work</p></Col>
                    <Col xs={4}><hr/></Col>
                </Row>
            </Container>
        </>
    )
}

export default MainContent