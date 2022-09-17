import { Container, Row, Col, Form } from "react-bootstrap";

export default function Contacto() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" className="text-center p-4">
            <h1>Cuéntanos ¿En que te podemos ayudar?</h1>
          </Col>
          <Col xs="6">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-center">Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="text-center">Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
