import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './NearBy.css';

const NearBy: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="ion-text-center">Near By</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Near By</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="NearBy page" />
            </IonContent>
        </IonPage>
    );
};

export default NearBy;