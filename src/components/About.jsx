import React from 'react';

function About() {
    return (
        <div style={{ maxWidth: '1000px', margin: '2em auto', padding: '0.5em' }}>
            <h2 className="section-title" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: '#0066B3',
                textAlign: 'center',
                marginBottom: '1em'
            }}>
                About
            </h2>
            <div style={{
                background: '#f8f9fa',
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                padding: '2em',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
                <p style={{ marginBottom: '2.5em' }}>
                    We interact with computers on an everyday basis, be it in everyday life or work, and many aspects of work can be done entirely with access to a computer and the Internet.
                    At the same time, thanks to improvements in large language models (LLMs), there has also been a rapid development in AI agents that interact with and affect change in their surrounding environments.
                    But how performant are AI agents at helping to accelerate or even autonomously perform work-related tasks?
                    The answer to this question has important implications for both industry looking to adopt AI into their workflows, and for economic policy to understand the effects that adoption of AI may have on the labor market.
                    TheAgentCompany measures the progress of these LLM agents' performance on performing real-world professional tasks,
                    by providing an extensible benchmark for evaluating AI agents that interact with the world in similar ways to those of a digital worker: by browsing the Web, writing code, running programs, and communicating with other coworkers.
                </p>
                <img 
                    src="TAC_architecture.png" 
                    style={{
                        width: '100%',
                        display: 'block',
                        borderRadius: '4px'
                    }}
                    alt="TAC Architecture"
                />
            </div>
        </div>
    );
}

export default About;