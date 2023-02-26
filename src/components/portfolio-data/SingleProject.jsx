import React from "react";
import { useState } from "react";
export default function SingleProject (props) {

    const[isHovering, setIsHovering] = useState(false);

    function handleMouseEnter (e) {
        setIsHovering(true);
    };

    function handleMouseLeave (e) {
        setIsHovering(false);
    };

    return (
            <div className="singleProject" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {/* active when mouse is not over the element */}
                <div className={`"non-hover-project-state" ${
                        !isHovering ? '' : 'hidden-project-state'
                    }`} >
                <h4>{props.project.title}</h4>
                    <p>{props.project.image}</p>
                </div>
                {/* active when mouse is over the element */}
                <div className={`hover-project-state ${
                        isHovering ? '' : 'hidden-project-state'
                    }`}>
                    <p>{props.project.deployedLink}</p>
                    <p>{props.project.gitHubLink}</p>
                </div>
            </div>
    )
}