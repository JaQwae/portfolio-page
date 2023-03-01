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

    // const[hasDeployedLink, setHasDeployedLink] = useState(true);

    // function hasADeployedLink (props) {
        // const deployedLink = props.project.deployedLink;
    //     if (props.project.deployedLink !== '') {
    //         setHasDeployedLink(true);
    //     };
    //     if (props.project.deployedLink === '') {
    //         setHasDeployedLink(false);
    //     };
    // }

    return (
            <div className="single-project" id={`single-project-${props.theme}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {/* active when mouse is not over the element */}
                <div 
                    className={`"non-hover-project-state" ${
                        !isHovering ? '' : 'hidden-project-state'
                    }`}
                >
                    <h4 className="project-title">{props.project.title}</h4>
                    <img src={`${props.project.image}`} alt={`${props.project.altText}`} className="project-images"></img>
                </div>
                {/* active when mouse is over the element */}
                <div 
                    className={`hover-project-state ${
                        isHovering ? '' : 'hidden-project-state'
                    }`}
                >
                    <a
                    href={`${props.project.deployedLink}`}
                    className={`icon-link icon-link-${props.theme} ${
                        props.project.deployedLink ? '' : 'hidden-project-state'
                    }`}
                    target="_blank"
                    rel="noreferrer noopener"
                    >
                        <i className="fa-regular fa-circle-play project-icons"></i>
                    </a>
                    <a
                        href={`${props.project.gitHubLink}`} 
                        className={`icon-link icon-link-${props.theme} ${
                            props.project.gitHubLink ? '' : 'hidden-project-state'
                        }`} 
                        target="_blank" 
                        rel="noreferrer noopener"
                    >
                        <i className="fa-brands fa-github project-icons"></i>
                    </a>
                </div>
            </div>
    )
}