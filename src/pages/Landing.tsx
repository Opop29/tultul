import React from 'react';
import { IonPage, IonContent, IonButton, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Landing: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div style={{ textAlign: 'center', marginTop: '25vh' }}>
          <IonText color="primary">
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
              Welcome to Tultul AR Navigation
            </h1>
          </IonText>
          <IonText>
            <p style={{ margin: '2rem 0', fontSize: '1.2rem' }}>
              Your smart school navigation admin system.
            </p>
          </IonText>
          <IonButton
            expand="block"
            size="large"
            color="success"
            onClick={() => history.push('/home')}
            style={{
              fontSize: '1.1rem',
              boxShadow: '0 4px 16px rgba(0, 128, 0, 0.2)',
              transition: 'transform 0.2s',
            }}
          >
            Enter Admin Panel
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Landing;