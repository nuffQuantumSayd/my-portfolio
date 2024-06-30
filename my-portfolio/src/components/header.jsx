import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header>
				<Navbar bg="dark" variant="dark" expand="md">
					<Container>
						<LinkContainer to="/">
							<Navbar.Brand>NexusGrove</Navbar.Brand>
						</LinkContainer>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse className="justify-content-end">
							<Nav>
								<LinkContainer to="/about">
									<Nav.Link>about</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/portfolio">
									<Nav.Link>portfolio</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/contact">
									<Nav.Link>contact</Nav.Link>
								</LinkContainer>

								<Link
									className="p-2"
									to="https://x.com/grunge_phase"
								>
									<a className="fa fa-twitter"></a>
								</Link>

								<Link
									className="p-2"
									to="https://www.linkedin.com/in/aaron-kornish"
								>
									<a className="fa fa-linkedin"></a>
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Header;
