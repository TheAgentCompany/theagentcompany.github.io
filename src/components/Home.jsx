import React from 'react';
import About from './About';
import Citation from './Citation';
import ServiceDemo from './ServiceDemo';
import AgentDemo from './AgentDemo';
import Contact from './Contact';
import QuickStart from './QuickStart';


function Home() {
    return (
        <>
            <About />
            <ServiceDemo />
            <AgentDemo />
            <Citation />
            <QuickStart />
            <Contact />
        </>
        
    );
}

export default Home;