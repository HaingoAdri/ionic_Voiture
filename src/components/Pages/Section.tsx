import React from 'react';
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css"; 
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import './bootstrap.bundle.min';
import "./Acceuil.css";
import image from "./img.png";
import Navigation from './Navigation';

class Section extends React.Component{
    render(){
        return (
            <body>
                <p></p>
                <main className="container">
                    <div className="back p-5 rounded mt-3 text-white">
                        <h1>Liste annonce</h1>
                        <p className="lead">Vente de voitue occasion.</p>
                        <a className="btn btn-light text-danger" href="../../components/navbar/index.html" role="button">Voir details &raquo;</a>
                    </div>
                    <div className="row scrollspy-example scrollable-container  mt-3" data-bs-offset="0">
                        <div className="col-sm-6" id="ss">
                            <div className="card">
                                <img src={image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-outline-danger">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-3" id="ss">
                            <div className="card">
                                <img src={image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-outline-danger">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-3" id="ss">
                            <div className="card">
                                <img src={image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-outline-danger">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-3" id="ss">
                            <div className="card">
                                <img src={image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-outline-danger">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-3" id="ss">
                            <div className="card">
                                <img src={image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-outline-danger">Go somewhere</a>
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