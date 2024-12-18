import React from 'react';

function About() {
    return (
        <div className="content-wrapper">
          <div className="content-box">
            <h2 className="text-title">About</h2>
            
            <p className="text-content">
            We interact with computers on an everyday basis, be it in everyday life or work, and many aspects of work can be done entirely with access to a computer and the Internet.
            At the same time, thanks to improvements in large language models (LLMs), there has also been a rapid development in AI agents that interact with and affect change in their surrounding environments.
            But how performant are AI agents at helping to accelerate or even autonomously perform work-related tasks?
            The answer to this question has important implications for both industry looking to adopt AI into their workflows, and for economic policy to understand the effects that adoption of AI may have on the labor market.
            TheAgentCompany measures the progress of these LLM agents' performance on performing real-world professional tasks,
            by providing an extensible benchmark for evaluating AI agents that interact with the world in similar ways to those of a digital worker: by browsing the Web, writing code, running programs, and communicating with other coworkers.
            </p>
            <img src="TAC_architecture.png" style={{width: '80%', margin: 'auto', display: 'block'}}/>
            <h3 className="text-title" style={{marginBottom: '0.5em'}}>Citation</h3>
            <pre id="citation"><code>{`@inproceedings{
                jimenez2024swebench,
                title={{SWE}-bench: Can Language Models Resolve Real-world Github Issues?},
                author={Carlos E Jimenez and John Yang and Alexander Wettig and Shunyu Yao and Kexin Pei and Ofir Press and Karthik R Narasimhan},
                booktitle={The Twelfth International Conference on Learning Representations},
                year={2024},
                url={https://openreview.net/forum?id=VTF8yNQM66}
            }`}</code></pre>
          </div>
        </div>
    );
}

export default About;