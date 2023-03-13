import React from 'react';
import resume from "../../assets/images/Tech Resume 3122023.docx.pdf";

const Resume = (theme) => {
    return (
        <div className='resume-page page'>
            <h1 className="page-title">Resume Page</h1>
            <iframe src={resume} title="resume" className='resume-container' id={`resume-container-${theme.theme}`}></iframe>
        </div>
    )
}

export default Resume;