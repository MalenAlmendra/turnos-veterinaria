import React,{Component} from 'react';
import Turno from './Turno';

class ListaTurnos extends Component{
    render(){

        const turnos=this.props.turnos,
            mensaje=Object.keys(turnos).length === 0 ? 'No hay Turnos':'Administra tus turnos acá'
        
        return(

           <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
               <div className="lista-turnos">
                {Object.keys(this.props.turnos).map(turno=>(
                    <Turno
                        key={turno}
                        idTurno={turno}
                        info={this.props.turnos[turno]}
                        borrarTurno={this.props.borrarTurno}
                    />
                ))}
               </div>
            </div>
           </div>
        )
    }
}

export default ListaTurnos