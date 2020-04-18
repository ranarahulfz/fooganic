import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import User from "./User";
import Products from "./Products";
import Cart from "./Cart";

/* Theme variables */
import './Home.css';

const Home: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/user" component={User} exact={true} />
          <Route path="/products" component={Products} exact={true} />
          <Route path="/cart" component={Cart} />
          <Route path="/" render={() => <Redirect to="/products" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="products" href="/products">
            <IonIcon icon={triangle} />
            <IonLabel>Products</IonLabel>
          </IonTabButton>
          <IonTabButton tab="user" href="/User">
            <IonIcon icon={ellipse} />
            <IonLabel>User</IonLabel>
          </IonTabButton>
          <IonTabButton tab="cart" href="/cart">
            <IonIcon icon={square} />
            <IonLabel>Cart</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default Home;