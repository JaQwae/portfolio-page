const AboutMe = () => {
    return (
        <div className='about-me-page page'>
            <h1>About Me Page</h1>
            <div>
                <section id="about-me-page-picture-container">
                </section>
                <section id='about-me-introduction-container'>
                </section>
                <section id='about-me-education-container'>
                </section>
                <section id='about-me-interest-container'>
                </section>
                <section id='about-me-location-container'>
                    <h3>Location</h3>
                    <div className="about-me-location-content-container">
                        <iframe className='location-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220448.6973139907!2d-97.89582413511677!3d30.30798270626543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1677383731672!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="location-information">
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