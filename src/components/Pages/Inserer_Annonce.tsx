import React from 'react';
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css"; 
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import './bootstrap.bundle.min';
import "./Acceuil.css";
import image from "./img.png";
import Navigation from "./Navigation";
import { Link, withRouter } from "react-router-dom";

class Inserer_Annonce extends React.Component{
    render(){
        return (
            <body>
                <p></p>
                <main className="container">
                    <div className=" p-2 rounded mt-3 text-white">
                        <h1 className='text'>Inserer annonce</h1>
                    </div>
                    <div className="row sc mt-3 scroll" data-bs-offset="0">
                        <div className="col-sm-6 " id="ss">
                            <div className="card">
                                <div className="card-body">
                                    <form > 
                                    <div className="p-4">
                                        
                                        <div className="text-dark  ">
                                            <label className="fw-bold">Marque:</label>
                                            <select name="" className="form-control border-0 border-bottom" id="">
                                                <option value="">Berline</option>
                                                <option value="">Berline</option>
                                            </select>
                                        </div>

                                        <p></p>
                                        <div className="text-dark  ">
                                            <label className="fw-bold">Categorie:</label>
                                            <select name="" className="form-control border-0 border-bottom" id="">
                                                <option value="">Berline</option>
                                                <option value="">Berline</option>
                                            </select>
                                        </div>

                                        <p></p>
                                        <div className="text-dark  ">
                                            <label className="fw-bold">Modele:</label>
                                            <select name="" className="form-control border-0 border-bottom" id="">
                                                <option value="">Berline</option>
                                                <option value="">Berline</option>
                                            </select>
                                        </div>

                                        <p></p>
                                        <div className="text-dark  ">
                                            <label className="fw-bold">Type d'occasion:</label>
                                            <select name="" className="form-control border-0 border-bottom" id="">
                                                <option value="">Berline</option>
                                                <option value="">Berline</option>
                                            </select>
                                        </div>

                                        <p></p>
                                        <div className="text-dark  ">
                                            <label className="fw-bold">Couleur:</label>
                                            <select name="" className="form-control border-0 border-bottom" id="">
                                                <option value="">Berline</option>
                                                <option value="">Berline</option>
                                            </select>
                                        </div>

                                        <p></p>
                                        <div className="text-dark">
                                            <label className="fw-bold">Prix:</label>
                                            <input type="number" className="form-control border-0 border-bottom" id="address" placeholder="Montant de la voiture" required/>
                                        </div> 
                                        <p></p>
                                        
                                        <div className="text-dark">
                                            <label className="fw-bold">Date et heure:</label>
                                            <input type="date" className="form-control border-0 border-bottom" id="address" placeholder="Date" required/>
                                        </div> 
                                        <p></p>

                                        <div className="text-dark">
                                            <label className="fw-bold">Description:</label>
                                            <textarea name="" id="" className="form-control"></textarea>
                                        </div> 
                                        <p></p>
                                        
                                        <div className="text-dark">
                                            <label className="fw-bold">Inserer image:</label>
                                            <input type="file" className="btn btn-danger" required/>
                                            <p></p>

                                            <input type="file" className="btn btn-danger" required/>
                                            <p></p>

                                            <input type="file" className="btn btn-danger" required/>
                                            <p></p>

                                            <input type="file" className="btn btn-danger" required/>
                                            <p></p>
                                        </div> 
                                        <p></p>
                                        
                                    </div>
                                </form>
                                <div className="p-3 ">
                                    <Link to="/Acceuil" className="btn btn-outline-danger bg-primary.bg-gradient w-100 text">Connexion</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Navigation />
            </body>
        );
    }
}
export default Inserer_Annonce;