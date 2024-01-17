import React, { useEffect, useState } from "react";
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css";
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import "./bootstrap.bundle.min";
import "./Acceuil.css";
import image from "./user.avif";
import Navigation from "./Navigation";
import { useHistory } from "react-router";
import Session from "../../models/Session";

function Compte() {
  const history = useHistory();
  const [session, setSession] = useState<Session>();
  useEffect(() => {
    const storedSessionString = localStorage.getItem("userSession");
    if (storedSessionString) {
      const sess: Session = JSON.parse(storedSessionString).donnee;
      console.log("Accueil : Informations de session:", sess);
      setSession(sess);
    }
  }, []);
  return (
    <body>
      <p></p>
      <main className="container">
        <div className="p-3 rounded mt-3 text">
          <h1>Compte</h1>
        </div>
        <div
          className="row scrollspy-example scrollable-container  mt-3 border-none"
          data-bs-offset="0"
        >
          <div className="card h-100">
            <img src={image} className="card-img-top" alt="..." height={"20%"} />
            <div className="card-body">
              {session && (
                <>
                <p className="card-text">Code connexion web : <strong>{session.code}</strong></p>
                <p className="card-text">Email : <strong>{session.utilisateur.email}</strong></p>
                </>
              )}
              
            </div>
          </div>
        </div>
      </main>
      <Navigation sessionProp={session} />
    </body>
  );
}
export default Compte;
