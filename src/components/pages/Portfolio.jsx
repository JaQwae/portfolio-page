import { useState } from "react";
import { data } from "../portfolio-data/data";
import ProjectList from "../portfolio-data/ProjectList";

const Portfolio = () => {

    const projectData = {
        projects:data,
    }

    const [projects, setProjects] = useState(projectData.projects);

    // filter button functionality
    const handleButtonClick = (e) => {
        if(e.target.value === 'all') {
            setProjects(projectData.projects);
            // console.log(projects)
        } else {
            setProjects(projectData.projects.filter(projects => projects.category === e.target.value));
            // console.log(projects)
        }
    }
    
    const map = new Map(Object.entries(projects));

    return (
        <div className='portfolio-page page'>
            <h1>Portfolio Page</h1>
            <ProjectList projects = {projects} handleButtonClick={handleButtonClick} />
            
        </div>
    )
};

export default Portfolio;