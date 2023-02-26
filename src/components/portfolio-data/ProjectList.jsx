import React from "react";
import SingleProject from "./SingleProject";

export default function ProjectList (props) {
    return(
        <React.Fragment>
            <div className="portfolio-buttons">
                <button value='all' onClick={props.handleButtonClick}>All</button>
                <button value='front-end' onClick={props.handleButtonClick}>Front-End</button>
                <button value='back-end' onClick={props.handleButtonClick}>Back-End</button>
                <button value='full-stack' onClick={props.handleButtonClick}>Full-Stack</button>
            </div>

            <div className="project-container">
                {props.projects.map(project => {
                    return <SingleProject key={project.id} project = {project}/>
                })}
            </div>
        </React.Fragment>
    )
}