import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ImGithub } from 'react-icons/im';
function Home() {
    return (
        <Container className="text-center my-5">
            <Row>
                <Col>
                    <h1>Welcome to Naufal Company</h1>
                    <p className="lead">
                        This is a simple React app to display the company's logo and name.
                    </p>
                    <Button href="/about" variant="primary" size="lg">
                        Learn More About Us
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
