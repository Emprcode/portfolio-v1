import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import code1 from "../assets/code1.png";
import coffee from "../assets/coffee.png";
import hobbies from "../assets/hobbies.png";
import resume from "../assets/Resume.pdf";

export const About = () => {
  return (
    <Container>
      <Row className="info  p-5 text-center ">
        <div className="  mt-5 p-3 d-flex justify-content-center align-items-center">
          <h2 className="fw-bold">Hi, I'm Narayan Aryal </h2>
        </div>
        <h6 className="mt-4">
          {" "}
          I am a{" "}
          <span className="fw-bold text-primary">
            {" "}
            full stack MERN developer{" "}
          </span>{" "}
          based in Sydney, Australia. It's nice to see you here. I enjoy
          developing websites and applications and love to work on various
          projects.
        </h6>
        <div className="p-3">
          <a href={resume} download={true}>
            <Button
              variant="none"
              href="#contact"
              className="btn btn-outline-success rounded fw-bold">
              Download Resume <i className="fa-solid fa-download"></i>
            </Button>
          </a>
        </div>
      </Row>

      <Row className=" about d-flex flex-wrap ">
        <div> </div>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={code1} className="card-height" />

            <Card.Body className="card-body">
              <Card.Text className="h6">
                I love coding things and enjoy bringing ideas to life.
                Personally, I use JavaScript and its framework to create
                beautiful web applications from the scratch.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={coffee} className="card-height" />
            <Card.Body className="card-body">
              <Card.Text className="h6">
                If you have creative thoughts and want to collaborate with
                someone, I'm always up for a chat.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={hobbies} className="card-height" />
            <Card.Body className="card-body">
              <Card.Text className="h6">
                Besides coding, I enjoy my life travelling, playing various
                sports and listening music and many more.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
