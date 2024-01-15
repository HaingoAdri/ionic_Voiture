import React from 'react';
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css"; 
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import './bootstrap.bundle.min';
import "./Acceuil.css";
import image from "./img.png";
import Navigation from './Navigation';

class Compte extends React.Component{
    render(){
        return (
            <body>
                <p></p>
                <main className="container">
                    <div className="p-3 rounded mt-3 text">
                        <h1>Compte :</h1>
                    </div>
                    <div className="row scrollspy-example scrollable-container  mt-3 border-none" data-bs-offset="0">
                    <div className="card h-100">
                        <img src={image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Données :</h5>

                            <p className="card-text">Nom :</p>
                            <p className="card-text">Prenom :</p>
                            <p className="card-text">Contact :</p>
                            <p className="card-text">Email :</p>
                            <p className="card-text">Sexe :</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                    </div>
                </main>
                <Navigation />
            </body>
        );
    }
}
export default Compte;