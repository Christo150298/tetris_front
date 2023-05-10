import React from 'react';
import moment from 'moment';

const UserScores = ({scores}) => {
    return (
        <>
            <h3> User Scores:</h3>
            <div className="nes-table-responsive ">
                <div className='table-scroll'>
                    <table className="userProfile-scoreTable mx-auto nes-table is-primary is-bordered is-centered is-dark">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Total Score</th>
                                <th>Reached Level</th>
                                <th>Time (sec)</th>
                                <th>Broken Rows</th>
                            </tr>
                        </thead>
                        <tbody >
                            {scores.slice().reverse().map((score, index) => (
                                <tr key={index}>
                                    <td>{moment(score.game_date).format('lll')}</td>
                                    <td>{score.total_score}</td>
                                    <td>{score.reached_level}</td>
                                    <td>{score.time}</td>
                                    <td>{score.broken_rows}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default UserScores;

