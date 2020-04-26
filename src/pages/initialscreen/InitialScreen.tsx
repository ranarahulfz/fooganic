import React  from 'react';
import {
    IonContent,
    IonPage,
    IonImg,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonText,
    IonButton
} from '@ionic/react';
import './InitialScreen.css';
import Image1 from '../../assets/icons/energy-drink.svg';

const InitialScreen: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen={true}>
          <div className="container">
              <div className="main-container">
                  <div className="grid">
                      <div className="card">
                          <div className="card-cont">
                            <img className="logo" src={Image1} alt="hero-img"/>
                            <p className="hero-desc" >The hard roe of cod eaten boiled in japanese sushi dishes</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="btn-container">
                  <div className="btn-cont">
                      <IonButton
                          className="btn skip-btn"
                          color="secondary"
                          size="small"
                          shape="round"
                          expand="block"
                          fill="outline"
                          routerLink="/home"
                      >
                          Skip
                      </IonButton>
                      <div className="grid">
                        <button className="new-acc-btn">Create new Account</button>
                        <button className="signin-btn">Signin</button>
                      </div>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default InitialScreen;