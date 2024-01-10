import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import sytle from './App.css';
import Login from './components/Body/Login';
import Inscription from './components/Body/Inscription';
import Acceuil from './components/Pages/Section';
import Inserer_Annonce from './components/Pages/Inserer_Annonce';
import Notification from './components/Pages/Notification';
const App: React.FC = () => (
  <IonApp className='body'>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/*" exact={true}>
          <Login />
        </Route>
        <Route path="/Incription" exact={true} >
          <Inscription />
        </Route>
        <Route path="/Acceuil" exact={true} >
          <Acceuil />
        </Route>
        <Route path="/Inserer_Annonce" exact={true} >
          <Inserer_Annonce />
        </Route>
        <Route path="/Notification" exact={true} >
          <Notification />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
