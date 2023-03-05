const AboutMe = (props) => {
    
    return (
        <div className='page' id="about-me-page">
            <h1 className="page-title">About Me Page</h1>
            <div id="about-me-page-content-container">
                <section id ="about-me-page-picture-container">
                    <img id='about-me-profile-picture' className={`about-me-picture-headers about-me-picture-headers-${props.theme}`} src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="JaQwae Ellison"></img>
                </section>
                <section id='about-me-introduction-container'>
                    <p className='about-me-text-paragraphs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <hr className="about-me-page-break" id={`about-me-page-break-${props.theme}`}></hr>
                <section id='about-me-education-container'>
                    <h3 className="about-me-section-title">Education</h3>
                    <img id='about-me-TexasA&M-photo' className={`about-me-picture-headers about-me-picture-headers-${props.theme}`} src="https://brazosvalleyedc.org/img/asset/YXNzZXRzL2hlcm8vWmFnc3Rlcl8yMDE2MDgwM19DYW1wdXNfQWVyaWFsc18zMjAzLmpwZw==?fm=webp&q=90&fit=crop-50-50&w=2091&h=597.42857142857&s=57ae1b4b6e6f2c71eaa7cc674a2f5b78" alt="Texas A&M University"></img>
                    <p className='about-me-text-paragraphs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img id='about-me-UT-photo' className={`about-me-picture-headers about-me-picture-headers-${props.theme}`} src="https://www.commonapp.org/static/aed6289d277c112ece5a609eff45ae9c/university-texas-austin_1171.jpg" alt="University of Texas Austin"></img>
                    <p className='about-me-text-paragraphs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <hr className="about-me-page-break" id={`about-me-page-break-${props.theme}`}></hr>
                <section id='about-me-passion-container'>
                    <h3 className="about-me-section-title">Passion</h3>
                    <img id='about-me-videography' className={`about-me-picture-headers about-me-picture-headers-${props.theme}`} src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="JaQwae Ellison"></img>
                    <p className='about-me-text-paragraphs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img id='about-me-fitness-photo' className={`about-me-picture-headers about-me-picture-headers-${props.theme}`} src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="JaQwae Ellison"></img>
                    <p className='about-me-text-paragraphs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <hr className="about-me-page-break" id={`about-me-page-break-${props.theme}`}></hr>
                <section id='about-me-location-container'>
                    <h3 className="about-me-section-title">Location</h3>
                    <div id="about-me-location-content-container">
                        <iframe className={`location-map location-map-${props.theme}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220448.6973139907!2d-97.89582413511677!3d30.30798270626543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1677383731672!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className={`location-information location-information-${props.theme}`}>
                            <h6>Located in: Austin</h6>
                            <h6>Open to Relocate: Yes</h6>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default AboutMe;