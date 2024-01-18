import React from 'react';
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css"; 
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import './bootstrap.bundle.min';
import "./Acceuil.css";
import image from "./img.png";
import Navigation from './Navigation';
import { Link, withRouter } from "react-router-dom";

class Section extends React.Component{
    render(){
        return (
            <body>
                <p></p>
                <main className="container">
                    <div className=" p-2 rounded mt-3 text-white">
                        <h1 className='text'>Liste annonce</h1>
                    </div>
                    <div className="scroller mb-12">
                        <div className="row mt-3  h-100">
                            
                            <div className="col-sm-6 mt-3" id="ss">
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/Detail_Voiture" className="btn btn-outline-danger">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3" id="ss">
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/Detail_Voiture" className="btn btn-outline-danger">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3" id="ss">
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/Detail_Voiture" className="btn btn-outline-danger">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3" id="ss">
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/Detail_Voiture" className="btn btn-outline-danger">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3" id="ss">
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/Detail_Voiture" className="btn btn-outline-danger">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3" id="ss">
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/Detail_Voiture" className="btn btn-outline-danger">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3" id="ss">
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/Detail_Voiture" className="btn btn-outline-danger">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3" id="ss">
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/Detail_Voiture" className="btn btn-outline-danger">Go somewhere</Link>
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
export default Section;