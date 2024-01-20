import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
import getEtatAnnonce from "../../utils/EtatAnnonce";

function Section() {

  const history = useHistory();
  const [session, setSession] = useState(null);  
  const [listeAnnonce, setListeAnnonce] = useState<Annonce []>([]);

  useEffect(() => {
    const storedSessionString = localStorage.getItem("userSession");
    if (storedSessionString) {
      const sess = JSON.parse(storedSessionString);
      console.log("Accueil : Informations de session:", sess);
      setSession(sess);

      //liste des annonces
      get(`https://vente-occaz-production.up.railway.app/api/v1/annonces/non-vendues-nofiltre/${sess.donnee.utilisateur.idUtilisateur}`, sess.donnee.token).then(reponse => {
        const listeAnnonceValideNonVendue : Annonce [] = reponse.donnee;
        setListeAnnonce(listeAnnonceValideNonVendue);
      });
    }
  }, []);

  const handleDetailClick = (annonceId: number) => {
    console.log(`detail pour annonce id ${annonceId}`)
    history.push(`/Detail_Voiture_Valide/${annonceId}`);
  };

  return (
    <body className="h-100">
      <p></p>
      <main className="container h-100">
      <div className="back p-2 rounded mt-3 text-white text-center">
          <p className="lead">Annonces vlides pas encore vendues ( {listeAnnonce.length} annonces )</p>
        </div>
        <div
          className="row overflow-auto  mt-3 h-100"
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
                <br />
                <div>
                  {getEtatAnnonce(annonce) === 1 && (
                    <button className="btn btn-warning">Pas encore valide</button>
                  )}
                  {getEtatAnnonce(annonce) === 10 && (
                    <button className="btn btn-info">valide non vendue</button>
                  )}
                  {getEtatAnnonce(annonce) === 100 && (
                    <button className="btn btn-success">vendue</button>
                  )}
                </div>
                <br />
                <button onClick={() => handleDetailClick(annonce.idAnnonce)} className="btn btn-outline-danger">
                  Detail
                </button>
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
