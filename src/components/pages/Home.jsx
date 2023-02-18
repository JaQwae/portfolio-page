const Home = (theme) => {
    
    return (
        <div className='home-page page'>
            {/* <section id='top-html-design'>
                <p className='html-tag'>&lt;html&gt;</p>
                <p className='html-tag'>&lt;body&gt;</p>
            </section> */}
            <div id='main-home-page-content'>
                <section>
                    {/* <p className='html-tag'>&lt;h1&gt;</p> */}
                        <h2 id='home-page-greeting'>Howdy,</h2>
                        <h3>My name is JaQwae Ellison,</h3>
                        <h3>a full stack web developer</h3>
                    {/* <p className='html-tag'>&lt;/h1&gt;</p> */}
                </section>
                <section>
                    {/* <p className='html-tag'>&lt;p&gt;</p> */}
                    <h6>JavaScript | MERN | C#</h6>
                    {/* <p className='html-tag'>&lt;/p&gt;</p> */}
                </section>
                <section className="social-media-icon-container">
                    <a href="https://www.linkedin.com/in/jaqwae-ellison/" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-linkedin social-media-icons" id={`social-media-icons-${theme.theme}`}></i></a>
                    <a href="https://github.com/JaQwae" rel="noreferrer noopener"><i className="fa-brands fa-github social-media-icons" id={`social-media-icons-${theme.theme}`}></i></a>
                    <a href=""><i className="fa-brands fa-twitter social-media-icons" id={`social-media-icons-${theme.theme}`}></i></a>
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

