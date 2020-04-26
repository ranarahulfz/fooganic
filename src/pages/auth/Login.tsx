import React, { useState, useEffect }  from 'react';
import { returnUpBackOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonGrid, IonText, IonButton, IonInput, IonLoading, IonIcon } from '@ionic/react';
import './Login.css';
import Logo from '../../assets/icons/logo.svg';
import Shape1 from '../../assets/shapes/login_shape_1.svg';
import Shape2 from '../../assets/shapes/login_shape_2.svg';
import Shape3 from '../../assets/shapes/login_shape_3.svg';

import {loginUser} from '../../firebaseConfig';
import { toast } from '../../toast';

const Login: React.FC = () => {

  const [busy, setBusy] = useState<boolean>(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    setBusy(true)
    const res = await loginUser(username, password)
    if(!res) {
      toast('Error logging with your credentials')
    }else {
      toast('You have logged in!')
    }
    setBusy(false)
  }


  return (
    <IonPage>
      <IonLoading spinner="crescent" message="Please wait.." duration={0} isOpen={busy}/>
      <IonContent>

        <img className="login-shape-one" src={Shape1} />
        <img className="login-shape-two" src={Shape2} />
        <img className="login-shape-three" src={Shape3} />

        <div className="top-container ion-padding">
            <div className="back-box">
            <IonIcon className="return-icon" icon={returnUpBackOutline}></IonIcon>
            </div>
            <IonText className="heading">Welcome</IonText>
            <IonText className="sub-heading ion-margin-top">Sign up below to start caring for your plant.</IonText>
          </div>

        <div className="main-container">
          <div className="logo-box">
            <IonText className="title-text">Fooganic</IonText>
          </div>

          <div className="login-box ion-margin-top">
            <input className="input-field" type="text" placeholder="Email" onChange={(e:any) => setUsername(e.target.value)}/>
            <input className="input-field" type="password" placeholder="Password" onChange={(e:any) => setPassword(e.target.value)}/>
            <IonButton
                className="btn ion-margin-top"
                color="secondary"
                size="small"
                shape="round"
                expand="block"
                fill="outline"
                onClick={login}
              >
                sign in
              </IonButton>
          </div>
        </div>

      </IonContent>

    </IonPage>
  );
};

export default Login;