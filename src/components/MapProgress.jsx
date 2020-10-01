import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import "../css/timeline.css"; */
import { CheckBox } from "@material-ui/icons";


const completedTaskStyles = {
  contentStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
  contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};

const incompletedTaskStyles = {
  contentStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
  contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  iconStyle: { background: "red", color: "#fff", icon:'AccessAlarmsIcon' }
};

const MapProgress = ({ tasks = [], onTaskChange }) => {
  const oncheckBoxChange = (value, taskId)=> {
    const checked = value === "on" ? true : false
     if ( onTaskChange ){
      onTaskChange (checked, taskId)
    }
  }
  return (
    <div>
      <h1>Aquí verás el mapa de trabajo</h1>
      <VerticalTimeline>
        {tasks.map((task, index) => {
          const styles = task.completed ? completedTaskStyles : incompletedTaskStyles
          return (
            <VerticalTimelineElement key={index}
              position="right"
              className="vertical-timeline-element--work"
              /* icon={<AccessAlarmsIcon/>} */
              /* icon={<FontAwesomeIcon icon="address-card" />} */
              date="20/09/2020"
              {...styles}>
              <h3 className="vertical-timeline-element-title">
                {task.nameTask}
              </h3>              
              <p>
                {task.descriptionTask}
              </p>
              <input 
                type = "checkbox"
                onChange = {(event)=> oncheckBoxChange(event.target.value, task.id)} />
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

    </div>
  );
};
export default MapProgress