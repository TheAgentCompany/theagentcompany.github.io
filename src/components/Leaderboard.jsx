import React, { useState } from 'react';
import Leaderboard_Details from './subcomponents/Leaderborad_Details';
import leaderboardData from '../data/leaderboard.json';

function Leaderboard() {
  const [activeTab, setActiveTab] = useState('Verified');

  // Sort rows by resolved count in descending order
  // If same resolved count, sort by score in descending order
  const sortedRows = [...leaderboardData.rows].sort((a, b) => {
    if (b.resolved !== a.resolved) {
      return b.resolved - a.resolved;
    }
    return b.score - a.score;
  });

  return (
    <div className="content-wrapper">
      <div className="content-box">
        <h2 className="text-title">Leaderboard</h2>
        <div className="tabcontent" style={{ display: 'block' }}>
          <table className="table scrollable">
          <thead>
                  <tr>
                    <th><div class="sticky-header-content">Model</div></th>
                    <th><div class="sticky-header-content">% Resolved</div></th>
                    <th><div class="sticky-header-content">% Score</div></th>
                    <th><div class="sticky-header-content">Avg Steps</div></th>
                    <th><div class="sticky-header-content">Avg Costs ($)</div></th>
                    <th><div class="sticky-header-content">Org</div></th>
                    <th><div class="sticky-header-content">Date</div></th>
                    <th><div class="sticky-header-content">Environment Model</div></th>
                    <th><div class="sticky-header-content">Trajs</div></th>
                    <th><div class="sticky-header-content">Screenshot</div></th>
                    <th><div class="sticky-header-content">Site</div></th>
                  </tr>
                </thead>
                <tbody>
                    {sortedRows.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <p className="model-type">
                                    {index===0 && "🥇 "}
                                    {index===1 && "🥈 "}
                                    {index===2 && "🥉 "}
                                    {row.open_source && "🤠 "}
                                    {row.checked && "✅ "}
                                    {row.model}
                                </p>
                            </td>
                            <td>
                                <p className='number'>{row.resolved.toFixed(1)}%</p>
                            </td>
                            <td>
                                <p className='number'>{row.score.toFixed(1)}%</p>
                            </td>
                            <td>
                                <p className='number'>{row.steps ? row.steps.toFixed(2) : 'N/A'}</p>
                            </td>
                            <td>
                                <p className='number'>{row.costs ? row.costs.toFixed(2) : 'N/A'}</p>
                            </td>
                            <td>
                                {row.org && 
                                    <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <img src={row.org} style={{height: '2em'}} alt="org" />
                                    </p>
                                }
                                {!row.org && <span>-</span>}
                            </td>
                            <td>
                                <p>
                                    <span className="label-date">{row.date}</span>
                                </p>
                            </td>
                            <td>
                                <p style={{textAlign: 'center'}}>
                                {row.enviroment_model || '-'}
                                </p>
                            </td>
                            <td>
                                <p style={{textAlign: 'center'}}>
                                    {row.trajs}
                                </p>
                            </td>
                            <td>
                                <p style={{textAlign: 'center'}}>
                                    {row.screenshot || '-'}
                                </p>
                            </td>
                            <td>
                                <p style={{textAlign: 'center'}}>
                                    {row.site && <a href={row.site}>🔗</a>}
                                    {!row.site && <span>-</span>}
                                </p>    
                            </td>
                        </tr>
                    ))}

                </tbody>
          </table>
        </div>
        
        <Leaderboard_Details />
      </div>
    </div>
  );
}

export default Leaderboard; 