const Home = (theme) => {
    
    return (
        <div className='home-page'>
            <div id='main-home-page-content'>
                <section>
                        <h2 id='home-page-greeting'>Howdy,</h2>
                        <h3>My name is JaQwae Ellison,</h3>
                        <h3>a full stack web developer</h3>
                </section>
                <section>
                    <h6>JavaScript | MERN | C#</h6>
                </section>
                <section className="social-media-icon-container">
                    <a href="https://www.linkedin.com/in/jaqwae-ellison/" target="_blank" rel="noreferrer noopener">
                        <i className="fa-brands fa-linkedin social-media-icons" id={`social-media-icons-${theme.theme}`}>
                            {/* Gives hover animation over links */}
                            <span></span><span></span><span></span><span></span>
                        </i>
                    </a>
                    <a href="https://github.com/JaQwae" rel="noreferrer noopener">
                        <i className="fa-brands fa-github social-media-icons" id={`social-media-icons-${theme.theme}`}>
                            {/* Gives hover animation over links */}
                            <span></span><span></span><span></span><span></span>
                        </i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-twitter social-media-icons" id={`social-media-icons-${theme.theme}`}>
                            {/* Gives hover animation over links */}
                            <span></span><span></span><span></span><span></span>
                        </i>
                    </a>
                </section>
            </div>
            {/* <section id='bottom-html-design'>
                <p className='html-tag'>&lt;/body&gt;</p>
                <p className='html-tag'>&lt;/html&gt;</p>
            </section> */}
        </div>
    )
};

export default Home;

