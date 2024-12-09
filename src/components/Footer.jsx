import React from 'react';

function Footer() {
    return (
        <footer style={{ 
            textAlign: 'center', 
            padding: '20px',
            fontSize: '0.9em',
            borderTop: '1px solid #eee',
            marginTop: '40px'
        }}>
            <p>Acknowledgements: This leaderboard is derived from the SWE-bench leaderboard framework, used with the explicit permission of the SWE-bench team. We thank them for their work in creating and sharing the template.</p>
            <p>This is just a protoype and the data displayed is just dummy data</p>
        </footer>
    );
}

export default Footer;