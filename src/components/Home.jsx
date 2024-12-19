import React from 'react';
import About from './About';
import Citation from './Citation';
import ServiceDemo from './ServiceDemo';
import AgentDemo from './AgentDemo';
import Contact from './Contact';


function Home() {
    return (
        <>
            <About />
            <ServiceDemo />
            <AgentDemo />
            <Contact />
        </>
        
    );
}

export default Home;