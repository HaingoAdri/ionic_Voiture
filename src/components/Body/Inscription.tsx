import React from "react";
import "../Body/Login.css";
import "../Body/bootstrap.rtl.min.css";
import "../Body/bootstrap.min.css";
import { Link, withRouter } from "react-router-dom";
 
class Inscription extends React.Component{
    render(){
        return(
           <body>
            <main >
                <div className="container py-5">
                    <div className="d-flex justify-content-center">
                        <div className="card border">
                            <div className="card-header bg-transparent">
                                <div className="container-fluid text-center">
                                    <h3 className=" fw-bolder text">Inscription</h3>
                                </div>
                            </div>
                            <div className="card-body p-5">
                                <form action="" method="post"> 
                                    <div className="">
                                        <div className="p-1">
                                            <div className="text-dark">
                                                <input type="text" className="form-control form-control border-0 border-bottom" id="address" placeholder="👉 Nom" required/>
                                            </div>

                                            <p></p>

                                            <div className="text-dark">
                                                <input type="text" className="form-control form-control border-0 border-bottom" id="address" placeholder="👉 Premon" required/>
                                            </div>

                                            <p></p>

                                            <div className="text-dark">
                                                <input type="email" className="form-control form-control border-0 border-bottom" id="address" placeholder="📧 Email" required/>
                                            </div>

                                            <p></p>

                                            <div className="text-dark">
                                                <input type="text" className="form-control form-control border-0 border-bottom" id="address" placeholder="🖊️Contact" required/>
                                            </div>

                                            <p></p>
                                            
                                            <div className="text-dark">
                                                <input type="password" className="form-control form-control border-0 border-bottom" id="address" placeholder="🔒 Password" required/>
                                            </div> 
                                        </div>
                                    </div>
                                </form>
                                <div className="p-3 ">
                                    <Link to="/Acceuil" className="btn btn-outline-danger bg-primary.bg-gradient w-100">Connexion</Link>
                                </div>
                                <div className="p-3 text-center">
                                    <h6>Possède compte <i className="bi bi-arrow-right-square-fill text-dark"></i> <Link to="/*" className="text-decoration-none text">Connectez-vous!</Link></h6>
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
export default Inscription