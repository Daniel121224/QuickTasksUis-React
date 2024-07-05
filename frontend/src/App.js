import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Login from './paginas/auth/Login';
import Home from './paginas/Home';
import EntornosAdmin from './paginas/entornos/EntornosAdmin';
import EntornosCrear from './paginas/entornos/EntornosCrear';
import EntornosEditar from './paginas/entornos/EntornosEditar';
import TareasAdmin from './paginas/entornos/TareasAdmin';
import TareasCrear from './paginas/entornos/TareasCrear';
import TareasEditar from './paginas/entornos/TareasEditar';
import Calendario from './componentes/Calendario';
import EquiposAdmin from './paginas/equipos/EquiposAdmin';
import EquiposCrear from './paginas/equipos/EquiposCrear';
import EquiposEditar from './paginas/equipos/EquiposEditar';
import Acerca from './componentes/Acerca';
function App() {


  
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/entornos-admin" exact element={<EntornosAdmin/>}/>
          <Route path="/entornos-crear" exact element={<EntornosCrear/>}/>
          <Route path="/entornos-editar/:identorno" exact element={<EntornosEditar/>}/>
          <Route path="/tareas-admin/:identorno" exact element={<TareasAdmin/>}/>
          <Route path="/tareas-crear/:identorno" exact element={<TareasCrear/>}/>
          <Route path="/tareas-editar/:identorno" exact element={<TareasEditar/>}/>
          <Route path="/calendario" exact element={<Calendario/>}/>
          <Route path="/equipos-admin" exact element={<EquiposAdmin/>}/>
          <Route path="/equipos-crear" exact element={<EquiposCrear/>}/>
          <Route path="/equipos-editar/:identorno" exact element={<EquiposEditar/>}/>
          <Route path="/acerca" exact element={<Acerca/>}/>

        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
