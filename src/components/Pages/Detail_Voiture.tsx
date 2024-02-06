import React, { useEffect, useState } from "react";
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css";
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import "./bootstrap.bundle.min";
import "./Acceuil.css";
import image from "./img.png";
import Navigation from "./Navigation";
import Annonce from "../../models/Annonce";
import get from "../../utils/Getter";
import { useParams } from "react-router";

function Detail_Voiture() {

  const { id } = useParams<{ id: string }>();  

  const [session, setSession] = useState(null);

  const [annonce, setAnnonce] = useState<Annonce>();

  useEffect(() => {
    const storedSessionString = localStorage.getItem("userSession");
    if (storedSessionString) {
      const sess = JSON.parse(storedSessionString);
      setSession(sess);
      get(`https://vente-occaz-production-de3d.up.railway.app/api/v1/annonces/${id}`, sess.donnee.token).then(reponse => {
        const a : Annonce = reponse.donnee;
        setAnnonce(a);
      });
    }
  }, []);

  return (
    <body>
      <p></p>
      {annonce && (
        <main className="container">
        <div className="p-2 rounded mt-3 text">
          <h1>Fiche</h1>
        </div>
        <div
          className="row scrollspy-example sc  mt-3 border-none p-3"
          data-bs-offset="0"
        >
          <div className="card h-100 mt-2">
            <div className="card-body mt-2">
              <p className="card-text fw-bold">Categories : {annonce.categorie.nomCategorie}</p>
              <p className="card-text fw-bold">Modele : {annonce.modele.nomModele}</p>
              <p className="card-text fw-bold">Marque : {annonce.marque.nomMarque}</p>
              <p className="card-text fw-bold">Type d'occasion : {annonce.typeOccasion.nomTypeOccasion}</p>
              <p className="card-text fw-bold">Couleur : {annonce.couleur.nomCouleur}</p>
              <p className="card-text fw-bold">Prix : {annonce.prix.toLocaleString('mg-MG', { style: 'currency', currency: 'MGA' })}</p>
              <p className="card-text fw-bold">Date et heure : {annonce.dateHeureCreation}</p>
            </div>
            {annonce.listePhotos.map((photo, index) => (
            <img
              key={index}
              src={photo.repertoire}
              className="card-img-top rounded float-start mt-2"
              alt="..."
            />
            ))}
          </div>
        </div>
      </main>
      )}
      <Navigation sessionProp={session} />
    </body>
  );
}
export default Detail_Voiture;
