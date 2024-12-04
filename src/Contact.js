import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

function Contact() {
  return (
    <Container className="contact mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title as="h2" className="mb-4">
                Contact
              </Card.Title>
              <Card.Text>
                <FaPhoneAlt className="me-2" />
                <strong>Phone:</strong> +62 838 4515 8177
              </Card.Text>
              <div className="mt-3">
                <Button
                  href="https://github.com/sternnaufal"
                  variant="dark"
                  className="me-2"
                  target="_blank"
                >
                  <FaGithub className="me-2" />
                  GitHub
                </Button>
                <Button
                  href="https://www.instagram.com/stern_naufal2712/"
                  variant="danger"
                  className="me-2"
                  target="_blank"
                >
                  <FaInstagram className="me-2" />
                  Instagram
                </Button>
                <Button
                  href="https://www.facebook.com/naufal.stern"
                  variant="primary"
                  className="me-2"
                  target="_blank"
                >
                  <FaFacebook className="me-2" />
                  Facebook
                </Button>
              </div>
            </Card.Body>
            <Card.Footer className="text-muted">
              Hubungi kami untuk informasi lebih lanjut
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Contact;
