import React, { useState } from "react";
import { useIonLoading, useIonRouter } from '@ionic/react';
import "../Body/bootstrap.rtl.min.css";
import "../Body/bootstrap.min.css";
import { Link, useHistory, withRouter } from "react-router-dom";
import "./Login.css";
import send_raw from '../../utils/Sender';

function Login() {
  const [mail, setEmail] = useState<string>("");
  const [pwd, setMotDePasse] = useState<string>("");
  const [present, dismiss] = useIonLoading();
  const history = useHistory();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const raw = {
        email : mail,
        motDePasse : pwd
    };
    console.log(raw);
    try {
        // const session = await send_raw("https://backend-web-service-voiture-occaz.onrender.com/api/v1/login", raw, null);
        const session = await send_raw("http://localhost:8080/api/v1/login", raw, null);
        console.log(session);
        const sessionString = JSON.stringify(session);
        localStorage.setItem('userSession', sessionString);
        await present('Logging in...');
        setTimeout(async () => {
            dismiss();
            history.push(`/Acceuil`);
        }, 2000);
    } catch (e) {history.push(`/`);}
  };

  return (
    <body>
      <main>
        <div className="container py-5">
          <div className="d-flex justify-content-center">
            <div className="card border shadow">
              <div className="card-header bg-transparent">
                <h3 className="text-center text">Login</h3>
              </div>
              <div className="card-body p-5">
                <form onSubmit={handleFormSubmit}>
                  <div className="p-4">
                    <div className="text-dark  ">
                      <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control border-0 border-bottom"
                        id="address"
                        placeholder="📧 Email"
                        required
                      />
                    </div>

                    <p></p>
                    <div className="text-dark">
                      <input
                        type="password"
                        onChange={(e) => setMotDePasse(e.target.value)}
                        className="form-control border-0 border-bottom"
                        id="motdepasse"
                        placeholder="🔒 Password"
                        required
                      />
                    </div>
                    <p></p>

                    <div className="text-dark">
                      <a className="text-end text-muted text-decoration-none text">
                        Mot de passe oublié ?
                      </a>
                    </div>
                    <p></p>
                  </div>
                  <button type="submit" className="btn btn-outline-danger bg-primary.bg-gradient w-100 text">
                    Connexion
                    </button>
                </form>
                <div className="p-3 ">
                  {/* <Link
                    to="/Acceuil"
                    className="btn btn-outline-danger bg-primary.bg-gradient w-100 text"
                  >
                    Connexion
                  </Link> */}
                </div>
                <div className="p-3 text-center">
                  <h6>
                    Aucun compte{" "}
                    <i className="bi bi-arrow-right-square-fill"></i>{" "}
                    <Link
                      to="/Incription"
                      className="text-decoration-none text"
                    >
                      Inscrivez-vous!
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
export default Login;

