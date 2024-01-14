import React from "react";
import "../Body/bootstrap.rtl.min.css";
import "../Body/bootstrap.min.css";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";


class Login extends React.Component{

    render(){
        return(
           <body>
            <main>
                <div className="container py-5">
                    <div className="d-flex justify-content-center">
                        
                        <div className="card border shadow">
                            <div className="card-header bg-transparent">
                                <h3 className="text-center text">Login</h3>
                            </div>
                            <div className="card-body p-5">
                                <form > 
                                    <div className="p-4">
                                        <div className="text-dark  ">
                                            <input type="email" className="form-control border-0 border-bottom" id="address" placeholder="📧 Email" required/>
                                        </div>

                                        <p></p>
                                        <div className="text-dark">
                                            <input type="password" className="form-control border-0 border-bottom" id="address" placeholder="🔒 Password" required/>
                                        </div> 
                                        <p></p>

                                        <div className="text-dark">
                                            <a className="text-end text-muted text-decoration-none text">Mot de passe oublié ?</a>
                                        </div> 
                                        <p></p>
                                    </div>
                                </form>
                                <div className="p-3 ">
                                    <Link to="/Acceuil" className="btn btn-outline-danger bg-primary.bg-gradient w-100 text">Connexion</Link>
                                </div>
                                <div className="p-3 text-center">
                                    <h6>Aucun compte <i className="bi bi-arrow-right-square-fill"></i> <Link to="/Incription" className="text-decoration-none text">Inscrivez-vous!</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
           </body>
        );
    }
}
export default Login;