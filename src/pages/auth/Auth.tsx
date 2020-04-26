import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonRouterOutlet,
  IonToolbar,
  IonImg,
  IonGrid,
  IonText,
  IonButton,
} from "@ionic/react";
import "./Auth.css";
import Logo from "../../assets/icons/logo.svg";
import Shape1 from "../../assets/shapes/auth_shape_1.svg";
import Shape2 from "../../assets/shapes/login_shape_2.svg";
import Shape3 from "../../assets/shapes/login_shape_3.svg";
import Login from "./Login";
import Register from "./Register";

const Auth: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    console.log(username, password);
  }

  return (
    <IonPage>
        <IonContent>
          <img className="shape-one" width={128} src={Shape1} />
          <img className="shape-two" height={200} src={Shape2} />
          <img className="shape-three" height={48} src={Shape3} />

          <div className="main-container">
            <div className="logo-box">
              <img className="ion-margin logo" src={Logo} height={90} />
              <IonText className="title-text">Fooganic</IonText>
            </div>
            <div className="login-box ion-margin-top">
              <IonButton
                className="btn"
                color="secondary"
                size="small"
                shape="round"
                expand="block"
                fill="outline"
                routerLink="/login"
              >
                sign in
              </IonButton>
              <IonButton
                className="btn"
                color="secondary"
                size="small"
                shape="round"
                expand="block"
                fill="outline"
                routerLink="/register"
              >
                create a new account
              </IonButton>
            </div>
          </div>
        </IonContent>
    </IonPage>
  );
};

export default Auth;
