import React, { useState, useEffect } from 'react';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import Footer from '../../componentes/Footer';
import ContentHeader from '../../componentes/ContentHeader';
import { Link } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';

const EntornosAdmin = () => {

    const [entornos, setEntornos] = useState([]);

    const cargarEntornos = async () => {
        const response = await APIInvoke.invokeGET('/listarAllEntorno');
        //console.log(response.result);
        setEntornos(response.result);
    }

    useEffect(() => {
        cargarEntornos();
    }, []);

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Lista de Entornos o Asignaturas"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Entornos"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Title</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }}>Id</th>
                                        <th style={{ width: '60%' }}>Nombre</th>
                                        <th style={{ width: '15%' }}>No. miembros</th>
                                        <th style={{ width: '15%' }}>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        entornos.map(
                                            item => 
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.nombre_entorno}</td>
                                                    <td>{item.cantidad_participantes}</td>
                                                    <td>
                                                        <button className="btn btn-primary btn-primary">Editar</button>&nbsp; &nbsp;
                                                        <button className="btn btn-primary btn-danger">Borrar</button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                    
                                </tbody>
                            </table>

                        </div>
                    </div>

                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default EntornosAdmin;