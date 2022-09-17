import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#c70039" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="text-white ms-3 text-decoration-none">
                <img
                  style={{ width: "15px", height: "15px" }}
                  src="/img/home.png"
                  alt="image"
                />{" "}
                Home
              </Link>
              <Link
                to="/contacto"
                className="text-white ms-3 text-decoration-none"
              >
                <img
                  style={{ width: "15px", height: "15px" }}
                  src="/img/contacts.png"
                  alt="image"
                />{" "}
                Contacto
              </Link>
            </Nav>
            <Navbar.Brand href="#home" className="text-white">
              Happy Cake{" "}
              <img
                style={{ width: "25px", height: "25px" }}
                src="/img/cake.png"
                alt="image"
              />{" "}
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
