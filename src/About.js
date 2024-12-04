import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function About() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={6} className="text-center mb-4">
                    <img
                        src="/naufal.jpg"
                        alt="Naufal Rakha Putra"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
                    />
                    <h2>Naufal Rakha Putra</h2>
                    <p className="lead">Founder of Naufal Company</p>
                    <p>
                        Saya adalah seorang pengusaha dan pengembang perangkat lunak
                        yang berdedikasi untuk menciptakan solusi inovatif di dunia digital.
                    </p>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>About Me</Card.Title>
                            <Card.Text>
                                Sebagai pendiri Naufal Company, saya berfokus pada pengembangan
                                teknologi yang dapat memberikan dampak positif. Kami bekerja
                                keras untuk menciptakan produk-produk inovatif yang membantu
                                perusahaan dan individu untuk berkembang di era digital ini.
                            </Card.Text>
                            <Card.Text>
                                Kami percaya bahwa setiap tantangan adalah peluang untuk
                                belajar dan berkembang. Dengan tim yang terampil dan semangat
                                yang tinggi, Naufal Company berkomitmen untuk terus menciptakan
                                solusi yang relevan dan berkelanjutan.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
