import PortfolioCard from "./portfolioCard"
import {Col, Row, Container} from "react-bootstrap"
import cardInfo from "../cardInfo.js"

const MainContent = () => {
    return (
        <>
            <Container >
                <Row className="text-justify p-5">
                    <Col xs={4}><hr/></Col>
                    <Col className="text-center" xs={4}><p>Some of my work</p></Col>
                    <Col xs={4}><hr/></Col>
                </Row>
                <Row>
                    {cardInfo.map((singleCard) => (
                        <Col key={singleCard.id}>
                        <PortfolioCard 
                        text={singleCard.text} 
                        title={singleCard.title}
                        />
                        </Col>
                        ))}
                </Row>
                
            </Container>
        </>
    )
}

export default MainContent