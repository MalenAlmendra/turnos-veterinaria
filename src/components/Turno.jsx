import React, {Component} from 'react'

class Turno extends Component{
    render(){
        const {fecha,hora,mascota,propietario,sintoma}=this.props.info
        return(
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><span>Nombre Dueño:</span> {propietario}</p>
                    <p className="card-text"><span>Fecha:</span> {fecha}</p>
                    <p className="card-text"><span>Hora:</span> {hora}</p>
                    <p className="card-text"><span>Sintomas:</span><br/> {sintoma}</p>
                </div>
                <button onClick={()=>this.props.borrarTurno(this.props.idTurno)} className="btn btn-danger ">Borrar &times;</button>
            </div>
        )
    }
}

export default Turno;