import React from 'react';
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css"; 
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import './bootstrap.bundle.min';
import "./Acceuil.css";
import image from "./img.png";
import Navigation from './Navigation';

class Detail_Voiture extends React.Component{
    render(){
        return (
            <body>
                <p></p>
                <main className="container">
                    <div className="p-3 rounded mt-3 text">
                        <h1>Voiture :</h1>
                    </div>
                    <div className="row scrollspy-example sc  mt-3 border-none p-3" data-bs-offset="0">
                        <div className="card h-100 mt-2">
                            <img src={image} className="card-img-top rounded float-start mt-2" alt="..."/>
                            <img src={image} className="card-img-top rounded float-center" alt="..."/>
                            <img src={image} className="card-img-top rounded float-end" alt="..."/>
                            <div className="card-body mt-2">
                                
                                <p className="card-text fw-bold">Categories :</p>
                                <p className="card-text fw-bold">Modele :</p>
                                <p className="card-text fw-bold">Marque :</p>
                                <p className="card-text fw-bold">Type d'occasion :</p>
                                <p className="card-text fw-bold">Couleur :</p>
                                <p className="card-text fw-bold">Prix :</p>
                                <p className="card-text fw-bold">Date et heure :</p>
                            </div>
                            <div className="card-header text-end text bg-transparent">
                                <i className="bi bi-speedometer2  btn btn-outline-danger"></i>
                            </div>
                            
                        </div>
                    </div>
                </main>
                <Navigation />
            </body>
        );
    }
}
export default Detail_Voiture;