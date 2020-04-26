import React  from 'react';
import { IonContent, IonPage, IonImg, IonTitle, IonGrid, IonRow } from '@ionic/react';
import './SplashScreen.css';
import Logo from '../../assets/icons/logo.svg';
const SplashScreen: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen={true}>
          <IonGrid className="grid">
              <IonRow className="row ion-align-items-center ion-justify-content-center">
                <img className="logo" src={Logo} ></img>
              </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;