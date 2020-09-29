import React from "react";
import SignOff from "../components/SignOff";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/timeline.css";

const EMap = () => {
  return (
    <div>
      <h1>Aquí verás el mapa de trabajo</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          position="right"
          className="vertical-timeline-element--work"
          date="2011 "
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon="address-card" />}
        >
          <h3 className="vertical-timeline-element-title">Analista de recursos humanos</h3>
          <h4 className="vertical-timeline-element-subtitle">Departamento de RRHH EY</h4>
          <p>
          Realizar la selección de personal para el puesto de Front-End para el departamento de sistemas
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="right"
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon="address-card" />}
        >
          <h3 className="vertical-timeline-element-title">Analista de recursos humanos</h3>
          <h4 className="vertical-timeline-element-subtitle">
          Departamento de RRHH EY
          </h4>
          <p>
          Revisión de resumen curricular de postulantes 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="right"
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon="address-card" />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon="address-card" />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FontAwesomeIcon icon="address-card" />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <SignOff />
    </div>
  );
};

export default EMap;
