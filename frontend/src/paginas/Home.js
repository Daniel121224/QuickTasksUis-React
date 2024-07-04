import React from 'react';
import Navbar from '../componentes/Navbar';
import SidebarContainer from '../componentes/SidebarContainer';

const Home = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
        </div>
    );
}

export default Home;