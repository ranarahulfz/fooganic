import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import splashscreen from './pages/splashscreen/SplashScreen';
import initialscreen from './pages/initialscreen/InitialScreen';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { construct } from 'ionicons/icons';

// constructor(private splashScreen: SplashScreen){}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={initialscreen} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
