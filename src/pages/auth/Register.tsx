import React, { useState, useEffect }  from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonGrid, IonText, IonButton } from '@ionic/react';
import './Register.css';
import Logo from '../../assets/icons/logo.svg';
import Shape1 from '../../assets/shapes/login_shape_1.svg';
import Shape2 from '../../assets/shapes/login_shape_2.svg';
import Shape3 from '../../assets/shapes/login_shape_3.svg';

import { registerUser } from '../../firebaseConfig';
import { toast } from '../../toast';

const Tab1: React.FC = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  async function register() {
    if(password !== cpassword) {
      return toast('password do not match')
    }
    if(username.trim() === '' || password.trim() === ''){
      return toast('Username and password is required')
    }

    const res = await registerUser(username,password)
    if(res) {
      toast('You have registered successfully')
    } else {
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
            <input className="input-field" type="text" placeholder="Username" onChange={(e:any) => setUsername(e.target.value)}/>
            <input className="input-field" type="password" placeholder="Password" onChange={(e:any) => setPassword(e.target.value)}/>
            <input className="input-field" type="password" placeholder="Confirm Password" onChange={(e:any) => setCPassword(e.target.value)}/>
            <IonButton
                className="btn ion-margin-top"
                color="secondary"
                size="small"
                shape="round"
                expand="block"
                fill="outline"
                onClick={register}
              >
                sign up
              </IonButton>
          </div>
        </div>

      </IonContent>

    </IonPage>
  );
};

export default Tab1;