import React, { useState } from "react";
import "../Body/Login.css";
import "../Body/bootstrap.rtl.min.css";
import "../Body/bootstrap.min.css";
import { Link, useHistory, withRouter } from "react-router-dom";
import { useIonLoading } from "@ionic/react";
import send_raw from '../../utils/Sender';

function Inscription() {
  const [mail, setEmail] = useState<string>("u1@gmail.com");
  const [pwd, setMotDePasse] = useState<string>("1234");

  const [present, dismiss] = useIonLoading();
  const history = useHistory();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const raw = {
        idUtilisateur : -1,
        email : mail,
        motDePasse : pwd,
        isAdmin : 0 
    };

    console.log(raw);
    try {
        const session = await send_raw("https://vente-occaz-production-nomena.up.railway.app/api/v2/inscription", raw, null);

        console.log(session);
        const sessionString = JSON.stringify(session);
        localStorage.setItem('userSession', sessionString);
        await present('Logging in...');
        setTimeout(async () => {
            alert(`code web : ${session.donnee.code}`);
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
            <div className="card border">
              <div className="card-header bg-transparent">
                <div className="container-fluid text-center">
                  <h3 className=" fw-bolder text">Inscription</h3>
                </div>
              </div>
              <div className="card-body p-5">
                <form onSubmit={handleFormSubmit} >
                  <div className="">
                    <div className="p-1">
                      <div className="text-dark">
                        <input
                          type="email"
                          className="form-control form-control border-0 border-bottom"
                          id="email"
                          placeholder="📧 Email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <p></p>

                      <div className="text-dark">
                        <input
                          type="password"
                          className="form-control form-control border-0 border-bottom"
                          id="pwd"
                          placeholder="🔒 Password"
                          onChange={(e) => setMotDePasse(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 ">
                  <button
                    type="submit"
                    className="btn btn-outline-danger bg-primary.bg-gradient w-100"
                  >
                    Inscription
                  </button>
                </div>
                </form>
                <div className="p-3 text-center">
                  <h6>
                    Possède compte{" "}
                    <i className="bi bi-arrow-right-square-fill text-dark"></i>{" "}
                    <Link to="/" className="text-decoration-none text">
                      Connectez-vous!
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
export default Inscription;
