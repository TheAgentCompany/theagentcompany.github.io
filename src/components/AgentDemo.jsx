import React from 'react';

function AgentDemo() {
    const videos = [
        { 
            id: 1,
            src: "create_project_fast.mp4",
            title: "Project Creation Demo",
            alt: "Project creation demo video"
        },
        {
            id: 2,
            src: "unit_test_fast.mp4",
            title: "Unit test coverage Demo",
            alt: "Unit test coverage demo video"
        }
    ];

    return (
        <div className="section-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="section-title">Agent Demo</h2>
            <p className="section-description">
                The videos demonstrate how agents interact with different services in The Agent Company.
            </p>
            <div className="video-grid">
                {videos.map((video) => (
                    <div key={video.id} className="video-container">
                        <h3 className="video-title">{video.title}</h3>
                        <video 
                            controls
                            autoPlay
                            muted
                            loop
                        >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AgentDemo;