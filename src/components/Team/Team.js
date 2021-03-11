import { Link } from 'react-router-dom';
import './Team.css'
const Team = (props) => {
    //console.log(props.team)
    const {strTeamBadge, strTeam, strSport, idTeam} = props.team || {};
    //const [teamId, setTeamId] = useState([]);
    
    
    return (
        <div className="team-page">
            <img src={strTeamBadge} alt=""/>
            <h1>{strTeam}</h1>
            <p>Sports Type: {strSport}</p>
            {
              <Link to={`/team/${idTeam}`}><button type="button" class="btn btn-primary btn-explore">Primary <i class="fas fa-arrow-right btn-icon"></i></button></Link>
            }
            
            
        </div>
    );
};

export default Team;