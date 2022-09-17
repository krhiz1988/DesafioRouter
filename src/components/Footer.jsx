import { Container, Row, Col } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Container fluid>
        <Row
          className="justify-content-center"
          style={{ backgroundColor: "#c70039", marginTop: "190px" }}
        >
          <Col className="text-white text-center py-3">
            Todos los derechos reservados por Happy Cake{" "}
            <img
              style={{ width: "25px", height: "25px" }}
              src="/img/cake.png"
              alt="image"
            />{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}
