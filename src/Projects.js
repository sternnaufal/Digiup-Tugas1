import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';

function Project() {
  
  const skills = [
    { name: 'Server Administration', level: 90 },
    { name: 'Network Administration', level: 90 },
    { name: 'C++ Programming', level: 70 },
    { name: 'JavaScript Programming', level: 25 },
    { name: 'Cyber Security', level: 50 },
    { name: 'Game Development', level: 50 },
    { name: 'React JS Programming', level: 25 },
    { name: 'Web Design', level: 60 },
    { name: 'UI / UX', level: 50 },
    { name: 'Python Development', level: 40 },
    { name: 'Database Management', level: 80 }
  ];
  return (
    <Container className="project mt-5">
      <h1 className="text-center mb-4">Project Saya</h1>
      <Row className="g-4">
        {/* Blog Saya */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Blog Saya</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Maret 2016 - Sekarang
              </Card.Subtitle>
              <Card.Text>
                Saya memiliki blog website yang saya bangun demi kecintaan saya terhadap teknologi.
              </Card.Text>
              <Button variant="primary" href="https://smc.great-site.net" target="_blank">
                Kunjungi Website
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Game Buatan Saya */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Game Buatan Saya</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                April 2019 - Sekarang
              </Card.Subtitle>
              <Card.Text>
                Saya membuat game sederhana dan ditampilkan di profil itch.io saya.
              </Card.Text>
              <Button variant="success" href="https://seninterus.itch.io/" target="_blank">
                Lihat Game
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Program dan Aplikasi Saya */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Program dan Aplikasi Saya</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Januari 2019 - Sekarang
              </Card.Subtitle>
              <Card.Text>
                Saya membuat Program dan Aplikasi dan ditampilkan di profil GitHub saya.
              </Card.Text>
              <Button variant="dark" href="https://github.com/sternnaufal" target="_blank">
                Lihat Program
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
        
        <Card>
            <Card.Body>
              <Card.Title>Skillset</Card.Title>
              {skills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <strong>{skill.name}</strong>
                  <ProgressBar
                    now={skill.level}
                    label={`${skill.level}%`}
                    variant={getVariant(skill.level)}
                    className="mt-2"
                  />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

// Fungsi untuk menentukan warna progress bar
function getVariant(level) {
  if (level >= 80) return 'success';
  if (level >= 60) return 'info';
  if (level >= 40) return 'warning';
  return 'danger';
}
export default Project;
