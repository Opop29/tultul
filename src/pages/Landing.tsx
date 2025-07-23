import React from 'react';
import { IonPage, IonContent, IonButton, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Landing: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div
          style={{
            textAlign: 'center',
            marginTop: '20vh',
            animation: 'fadeIn 2s',
          }}
        >
          <IonText color="primary">
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              letterSpacing: '2px',
              animation: 'slideDown 1s'
            }}>
              🚀 Welcome to Tultul AR Navigation
            </h1>
          </IonText>
          <IonText>
            <p style={{
              margin: '2rem 0',
              fontSize: '1.2rem',
              color: '#333',
              animation: 'fadeIn 2.5s'
            }}>
              Your smart school navigation admin system.
            </p>
          </IonText>
          <IonButton
            expand="block"
            size="large"
            color="success"
            onClick={() => history.push('/tultul/home')}
            style={{
              fontSize: '1.1rem',
              boxShadow: '0 4px 16px rgba(0, 128, 0, 0.2)',
              transition: 'transform 0.2s',
              animation: 'popIn 1.5s'
            }}
          >
            Enter Admin Panel
          </IonButton>
        </div>
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideDown {
              from { transform: translateY(-50px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            @keyframes popIn {
              0% { transform: scale(0.8); opacity: 0; }
              80% { transform: scale(1.05); opacity: 1; }
              100% { transform: scale(1); }
            }
          `}
        </style>
      </IonContent>
    </IonPage>
  );
};

export default Landing;