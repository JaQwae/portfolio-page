import React from "react";
import SingleProject from "./SingleProject";

export default function ProjectList (props) {

    console.log(props.theme);

    return(
        <React.Fragment>
            <div className= {`portfolio-buttons-container`}>
                <button className={`portfolio-buttons portfolio-buttons-${props.theme}`} value='all' onClick={props.handleButtonClick}>All</button>
                <button className={`portfolio-buttons portfolio-buttons-${props.theme}`} value='front-end' onClick={props.handleButtonClick}>Front-End</button>
                <button className={`portfolio-buttons portfolio-buttons-${props.theme}`} value='back-end' onClick={props.handleButtonClick}>Back-End</button>
                <button className={`portfolio-buttons portfolio-buttons-${props.theme}`} value='full-stack' onClick={props.handleButtonClick}>Full-Stack</button>
            </div>

            <div className="project-container">
                {props.projects.map(project => {
                    return <SingleProject key={project.id} project = {project}/>
                })}
            </div>
        </React.Fragment>
    )
}