import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import MaleImage from '../male.png';
import FemaleImage from '../female.png';
const TeamDetails = () => {
    const {idTeam} = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[idTeam])

    let genderImage;
    let gender = `${team.strGender}`;

    if(gender === 'Male')
    {
        genderImage = `${MaleImage}`
    }
    else
    {
        genderImage = `${FemaleImage}`
    }

    let description1 = `${team.strStadiumDescription || team.strDescriptionCN || team.strDescriptionEN || team.strDescriptionIT || team.strDescriptionES || team.strDescriptionPT}`;
    let description2 = `${team.strDescriptionCN || team.strDescriptionEN || team.strDescriptionIT || team.strDescriptionES || team.strDescriptionPT}`;
    
    return (
        <div className="detailsPage">
            <div className="team-detailsImg">
                <img src={team.strTeamBanner} alt=""/>
            </div>
            <div class="card flex-row flex-wrap details justify-content-center px-4 p-4 bg-primary">
                <div class="card-header border-0 teamDetails px-4">
                    <h1>{team.strTeam}</h1>
                    <h3><i class="far fa-flag"></i> Country: {team.strCountry}</h3>
                    <h3><i class="fas fa-bullhorn"></i>  Founded: {team.intFormedYear}</h3>
                    <h3><i class="far fa-futbol"></i> Sports Type: {team.strSport}</h3>
                    <h3><i class="fas fa-mars"></i> Gender: {team.strGender}</h3>
                </div>
                <div class="card-block px-5 detailsImg gx-5">
                    <img src={genderImage} alt=""/>
                </div>
            </div>
            <p>{description1}</p>
            <br/>
            <p>{description2}</p>
            <div className="logo">
                <a target="_blank" href={team.strFacebook}><i class="fab fa-facebook fa-3x icon"></i></a>
                <a target="_blank" href={team.strYoutube}><i class="fab fa-youtube fa-3x icon-youtube"></i></a>
                <a target="_blank" href={team.strTwitter}><i class="fab fa-twitter fa-3x icon"></i></a>
                <a target="_blank" href={team.strInstagram}><i class="fab fa-instagram-square fa-3x icon-instagram"></i></a>
            </div>
        </div>
    );
};

export default TeamDetails;