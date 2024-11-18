import './TeamsList.css';
import { TeamCard } from './TeamCard';

export default function TeamsList() {
    var equiposLista = [
        {id: "10152748", nombre: "kingsoftware"},
        //{id: "27890453", nombre: "desarrollo.sa"}
    ];

    return (
        <div className="teamsListContainer">
            <div className="teamsTitle">Equipos</div>
            <div className="teamsList">
                {equiposLista.length === 0 ? (
                    <p>No hay equipos registrados</p>
                ): (
                    equiposLista.map((equipo, index) => (
                        <TeamCard key={index} equipo={equipo} />
                    ))
                )
                }
            </div>
        </div>
    );
}
