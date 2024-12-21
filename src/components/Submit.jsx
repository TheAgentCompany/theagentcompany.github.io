import React from 'react';

function Submit() {
    return (
        <>
        <div style={{paddingBottom: '50px'}}>
            <section className="main-container">
                <div className="content-wrapper" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{background: 'black', padding: '1.5em 1em', color: 'white', borderRadius: '1em', textAlign: 'center', width: '80%'}}>
                        All official submissions to TheAgentCompany leaderboard are maintained at
                        <a href="https://github.com/TheAgentCompany/experiments/" className="light-blue-link" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> TheAgentCompany/experiments
                        </a>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content-box">
                        <h3>
                            Submit to TheAgentCompany Leaderboard
                        </h3>
                        <p>
                            If you are interested in submitting your model to the <a href="https://the-agent-company.com/">The Agent Company Leaderboard</a>, please do the following:
                        </p>
                        <ol>
                            <li>Fork the <a href="https://github.com/TheAgentCompany/experiments">TheAgentCompany/experiments</a> repository.</li>
                            <li>Clone the repository. Due to this repository's large diff history, consider using `git clone --depth 1` if cloning takes too long.</li>
                            <li>Under the version that you evaluate on (currently there's only 1.0.0), create a new folder with the submission date and the model name (e.g. <code>20241217_OpenHands-0.14.2-gemini-1.5-pro</code>).</li>
                            <li>Within the folder, please include the following files:
                                <ul>
                                    <li><code>results/</code>: eval*.json, one for each task</li>
                                    <li><code>trajectories/</code>: Reasoning trace reflecting how your system solved the problem</li>
                                    <ul>
                                        <li>Submit one reasoning trace per task instance. The reasoning trace should show all of the steps your system took while solving the task. If your system outputs thoughts or comments during operation, they should be included as well.</li>
                                        <li>The reasoning trace can be represented with any text based file format (e.g. <code>md</code>, <code>json</code>, <code>yaml</code>)</li>
                                        <li>Ensure the task instance ID is in the name of the corresponding reasoning trace file.</li>
                                        <li>For an example, see <a href="https://github.com/TheAgentCompany/experiments/tree/main/evaluation/1.0.0/20241217_OpenHands-0.14.2-sonnet-20241022/trajectories">OpenHands + Claude 3.5 Sonnet</a></li>
                                    </ul>
                                    <li><code>README.md</code>: Include anything you'd like to share about your model here!</li>
                                    <li><code>screenshots/</code>: if applicable, e.g. using browser</li>
                                </ul>
                            </li>
                            <li>Create a pull request to the TheAgentCompany/experiments repository with the new folder.</li>
                        </ol>
                        <p>
                            You can refer to this <a href="https://github.com/TheAgentCompany/TheAgentCompany?tab=readme-ov-file#quick-start">tutorial</a> for a quick overview of how to evaluate your model.
                        </p>        
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content-box">
                        <h3>Verify Your Results</h3>
                        <p>
                            The <i>Verified</i> check ✓ indicates that we (The Agent Company team) received access to the model and were able to reproduce the results.
                        </p>
                        <p style={{marginTop: '0.5em'}}>
                            If you are interested in receiving the "verified" checkmark ✓ on your submission, please do the following:
                        </p>
                        <ol>
                            <li>Create an issue</li>
                            <li>In the issue, provide us instructions on how to run your model.</li>
                            <li>We will run your model on a random subset of The Agent Company and verify the results.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default Submit;