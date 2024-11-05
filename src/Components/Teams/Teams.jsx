import './Teams.css';
import TeamsNavbar from '../TeamsNavbar/TeamsNavbar.jsx';
import TeamsList from './TeamsList.jsx';
import Encuestas from './Encuestas.jsx';


export default function Teams() {
    return <div className='teamspage'>
        <TeamsNavbar/>
        <div className="teamsinfo">
            <TeamsList/>
            <Encuestas/>
        </div>
    </div>

}