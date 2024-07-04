import { Carousel, CarouselItem } from "react-bootstrap";
import cardInfo from "../cardInfo.js";

const DisplayCarousel = () => {
	return (
		<>
			<div className="w-50 m-auto p-lg-5">
				<Carousel>
                    {cardInfo.map((singleCard) => (
					<CarouselItem key={singleCard.id} as={"div"}>
						<Carousel.Caption>
							<h3 className="text-dark">{singleCard.title}</h3>
						</Carousel.Caption>
						<img
							className="m-auto w-100"
							src={singleCard.image}
						/>
					</CarouselItem>
                    ))}
				</Carousel>
			</div>
		</>
	);
};

export default DisplayCarousel;
