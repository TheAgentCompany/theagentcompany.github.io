import React from 'react';

function Citation() {
    const citationText = `@inproceedings{jimenez2024swebench,
    title     = {{SWE}-bench: Can Language Models Resolve Real-world Github Issues?},
    author    = {Carlos E Jimenez, John Yang, Alexander Wettig, Shunyu Yao, Kexin Pei, Ofir Press, Karthik R Narasimhan},
    booktitle = {The Twelfth International Conference on Learning Representations},
    year      = {2024},
    url       = {https://openreview.net/forum?id=VTF8yNQM66}
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