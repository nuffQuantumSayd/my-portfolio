import { Container, Row, Col } from "react-bootstrap";

function AboutPic() {
    return ( 
        <>
        <div className="about-pic pt-5 pb-5">
                <Container>
                    <Row>
                        <Col md={6}>
                        <img className="w-75 p-5" src="/public/images/pic-of-me.jpg"/>
                        </Col>
                        <Col md={6}>
                            <p className="p-5">
                                more about me
                            </p>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </>
     );
}

export default AboutPic;