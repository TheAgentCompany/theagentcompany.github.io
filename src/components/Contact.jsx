import React from 'react';

function Contact() {
    return (
        <div style={{ maxWidth: '1000px', margin: '2em auto', padding: '0.5em' }}>
            <h2 className="section-title" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: '#0066B3',
                textAlign: 'center',
                marginBottom: '1em'
            }}>
                Contact
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
                <div style={{ marginBottom: '1em' }}>
                    Questions? Please create an issue in our{' '}
                    <a 
                        href="https://github.com/your-repository" 
                        style={{ color: '#0066B3', textDecoration: 'underline' }}
                    >
                        github repository here
                    </a>
                    .
                </div>
                <div style={{ marginBottom: '1em' }}>
                    Otherwise, you can also contact:
                </div>
                <div style={{ marginBottom: '0.5em', fontWeight: '500' }}>
                    <a href="https://frankxfz.me/" style={{ color: '#0066B3' }}>Frank F. Xu</a>,{' '}
                    <a href="https://github.com/yufansong" style={{ color: '#0066B3' }}>Yufan Song</a>,{' '}
                    <a href="https://github.com/li-boxuan" style={{ color: '#0066B3' }}>Boxuan Li</a>
                </div>
                <div>
                    Email:{' '}
                    <a href="mailto:fangzhex@cs.cmu.edu" style={{ color: '#0066B3' }}>fangzhex@cs.cmu.edu</a>,{' '}
                    <a href="mailto:yufans@alumni.cmu.edu" style={{ color: '#0066B3' }}>yufans@alumni.cmu.edu</a>,{' '}
                    <a href="mailto:boxuanli@alumni.cmu.edu" style={{ color: '#0066B3' }}>boxuanli@alumni.cmu.edu</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;