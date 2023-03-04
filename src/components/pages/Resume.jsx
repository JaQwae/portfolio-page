import React from 'react';
import resume from "../../assets/images/Jay Tech Resume.docx.pdf";

const Resume = (theme) => {
    return (
        <div className='resume-page page'>
            <h1 className="page-title">Resume Page</h1>
            <iframe src={resume} title="resume" className='resume-container' id={`resume-container-${theme.theme}`}></iframe>
        </div>
    )
}

export default Resume;