/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

export function EncuestaCard({ id, encuesta }) {
    const navigate = useNavigate();

    const handleResponder = () => {
        navigate(`/encuesta/${id}`);
    }
    const handleRecordar = () => {
        alert("Función no implementada");
    }
    const handleNoResponder = () => {
        alert("Función no implementada");
    }

    return (
        <div className="encuestaItem">
            <p>{encuesta.titulo} - {encuesta.equipo}</p>
            <div className="encuestaOptions">
                <p onClick={handleResponder} className="encuestaOption">Responder</p> |
                <p onClick={handleRecordar} className="encuestaOption">Recordar después</p> |
                <p onClick={handleNoResponder} className="encuestaOption">No responder</p>
            </div>
        </div>
    );
}
