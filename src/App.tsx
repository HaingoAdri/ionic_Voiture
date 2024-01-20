import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import sytle from './App.css';
import Login from './components/Body/Login';
import Inscription from './components/Body/Inscription';
import Acceuil from './components/Pages/Section';
import AllAnnonce from './components/Pages/AllAnnonce';
import Inserer_Annonce from './components/Pages/Inserer_Annonce';
import Notification from './components/Pages/Notification';
import Compte from './components/Pages/Compte';
import Detail_Voiture from './components/Pages/Detail_Voiture';
import Detail_Voiture_Valide from './components/Pages/Detail_Voiture_Valide';
const App: React.FC = () => (
  <IonApp className='body'>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Login />
        </Route>
        <Route path="/Inscription" exact={true} >
          <Inscription />
        </Route>
        <Route path="/Acceuil" exact={true} >
          <Acceuil />
        </Route>
        <Route path="/AllAnnonce" exact={true} >
          <AllAnnonce />
        </Route>
        <Route path="/Inserer_Annonce" exact={true} >
          <Inserer_Annonce />
        </Route>
        <Route path="/Notification" exact={true} >
          <Notification />
        </Route>
        <Route path="/Compte" exact={true} >
          <Compte />
        </Route>
        <Route path="/Detail_Voiture/:id" exact={true} >
          <Detail_Voiture />
        </Route>
        <Route path="/Detail_Voiture_Valide/:id" exact={true} >
          <Detail_Voiture_Valide />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
