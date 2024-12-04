import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ImGithub } from 'react-icons/im';
import './Home.css'; // Tambahkan file CSS eksternal jika ingin animasi lebih kompleks

function Home() {
    return (
        <Container className="text-center my-5">
            <Row>
                <Col>
                    <h1 className="animated-title">Welcome to Naufal Company</h1>
                    <p className="lead">
                        Cari kebutuhanmu disini!
                    </p>
                    <Button href="/about" variant="primary" size="lg" className="mb-3">
                        Learn More About Us
                    </Button>
                    <p className="mt-4">Follow our projects on GitHub:</p>
                    <Button href="https://github.com/sternnaufal" variant="dark" size="lg">
                        <ImGithub /> Visit GitHub
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
