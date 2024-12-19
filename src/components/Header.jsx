import React from 'react';
import headerDetails from '../data/header_details.json';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section style={{ backgroundColor: 'transparent' }}>
      <div className="content-wrapper title-wrapper" style={{ flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '15px' }}>
          <h1 style={{ fontSize: '60px', paddingTop: '0.4em' }}>{headerDetails.title}</h1>
          <img 
            src={process.env.PUBLIC_URL + '/TAC_logo.png'} 
            style={{ height: '100px', paddingTop: '0em', paddingLeft: '0.5em' }} 
            alt="TheAgentCompanyLogo" 
          />
        </div>
        <h3>{headerDetails.subtitle}</h3>
        {/* <h3 style={{ fontSize: '20px', paddingTop: '1.2em' }}>ICLR 2024</h3> */}
        <p style={{ textAlign: 'center', marginTop: '1em' }}>
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
                {author.equal_contribution && <sup>*</sup>}
              </span>
              {index !== 2 && ', '}
            </React.Fragment>
          ))}
          <br />
          {/* Middle authors */}
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
                {author.equal_contribution && <sup>*</sup>}
              </span>
              {index !== headerDetails.authors.slice(3, -2).length - 1 && ', '}
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
                {author.equal_contribution && <sup>*</sup>}
              </span>
              {index === 0 && ', '}
            </React.Fragment>
          ))}
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
          {/* <Link to="/submit">
            <button className="outline">
              <i className="fa fa-upload"></i> Submit&nbsp;
            </button>
          </Link> */}
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