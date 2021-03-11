import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import Image from '../../field.png'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
        .then(res => res.json())
        .then(data => setTeams(data.teams));
    },[])

    return (
        <div>
            <div className="displayImg img-fluid">
                <img src={Image} alt=""></img>
                <div className="centered"><h2>Team Tracker</h2></div>
            </div>
            
            <div className="home-page">
            {
               teams.map(team => <Team team = {team}></Team>)
            }
            </div>
        </div>
    );
};

export default Home;