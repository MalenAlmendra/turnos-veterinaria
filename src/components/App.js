import React, { Component } from 'react';
import Header from './Header'
import AgregarTurno from './AgregarTurno';
import ListaTurnos from './ListaTurnos';
class App extends Component {
//Funcionalidades de React
  state={
    turnos:{}
  }

  componentDidMount(){
    const turnosLS=localStorage.getItem('turnos');
    if(turnosLS){
      this.setState({
        turnos:JSON.parse(turnosLS)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem(
      'turnos',
      JSON.stringify(this.state.turnos)
    )
  }
//Metodos propios
  crearTurno=infoTurno=>{
    //Tomar una copia del state
    const turnos={...this.state.turnos}

    //Agregarlo al state actual
    turnos[`turnos${Date.now()}`]=infoTurno;

    //Set al State
    this.setState({turnos})

  }

  borrarTurno=(id)=>{
    //Leer el State
    const turnos={...this.state.turnos}

    //Borrarlo del State
    delete turnos[id]

    //Actualizar el State
    this.setState({turnos})

  }

  render() {
    return (
      <div className="container">
       <Header
        titulo="Administrador de pacientes de Veterinaria"
       />
       <div className="row">
        <div className="col-md-6">
          <AgregarTurno
            crearTurno={this.crearTurno}
          />
          
        </div>
        <div className="col-md-6">
          <ListaTurnos
            turnos={this.state.turnos}
            borrarTurno={this.borrarTurno}
          />
        </div>
       </div>
      </div>
    );
  }
}

export default App;
