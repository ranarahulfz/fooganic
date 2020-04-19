import React, { useState, useEffect }  from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonGrid, IonText, IonButton, IonInput } from '@ionic/react';
import './Login.css';
import Logo from '../../assets/icons/logo.svg';
import Shape1 from '../../assets/shapes/login_shape_1.svg';
import Shape2 from '../../assets/shapes/login_shape_2.svg';
import Shape3 from '../../assets/shapes/login_shape_3.svg';

import {loginUser} from '../../firebaseConfig';
import { toast } from '../../toast';

const Login: React.FC = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    const res = await loginUser(username, password)
    if(!res) {
      toast('Error logging with your credentials')
    }else {
      toast('You have logged in!')
    }
  }


  return (
    <IonPage>
      <IonContent>

        <img className="shape-one" width={128} src={Shape1} />
        <img className="shape-two" height={200} src={Shape2} />
        <img className="shape-three" height={48} src={Shape3} />

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