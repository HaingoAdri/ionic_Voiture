import React, { useEffect, useState } from "react";
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css";
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import "./bootstrap.bundle.min";
import "./Acceuil.css";
import image from "./img.png";
import Navigation from "./Navigation";
import { Link, useHistory, withRouter } from "react-router-dom";
import AllCriteres from "../../models/AllCriteres";
import PreAnnonce from "../../models/PreAnnonce";
import getAllCriteres from "../../utils/AllCriteresGetter";
import uploadImagesToServer from "../../utils/Upload";
import CreateAnnonce from "../../models/CreateAnnonce";
import send_formData_post from "../../utils/SenderFormDataPost";

function Inserer_Annonce() {
  const history = useHistory();
  const [session, setSession] = useState();
  const [token, setToken] = useState('');
  const [idUser, setIdUser] = useState('1');
  const [allCriteres, setAllCriteres] = useState<AllCriteres>();

  useEffect(() => {
    const storedSessionString = localStorage.getItem("userSession");
    if (storedSessionString) {
      const sess = JSON.parse(storedSessionString);
      console.log("Accueil : Informations de session:", sess);
      setSession(sess);
      setToken(sess.donnee.token);
      setIdUser(sess.donnee.utilisateur.idUtilisateur);

      //liste des annonces
      getAllCriteres("https://vente-occaz-production-de3d.up.railway.app/api/v1", sess.donnee.token).then(
        (reponse) => {
          const allCriteres: AllCriteres = reponse;
          setAllCriteres(allCriteres);
          console.log(allCriteres);
        }
      );
    }
  }, []);

  const [preAnnonce, setPreAnnonce] = useState<PreAnnonce>({
    idUtilisateur: idUser.toString(),
    idMarque: "",
    idModele: "",
    idCategorie: "",
    idTypeOccasion: "",
    idCouleur: "",
    prix: 0,
    photo1: null,
    photo2: null,
    photo3: null,
    photo4: null,
    description: "",
  });

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    photoIndex: number
  ) => {
    const file = event.target.files?.[0] as File;
    switch (photoIndex) {
      case 0:
        preAnnonce.photo1 = file;
        setPreAnnonce(preAnnonce);
        break;
      case 1:
        preAnnonce.photo2 = file;
        setPreAnnonce(preAnnonce);
        break;
      case 2:
        preAnnonce.photo3 = file;
        setPreAnnonce(preAnnonce);
        break;
      case 3:
        preAnnonce.photo4 = file;
        setPreAnnonce(preAnnonce);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(preAnnonce);
    const apiKey = "539a6413d94366bb9733e72e7a9dd1f1";
    const urlUpload = "https://api.imgbb.com/1/upload";
    const urlPhotos = await uploadImagesToServer(preAnnonce, apiKey, urlUpload);
    const annonce: CreateAnnonce = {
      idUtilisateur: idUser.toString(),
      idMarque: preAnnonce.idMarque,
      idModele: preAnnonce.idModele,
      idCategorie: preAnnonce.idCategorie,
      idTypeOccasion: preAnnonce.idTypeOccasion,
      idCouleur: preAnnonce.idCouleur,
      prix: preAnnonce.prix,
      photo1: urlPhotos.urlPhoto1,
      photo2: urlPhotos.urlPhoto2,
      photo3: urlPhotos.urlPhoto3,
      photo4: urlPhotos.urlPhoto4,
      description: preAnnonce.description,
    };
    console.log(annonce);
    const form = new FormData();
    form.append("idUtilisateur", annonce.idUtilisateur);
    form.append("idMarque", annonce.idMarque);
    form.append("idModele", annonce.idModele);
    form.append("idCategorie", annonce.idCategorie);
    form.append("idTypeOccasion", annonce.idTypeOccasion);
    form.append("idCouleur", annonce.idCouleur);
    form.append("prix", annonce.prix.toString());
    form.append("photo1", annonce.photo1);
    form.append("photo2", annonce.photo2);
    form.append("photo3", annonce.photo3);
    form.append("photo4", annonce.photo4);
    form.append("description", annonce.description);

    const urlCreate =
      "https://vente-occaz-production-de3d.up.railway.app/api/v1/annonces/creerAnnonce";
    const response = await send_formData_post(urlCreate, form, token);
    console.log(response);
    history.push(`/AllAnnonce`);
  };

  return (
    <body>
      <p></p>
      <main className="container">
        <div className=" rounded text-white">
          <h1 className="text">Inserer annonce</h1>
        </div>
        {allCriteres && (
          <div
            className="row scrollspy-example scroller"
            data-bs-offset="0"
            style={{ maxHeight : "600px" }}
          >
            <div className="col-sm-6" id="ss">
              <div className="card">
                <div className="card-body">
                  <form 
                  onSubmit={handleFormSubmit}
                  encType="multipart/form-data">
                    <div className="p-1">
                      <div className="text-dark w-100  ">
                        <label className="fw-bold">Marque:</label>
                        <select
                          name=""
                          className="form-control border-0 border-bottom"
                          id=""
                          onChange={(e) => {
                            preAnnonce.idMarque = e.target.value;
                            console.log('marque ',preAnnonce.idMarque);
                            setPreAnnonce(preAnnonce);
                          }}
                        >
                            <option value={1}>
                                Veuillez selectionner
                              </option>
                          {allCriteres.marques.map(
                            (marque: any, index: any) => (
                              <option value={marque.idMarque}>
                                {marque.nomMarque}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      <p></p>
                      <div className="text-dark w-100  ">
                        <label className="fw-bold">Categorie:</label>
                        <select
                          name=""
                          className="form-control border-0 border-bottom"
                          id=""
                          onChange={(e) => {
                            preAnnonce.idCategorie = e.target.value;
                            console.log('Categorie ',preAnnonce.idCategorie);
                            setPreAnnonce(preAnnonce);
                          }}
                        >
                            <option value={1}>
                                Veuillez selectionner
                              </option>
                          {allCriteres.categories.map(
                            (categorie: any, index: any) => (
                              <option value={categorie.idCategorie}>
                                {categorie.nomCategorie}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      <p></p>
                      <div className="text-dark w-100  ">
                        <label className="fw-bold">Modele:</label>
                        <select
                          name=""
                          className="form-control border-0 border-bottom"
                          id=""
                          onChange={(e) => {
                            preAnnonce.idModele = e.target.value;
                            console.log('Modele ',preAnnonce.idModele);
                            setPreAnnonce(preAnnonce);
                          }}
                        >
                            <option value={1}>
                                Veuillez selectionner
                              </option>
                          {allCriteres.modeles.map(
                            (modele: any, index: any) => (
                              <option value={modele.idModele}>
                                {modele.nomModele}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      <p></p>
                      <div className="text-dark w-100  ">
                        <label className="fw-bold">Type d'occasion:</label>
                        <select
                          name=""
                          className="form-control border-0 border-bottom"
                          id=""
                          onChange={(e) => {
                            preAnnonce.idTypeOccasion = e.target.value;
                            console.log('idTypeOccasion ',preAnnonce.idTypeOccasion);
                            setPreAnnonce(preAnnonce);
                          }}
                        >
                            <option value={1}>
                                Veuillez selectionner
                              </option>
                          {allCriteres.typeOccasions.map(
                            (typeOccasion: any, index: any) => (
                              <option value={typeOccasion.idTypeOccasion}>
                                {typeOccasion.nomTypeOccasion}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      <p></p>
                      <div className="text-dark w-100  ">
                        <label className="fw-bold">Couleur:</label>
                        <select
                          name=""
                          className="form-control border-0 border-bottom"
                          id=""
                          onChange={(e) => {
                            preAnnonce.idCouleur = e.target.value;
                            console.log('Couleur ',preAnnonce.idCouleur);
                            setPreAnnonce(preAnnonce);
                          }}
                        >
                            <option value={1}>
                                Veuillez selectionner
                              </option>
                          {allCriteres.couleurs.map(
                            (couleur: any, index: any) => (
                              <option value={couleur.idCouleur}>
                                {couleur.nomCouleur}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      <p></p>
                      <div className="text-dark w-100">
                        <label className="fw-bold">Prix:</label>
                        <input
                          type="number"
                          className="form-control border-0 border-bottom"
                          id="address"
                          placeholder="Price"
                          min={0}
                          onChange={(e: any) => {
                            preAnnonce.prix = e.target.value;
                            setPreAnnonce(preAnnonce);
                          }}
                          required
                        />
                      </div>
                      <p></p>

                      <div className="text-dark">
                        <label className="fw-bold">Description:</label>
                        <textarea
                          name=""
                          id=""
                          className="form-control"
                          onChange={(ev: any) => {
                            preAnnonce.description = ev.target.value;
                            setPreAnnonce(preAnnonce);
                          }}
                        ></textarea>
                      </div>
                      <p></p>

                        <div className="text-dark">
                          <label className="fw-bold">Inserer image 1</label>
                          <input
                            type="file"
                            className="btn btn-danger w-100"
                            id="address"
                            placeholder="Image"
                            onChange={(ev) => handleFileChange(ev, 0)}
                            required
                          />
                        </div>
                        <div className="text-dark">
                          <label className="fw-bold">Inserer image 2</label>
                          <input
                            type="file"
                            className="btn btn-danger w-100"
                            id="address"
                            placeholder="Image"
                            onChange={(ev) => handleFileChange(ev, 1)}
                            required
                          />
                        </div>
                      <p></p>
                        <div className="text-dark">
                          <label className="fw-bold">Inserer image 3</label>
                          <input
                            type="file"
                            className="btn btn-danger w-100"
                            id="address"
                            placeholder="Image"
                            onChange={(ev) => handleFileChange(ev, 2)}
                            required
                          />
                        </div>
                        <div className="text-dark">
                          <label className="fw-bold">Inserer image 4</label>
                          <input
                            type="file"
                            className="btn btn-danger w-100"
                            id="address"
                            placeholder="Image"
                            onChange={(ev) => handleFileChange(ev, 3)}
                            required
                          />
                        </div>
                      <p></p>
                    </div>

                    <div className=" ">
                      <button className="btn btn-outline-danger bg-primary.bg-gradient w-100 text">
                        Créer l'annonce
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Navigation sessionProp={session} />
    </body>
  );
}
export default Inserer_Annonce;
function present(arg0: string) {
    throw new Error("Function not implemented.");
}

function dismiss() {
    throw new Error("Function not implemented.");
}

