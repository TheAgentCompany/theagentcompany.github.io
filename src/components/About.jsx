import React from 'react';

function About() {
    return (
        <div className="content-wrapper">
          <div className="content-box">
            <h2 className="text-title">About</h2>
          <img src="TAC_architecture.png" style={{width: '80%', margin: 'auto', display: 'block'}}/>
            <p className="text-content">
            Today we interact with computers on an everyday basis, be it life or work.
            Today, many aspects of professional work can be done entirely with access to a computer and the Internet.
            At the same time, thanks to improvements in large language models (LLMs), there has also been a rapid development in AI agents that interact with and affect change in their surrounding environments.
            But how performant are AI agents
            To measure the progress of these LLM agents' performance on performing real-world professional tasks,
            in this paper, we introduce tac, an extensible benchmark for evaluating AI agents that interact with the world in similar ways to those of a digital worker: by browsing the Web, writing code, running programs, and communicating with other coworkers.
            We build a self-contained environment with internal web sites and data that mimics a small software company environment, and create a variety of tasks that may be performed by workers in such a company.
            We test baseline agents powered by both closed API-based and open-weights language models (LMs), and find that with the most competitive agent, 24% of the tasks can be completed autonomously.
            This paints a nuanced picture on task automation with LM agents -- in a realistic setting simulating a real workplace, a good portion of simpler tasks could be solved autonomously, but more difficult long-horizon tasks are still beyond the reach of current systems.
            </p>
            <h3 className="text-title" style={{marginBottom: '0.5em'}}>Citation</h3>
            <pre id="citation"><code>{`@inproceedings{
                jimenez2024swebench,
                title={{SWE}-bench: Can Language Models Resolve Real-world Github Issues?},
                author={Carlos E Jimenez and John Yang and Alexander Wettig and Shunyu Yao and Kexin Pei and Ofir Press and Karthik R Narasimhan},
                booktitle={The Twelfth International Conference on Learning Representations},
                year={2024},
                url={https://openreview.net/forum?id=VTF8yNQM66}
            }`}</code></pre>
            <p className="text-content" style={{marginBottom: '0'}}>
              <b>Disclaimer:</b> TheAgentCompany benchmark is for research purposes only. Models
              trained and evaluated on TheAgentCompany can produce unexpected results.
              We are not responsible for any damages caused by the use of
              TheAgentCompany, including but not limited to, any loss of profit, data,
              or use of data.
            </p>
            {/* <p style={{lineHeight: '1.6667em'}}>
              <b>Usage:</b> If you would like to use this website template for your
              own leaderboard, please send Carlos & John an email requesting permission.
              If granted, please make sure to acknowledge the TheAgentCompany team and link to
              this leaderboard on the home page of the website.
            </p> */}
          </div>
        </div>
    );
}

export default About;