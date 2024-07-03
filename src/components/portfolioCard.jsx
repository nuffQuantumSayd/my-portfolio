import {Card} from "react-bootstrap"


const PortfolioCard = ({title, text}) => {
    return (
        <>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </>
    )
}

export default PortfolioCard