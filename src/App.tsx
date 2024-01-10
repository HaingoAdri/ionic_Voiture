import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import sytle from './App.css';
import Login from './components/Body/Login';
import Inscription from './components/Body/Inscription';
import Acceuil from './components/Pages/Section';
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
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
