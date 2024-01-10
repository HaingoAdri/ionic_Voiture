import React from 'react';
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css"; 
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import './bootstrap.bundle.min';
import "./Acceuil.css";
import { Link, withRouter } from "react-router-dom";

class Navigation extends React.Component{
    render(){
        return (
            <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bgg">
                <div className="container-fluid p-1">
                    <button className="btn btn-outline-white" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list text-white"></i>
                    </button>
                    <button type="button" className="btn btn-outline-white position-relative rounded-pill text-center ml-5 ">
                        <Link to="/Notification"><i className="bi bi-bell-fill text-white"></i></Link>
                        <span className="position-absolute top-0 w-100 start-100 translate-middle badge rounded-pill bg-white text">
                            99+
                        <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                    <button type="button" className="btn btn-outline-white position-relative text-center ml-5 border-none">
                        <i className="bi bi-person-circle text-white"></i>
                    </button>
                    <button type="button" className="btn btn-outline-white position-relative rounded-pill text-center ">
                        <i className="bi bi-box-arrow-right text-white"></i>
                    </button>
                    <div className="collapse navbar-collapse bw" id="navbarCollapse">
                        <ul className="navbar-nav fw-bolder">
                            <li className="nav-item">
                                <Link to="/Acceuil" className="nav-link text-dark" aria-current="page">Liste annonce</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Inserer_Annonce" className="nav-link text-dark">Ajouter annonce</Link>
                            </li>
                                                
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navigation;