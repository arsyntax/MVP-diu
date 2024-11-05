import './TeamsList.css';

export default function TeamsList() {
    var equiposLista = [
        {id: "10152748", nombre: "kingsoftware"},
        {id: "27890453", nombre: "desarrollo.sa"}
    ];

    return (
        <div className="teamsListContainer">
            <div className="teamsTitle">Equipos</div>
            <div className="teamsList">
                {equiposLista.length > 0 ? (equiposLista.map((equipo, index) => (
                    <div className="teamsItem">
                        <p>{equipo.id} - {equipo.nombre}</p>
                    </div>
                    ))
                ):
                (<p>No hay equipos registrados</p>)
                }
            </div>
        </div>
    );
}
