import React from 'react';
import headerDetails from '../data/header_details.json';
import { Link } from 'react-router-dom';

function Header() {
  // Helper function to get the correct superscript
  const getSuperscript = (author) => {
    let sup = '';
    switch(author.affiliation) {
      case 'CMU':
        sup = '1';
        break;
      case 'Independent':
        sup = '2';
        break;
      case 'Duke':
        sup = '3';
        break;
      default:
        sup = '1';
    }
    if (author.equal_contribution) {
      sup += '*';
    }
    return sup;
  };

  return (
    <section style={{ backgroundColor: 'transparent' }}>
      <div className="content-wrapper title-wrapper" style={{ flexDirection: 'column' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          paddingBottom: '15px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(30px, 5vw, 60px)', 
            paddingTop: '0.4em' 
          }}>{headerDetails.title}</h1>
          <img 
            src={process.env.PUBLIC_URL + '/TAC_logo.png'}
            style={{ 
              height: 'clamp(50px, 10vw, 100px)', 
              paddingTop: '0em', 
              paddingLeft: '0.5em' 
            }}
            alt="TheAgentCompanyLogo"
          />
        </div>
        <h3 style={{ fontSize: 'clamp(16px, 3vw, 24px)' }}>{headerDetails.subtitle}</h3>
        <p style={{ 
          textAlign: 'center', 
          marginTop: '1em',
          fontSize: 'clamp(14px, 2vw, 16px)',
          lineHeight: '1.8'
        }}>
          {/* First three authors */}
          {headerDetails.authors.slice(0, 3).map((author, index) => (
            <React.Fragment key={index}>
              <span>
                {author.link ? (
                  <a href={author.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {author.name}
                  </a>
                ) : (
                  author.name
                )}
                <sup>{getSuperscript(author)}</sup>
              </span>
              {index !== 2 && ', '}
            </React.Fragment>
          ))}
          <br />
          {/* Middle authors - display 4 per line */}
          {headerDetails.authors.slice(3, -2).map((author, index) => (
            <React.Fragment key={index}>
              {index % 4 === 0 && index !== 0 && <br />}
              <span>
                {author.link ? (
                  <a href={author.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {author.name}
                  </a>
                ) : (
                  author.name
                )}
                <sup>{getSuperscript(author)}</sup>
                {index !== headerDetails.authors.slice(3, -2).length - 1 && ', '}
              </span>
            </React.Fragment>
          ))}
          <br />
          {/* Last two authors */}
          {headerDetails.authors.slice(-2).map((author, index) => (
            <React.Fragment key={index}>
              <span>
                {author.link ? (
                  <a href={author.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {author.name}
                  </a>
                ) : (
                  author.name
                )}
                <sup>{getSuperscript(author)}</sup>
                {index === 0 && ', '}
              </span>
            </React.Fragment>
          ))}
        </p>
        
        {/* Affiliations */}
        <p style={{ 
          textAlign: 'center', 
          marginTop: '0.5em',
          fontSize: 'clamp(14px, 2vw, 16px)'
        }}>
          <sup>1</sup>Carnegie Mellon University{' '}
          <sup>2</sup>Independent{' '}
          <sup>3</sup>Duke University
        </p>

        <p style={{ 
          textAlign: 'center', 
          marginTop: '0.5em',
          fontSize: 'clamp(14px, 2vw, 16px)',
        }}>
          (* Equal contribution)
        </p>
        
        <div className="content-wrapper" style={{ marginTop: '2em' }}>
          <Link to="/">
            <button className="outline">
              <i className="fa fa-home"></i> Home&nbsp;
            </button>
          </Link>
          <a href={headerDetails.paper_link}>
            <button className="outline">
              <i className="fa fa-paperclip"></i> Paper&nbsp;
            </button>
          </a>
          <a href={headerDetails.github_link}>
            <button className="outline">
              <i className="fab fa-github"></i> Code&nbsp;
            </button>
          </a>
          <Link to="/leaderboard">
            <button className="outline" style={{ width: '200px' }}>
              <i className="fa fa-trophy"></i> Leaderboard&nbsp;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;