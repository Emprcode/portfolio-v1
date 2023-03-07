import { Button, Col, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" width="100%" height="280rem" />
        <div className="proj-txtx text-light">
          <h4>{title}</h4>
          <span>{description}</span>

          <Row className="mt-5 ">
            <Col>
              <Button variant="none">
                {" "}
                <i className="fa-brands fa-github h1"></i>
              </Button>
            </Col>
            <Col>
              <Button variant="none">
                {" "}
                <i className="fa-solid fa-right-from-bracket h1"></i>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};
