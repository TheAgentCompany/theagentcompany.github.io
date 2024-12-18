import React from 'react';
import leaderboard from '../../data/leaderboard.json';
import { Link } from 'react-router-dom';
export default function Leaderboard_Details() {
    return (
        <p className="text-content">
              - The <span style={{color: '#0ea7ff'}}><b>% Resolved</b></span> metric refers to the percentage of Agent Company Tasks
              (<b>Total of {leaderboard.number_of_tasks}</b>)
              that were <i>resolved</i> by the model.
              <br />
              - The <span style={{color: '#0ea7ff'}}><b>% Score</b></span> is a weighted metric combining the sub checkpoint resolution rate 
              and resolution rate (50% each). It's calculated as: (sub checkpoints resolved / total sub checkpoints × 0.5) + 
              (resolution status × 0.5), where resolution status is 1 if resolved, 0 if not.
              <br />
              - The <span style={{color: '#0ea7ff'}}><b>Avg Steps</b></span> refers to the average number of steps taken by the model to execute the task.
              <br />
              - The <span style={{color: '#0ea7ff'}}><b>Avg Costs</b></span> refers to the average costs of the model to execute the task.
              <br />
              - <span style={{color: '#0ea7ff'}}><b>✅ Checked</b></span> indicates that we, the Agent Company team, received access to the system and
              were able to reproduce the patch generations.
              <br />
              - <span style={{color: '#0ea7ff'}}><b>🤠 Open</b></span> refers to submissions that have open-source code. This does <i>not</i>
              necessarily mean the underlying model is open-source.
              <br />
              - The leaderboard is updated once a week on <b>Monday</b>.
              <br />
              {/* - If you would like to submit your model to the leaderboard, please check the <Link to="/submit">submission</Link> page. */}
        </p>
    );
}