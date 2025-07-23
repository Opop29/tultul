import React from 'react';
import { IonPage, IonContent, IonText } from '@ionic/react';

const Home: React.FC = () => (
  <IonPage>
    <IonContent className="ion-padding" fullscreen>
      <IonText color="primary">
        <h1 style={{ textAlign: 'center', marginTop: '20vh', fontSize: '2rem' }}>
          Welcome to the Admin Home Page!
        </h1>
      </IonText>
      <IonText>
        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.2rem' }}>
          You have successfully entered the admin panel.
        </p>
      </IonText>
    </IonContent>
  </IonPage>
);

export default Home;