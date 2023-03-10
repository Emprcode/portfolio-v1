import { Button, Col, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, github, live }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx text-light">
          <h4>{title}</h4>
          <span>{description}</span>

          <Row className="mt-5 ">
            <Col>
              <Button variant="none">
                {" "}
                <a href={github} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github text-light h1"> </i>
                </a>
              </Button>
            </Col>
            <Col>
              <Button variant="none">
                <a href={live} target="_blank" rel="noreferrer">
                  <div className="h1 ">
                    <i className="fa-solid fa-right-from-bracket text-light "></i>
                  </div>
                </a>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};
