import React from 'react';

function ServiceDemo() {
    const videos = [
        { 
            id: 1,
            src: "gitlab_fast.mp4",
            title: "GitLab"
        },
        {
            id: 2,
            src: "plane_fast.mp4",
            title: "Plane"
        },
        {
            id: 3,
            src: "rocketchat_fast.mp4",
            title: "RocketChat"
        },
        {
            id: 4,
            src: "owncloud_fast.mp4",
            title: "OwnCloud"
        }
    ];

    return (
        <div className="section-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="section-title">Service Demo</h2>
            <p className="text-content centralize-text" style={{ marginBottom: '2em' }}>
                The videos demonstrate various service integrations in The Agent Company.
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

export default ServiceDemo;