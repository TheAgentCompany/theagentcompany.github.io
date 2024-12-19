import React from 'react';

function QuickStart() {
    return (
        <div style={{ maxWidth: '1000px', margin: '2em auto', padding: '0.5em' }}>
            <h2 className="section-title" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: '#0066B3',
                textAlign: 'center',
                marginBottom: '1.5em'
            }}>
                Excited to try it?

                Click button below!
            </h2>
            <div style={{
                padding: '2em',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)',
                borderRadius: '20px',
            }}>
                <a 
                    href="https://github.com/TheAgentCompany/TheAgentCompany?tab=readme-ov-file#quick-start"
                    style={{
                        display: 'inline-block',
                        padding: '16px 32px',
                        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96C93D, #FF9F1C)',
                        backgroundSize: '200% 200%',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontSize: '1.5rem',
                        fontWeight: '500',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.3s ease',
                        border: 'none',
                        cursor: 'pointer',
                        animation: 'gradient 5s ease infinite',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                    }}
                >
                    <style>
                        {`
                            @keyframes gradient {
                                0% {
                                    background-position: 0% 50%;
                                }
                                50% {
                                    background-position: 100% 50%;
                                }
                                100% {
                                    background-position: 0% 50%;
                                }
                            }
                        `}
                    </style>
                    Quick Start Guide
                </a>
            </div>
        </div>
    );
}

export default QuickStart;