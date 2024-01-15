import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css";
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import "./bootstrap.bundle.min";
import "./Acceuil.css";
import image from "./img.png";
import Navigation from './Navigation';
import Annonce from '../../models/Annonce';
import get from '../../utils/Getter';

function Section() {
    
  const [session, setSession] = useState(null);  
  const [listeAnnonce, setListeAnnonce] = useState<Annonce []>([]);

  useEffect(() => {
    const storedSessionString = localStorage.getItem("userSession");
    if (storedSessionString) {
      const sess = JSON.parse(storedSessionString);
      console.log("Accueil : Informations de session:", sess);
      alert(`code web : ${sess.donnee.code}`);
      setSession(sess);

      //liste des annonces
      get(`http://localhost:8080/api/v1/annonces/non-vendues-nofiltre/${sess.donnee.utilisateur.idUtilisateur}`, sess.donnee.token).then(reponse => {
        const listeAnnonceValideNonVendue : Annonce [] = reponse.donnee;
        setListeAnnonce(listeAnnonceValideNonVendue);
      });
    }
  }, []);

  console.log(listeAnnonce);

  return (
    <body>
      <p></p>
      <main className="container">
        <div className="back p-5 rounded mt-3 text-white">
          <h1>Liste annonce</h1>
          <p className="lead">Vente de voiture occasion.</p>
          {/* <a
            className="btn btn-light text-danger"
            href="../../components/navbar/index.html"
            role="button"
          >
            Voir details &raquo;
          </a> */}
        </div>
        <div
          className="row scrollspy-example scrollable-container  mt-3"
          data-bs-offset="0"
        >
          {listeAnnonce.map((annonce, index) => (
          <div className="col-sm-6" id="ss" key={index}>
            <div className="card">
              <img src={annonce.listePhotos[0].repertoire} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{annonce.marque.nomMarque} {annonce.modele.nomModele} </h5>
                <p className="card-text">
                  {annonce.description}
                </p>
                <h6 className="card-title">Prix : {annonce.prix.toLocaleString('mg-MG', { style: 'currency', currency: 'MGA' })}</h6>
                <a href="#" className="btn btn-outline-danger">
                  Detail
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </main>
      <Navigation sessionProp = {session} />
    </body>
  );
}
export default Section;
