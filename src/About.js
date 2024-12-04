import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import './About.css'; // Tambahkan file CSS untuk styling khusus

function About() {

  return (
    <Container className="my-5 about-container">
      <Row>
        {/* Profil Foto dan Deskripsi Singkat */}
        <Col md={6} className="text-center mb-4">
          <div className="profile-container">
            <img
              src="/naufal.jpg"
              alt="Naufal Rakha Putra"
              className="img-fluid rounded-circle profile-img"
            />
          </div>
          <h2 className="mt-3">Naufal Rakha Putra</h2>
          <p className="lead text-muted">Founder of Naufal Company</p>
          <p className="about-description">
            Saya adalah seorang pengusaha dan pengembang perangkat lunak yang berdedikasi
            untuk menciptakan solusi inovatif di dunia digital.
          </p>
        </Col>

        {/* Kartu About Me */}
        <Col md={6}>
          <Card className="shadow-lg fade-in">
            <Card.Body>
              <Card.Title className="mb-4 text-primary">About Me</Card.Title>
              <Card.Text>
                Sebagai pendiri Naufal Company, saya berfokus pada pengembangan teknologi
                yang dapat memberikan dampak positif. Kami bekerja keras untuk menciptakan
                produk-produk inovatif yang membantu perusahaan dan individu untuk berkembang
                di era digital ini.
              </Card.Text>
              <Card.Text>
                Kami percaya bahwa setiap tantangan adalah peluang untuk belajar dan berkembang.
                Dengan tim yang terampil dan semangat yang tinggi, Naufal Company berkomitmen
                untuk terus menciptakan solusi yang relevan dan berkelanjutan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

     </Container>
  );
}

export default About;
