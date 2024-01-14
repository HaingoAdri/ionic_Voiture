import React from 'react';
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css"; 
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import './bootstrap.bundle.min';
import "./Acceuil.css";
import image from "./img.png";
import Navigation from './Navigation';

class Notification extends React.Component{
    render(){
        return (
            <body>
                <p></p>
                <main className="container">
                    <div className="p-3 rounded mt-3 text">
                        <h1>Toutes les notifications :</h1>
                    </div>
                    <div className="row scrollspy-example scrollable-container  mt-3 border-none" data-bs-offset="0">
                        <ol className="list-group list-group-numbered justify-content-center ml-6 p-4">
                            <li className="list-group-item d-flex justify-content-center align-items-center">
                                <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Content for list item
                                </div>
                                <span className="badge bgg rounded-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-center align-items-center">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Content for list item
                                </div>
                                <span className="badge bgg rounded-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-center align-items-center">
                                <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Content for list item
                                </div>
                                <span className="badge bgg rounded-pill">14</span>
                            </li>
                        </ol>
                    </div>
                </main>
                <Navigation />
            </body>
        );
    }
}
export default Notification;