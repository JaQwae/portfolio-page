import React, { useCallback } from "react";
import { loadFull } from 'tsparticles'
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-background";

const ParticlesBackground = (theme) => {

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container)
        // This changes the theme for the particles background
        container.loadTheme(`${theme.theme}`)
    }, [theme]);

    return (
        <div id='particle-background'>
            <Particles
            id='tsparticles'
            particlesLoaded='particlesLoaded'
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
            height='100vh'
            width='100vw'
            >

            </Particles>
        </div>
    )
}

export default ParticlesBackground;
