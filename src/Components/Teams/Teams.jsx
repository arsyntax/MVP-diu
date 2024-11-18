import './Teams.css';
//import TeamsNavbar from '../TeamsNavbar/TeamsNavbar.jsx';
import TeamsList from './TeamsList.jsx';
import Encuestas from './Encuestas.jsx';


export default function Teams() {
    return <div className='teamspage'>
            <TeamsList/>
            <Encuestas/>
    </div>

}