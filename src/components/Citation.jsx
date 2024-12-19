import React from 'react';

function Citation() {
    const citationText = `@misc{xu2024theagentcompanybenchmarkingllmagents,
      title={TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks}, 
      author={Frank F. Xu and Yufan Song and Boxuan Li and Yuxuan Tang and Kritanjali Jain and Mengxue Bao and Zora Z. Wang and Xuhui Zhou and Zhitong Guo and Murong Cao and Mingyang Yang and Hao Yang Lu and Amaad Martin and Zhe Su and Leander Maben and Raj Mehta and Wayne Chi and Lawrence Jang and Yiqing Xie and Shuyan Zhou and Graham Neubig},
      year={2024},
      eprint={2412.14161},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2412.14161}, 
}`;

    return (
        <div style={{ maxWidth: '1000px', margin: '1em auto', padding: '0.5em' }}>
            <h2 className="section-title">Citation</h2>
            <div className="citation-container">
                <div className="citation-content">
                    <div className="citation-header">
                        <span className="copy-icon" onClick={() => navigator.clipboard.writeText(citationText)}>
                            📋 Copy
                        </span>
                    </div>
                    <pre className="citation-text">
                        <code>{citationText}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
}

export default Citation;