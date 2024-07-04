import React from 'react';
import Navbar from '../componentes/Navbar';
import SidebarContainer from '../componentes/SidebarContainer';
import ContentHeader from '../componentes/ContentHeader';
import Footer from '../componentes/Footer';
import { Link } from 'react-router-dom';   

const Home = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Acceso rápido"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

                            <div class="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Entornos</h3>
                                        <p>Asignaturas o Proyectos</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-edit" />
                                    </div>
                                    <Link to={"/entornos-admin"} className="small-box-footer">Ver Entornos <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;