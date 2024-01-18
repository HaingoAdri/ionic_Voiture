import React from 'react';
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css"; 
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import './bootstrap.bundle.min';
import "./Acceuil.css";
import { Link, withRouter } from "react-router-dom";

class Naviagation_Header extends React.Component{
    render(){
        return (
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-transparent">
                <div className="container-fluid p-1 text-end">
                    
                    <button type="button" className="btn btn-outline-danger ">
                        <Link to="/*"><i className="bi bi-box-arrow-right text-danger"></i></Link>
                    </button>
                </div>
            </nav>
        );
    }
}
export default Naviagation_Header;