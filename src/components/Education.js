import { Container, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Education = () => {
  return (
    <Container>
      <Row className="info  p-5 text-center ">
        <div className="  mt-5 p-3 d-flex justify-content-center align-items-center">
          <h2 className="fw-bold">Education </h2>
        </div>
      </Row>
      <VerticalTimeline className="education">
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          date="August 2022 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#000000" }}
          icon={
            <span className="h1 p-2 vertical-timeline-element--work">
              <i class="fa-solid fa-code-compare"></i>{" "}
            </span>
          }>
          <h3 className="vertical-timeline-element-title fw-bold">
            Dented Code Academy
          </h3>
          <h6 className="vertical-timeline-element-subtitle">
            Sydney, Australia
          </h6>
          <div className="mt-3">
            <h6 className="fw-bold"> Full Stack Development Bootcamp</h6>
            <p>
              Skills- MERN Stack, MongoDB, Express.js, React, Node. Currently
              Working in Full-Stack E-commerce Project.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <span className="h1 p-3 vertical-timeline-element--work">
              <i className="fa-solid fa-user-graduate text-dark"></i>{" "}
            </span>
          }>
          <h3 className="vertical-timeline-element-title  fw-bold">
            Federation University Australia
          </h3>
          <h6 className="vertical-timeline-element-subtitle">Australia</h6>
          <div className="mt-3">
            <h6 className="fw-bold ">
              {" "}
              Bachelor of Information Technology (Software Development)
            </h6>
            <p>Successfully completed the course with 5.620 GPA.</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <span className="h1 p-2 vertical-timeline-element--work">
              <i class="fa-solid fa-building-columns text-dark"></i>
            </span>
          }>
          <h3 className="vertical-timeline-element-title  fw-bold">
            Oxford Secondary School
          </h3>
          <h6 className="vertical-timeline-element-subtitle">Nepal</h6>
          <div className="mt-3">
            <h6 className="fw-bold">
              {" "}
              Secondary level education - Major Science
            </h6>
            <p>CGPA: 3.50</p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};