import React, { useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Ranking = () => {

    const navigate = useNavigate();
    const [score, setScore] = useState([]);

    useEffect(() => {
        axios.get( process.env.REACT_APP_BACKEND_URL + '/api/leaderboard')
          .then(response => {
            setScore(response.data.data);
          })
          .catch(error => {

          });
      }, []);


    return(
        <div className="nes-container is-dark mt-5 w-75">
            <div className="nes-table-responsive">
            <h2 className="text-primary">Top 10 Scores</h2>
            <table className="userProfile-scoreTable mx-auto nes-table is-primary is-bordered is-centered is-dark mt-3">
            <thead>
            <tr>
                <th>User</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>
            {score.map((score, index) => (
                <tr key={score.id}>
                <td>{score.user}</td>
                <td>{score.total_score}</td>
                </tr>
            ))}
            </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <button type="button" className="nes-btn is-error" onClick={() => navigate("/jugar/multiplayer")}>Volver</button>
            </div>
            </div> 
        </div>
            
    );
};

export default Ranking;