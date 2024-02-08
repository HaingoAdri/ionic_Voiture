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
import { useHistory, useParams } from "react-router";
import send_formData_post from "../../utils/SenderFormDataPost";
import { useIonLoading } from "@ionic/react";

function Detail_Voiture() {
  const { id } = useParams<{ id: string }>();

  const [session, setSession] = useState({
    donnee: {
      token: "",
      utilisateur: {
        idUtilisateur: 0,
        email: "",
        motDePasse: "",
        isAdmin: 0,
      },
    },
  });

  const [annonce, setAnnonce] = useState<Annonce>();

  const [present, dismiss] = useIonLoading();

  const history = useHistory();

  useEffect(() => {
    const storedSessionString = localStorage.getItem("userSession");
    if (storedSessionString) {
      const sess = JSON.parse(storedSessionString);
      setSession(sess);
      get(
        `https://vente-occaz-production-de3d.up.railway.app/api/v1/annonces/${id}`,
        sess.donnee.token
      ).then((reponse) => {
        const a: Annonce = reponse.donnee;
        setAnnonce(a);
      });
    }
  }, []);

  const handleVenteClick = async (annonceId: number) => {
    console.log(`vente de l'annonce id ${annonceId}`);
    if (session) {
      const formData = new FormData();
      formData.append(
        "idUtilisateur",
        session.donnee.utilisateur.idUtilisateur.toString()
      );
      formData.append("idAnnonce", annonceId.toString());
      send_formData_post(
        `https://vente-occaz-production.up.railway.app/api/v1/annonces/setAnnonceVendue`,
        formData,
        session.donnee.token
      ).then((reponse) => {
        const a = reponse.donnee;
        console.log("vendue ! ", a);
      });
    }
    await present("vente en cours ...");
    setTimeout(async () => {
      dismiss();
      history.push(`/AllAnnonce`);
    }, 2000);
  };

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
              <button
                onClick={() => handleVenteClick(annonce.idAnnonce)}
                className="btn btn-outline-success"
              >
                MAJ etat en vendu
              </button>
              <div className="card-body mt-2">
                <p className="card-text fw-bold">
                  Categories : {annonce.categorie.nomCategorie}
                </p>
                <p className="card-text fw-bold">
                  Modele : {annonce.modele.nomModele}
                </p>
                <p className="card-text fw-bold">
                  Marque : {annonce.marque.nomMarque}
                </p>
                <p className="card-text fw-bold">
                  Type d'occasion : {annonce.typeOccasion.nomTypeOccasion}
                </p>
                <p className="card-text fw-bold">
                  Couleur : {annonce.couleur.nomCouleur}
                </p>
                <p className="card-text fw-bold">
                  Prix :{" "}
                  {annonce.prix.toLocaleString("mg-MG", {
                    style: "currency",
                    currency: "MGA",
                  })}
                </p>
                <p className="card-text fw-bold">
                  Date et heure : {annonce.dateHeureCreation}
                </p>
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
