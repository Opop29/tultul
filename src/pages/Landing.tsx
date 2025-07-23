import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonText, IonInput, IonItem, IonLabel, IonModal, IonSpinner } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const ADMIN_PASSCODE = import.meta.env.VITE_ADMIN_PASSCODE;

const Landing: React.FC = () => {
  const history = useHistory();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Responsive container style
  const getContainerStyle = () => {
    if (window.innerWidth > 600) {
      // Desktop/tablet: show container
      return {
        maxWidth: 400,
        margin: '10vh auto',
        padding: '2.5rem 2rem',
        borderRadius: '24px',
        background: 'rgba(255,255,255,0.92)',
        boxShadow: '0 8px 32px rgba(25, 118, 210, 0.15), 0 2px 8px rgba(255,152,0,0.10)',
        textAlign: 'center' as const,
        animation: 'fadeIn 2s',
      };
    }
    // Mobile: no container, just padding
    return {
      padding: '2rem 1rem',
      textAlign: 'center' as const,
      animation: 'fadeIn 2s',
      background: 'transparent',
    };
  };

  const handleLogin = () => {
    if (passcode === ADMIN_PASSCODE) {
      setError('');
      setPasscode('');
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        history.push('/tultul/home');
      }, 3000);
    } else {
      setError('Incorrect passcode');
    }
  };

  return (
    <IonPage>
      <IonContent
        className="ion-padding"
        fullscreen
        style={{
          background: 'linear-gradient(135deg, #1976d2 0%, #ff9800 100%)',
          minHeight: '100vh',
        }}
      >
        <div style={getContainerStyle()}>
          <IonText color="primary">
            <h1
              style={{
                fontSize: '2.8rem',
                fontWeight: 'bold',
                letterSpacing: '2px',
                animation: 'slideDown 1s',
                marginBottom: '0.5rem',
                color: '#1976d2',
                textShadow: '0 2px 8px #ff980080',
              }}
            >
              Tultul AR Navigation
            </h1>
          </IonText>
          <IonText>
            <p
              style={{
                margin: '1.2rem 0 2.2rem 0',
                fontSize: '1.2rem',
                color: '#333',
                animation: 'fadeIn 2.5s',
                fontWeight: 500,
              }}
            >
              Welcome to the <span style={{ color: '#ff9800', fontWeight: 'bold' }}>Admin Panel</span>
            </p>
          </IonText>
          <IonText>
            <h2
              style={{
                color: '#1976d2',
                fontWeight: 'bold',
                fontSize: '1.3rem',
                marginBottom: '1rem',
                letterSpacing: '1px',
                textShadow: '0 1px 4px #ff980080',
              }}
            >
              Admin Passcode
            </h2>
          </IonText>
          <IonItem
            style={{
              maxWidth: 320,
              margin: '0 auto 1rem auto',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(25,118,210,0.07)',
              background: '#fff',
              border: '1px solid #1976d2',
            }}
          >
            <IonInput
              type="password"
              value={passcode}
              onIonChange={e => setPasscode(e.detail.value!)}
              required
              style={{
                fontSize: '1.1rem',
                color: '#1976d2',
                fontWeight: 'bold',
                letterSpacing: '2px',
              }}
              disabled={showModal}
              placeholder="Enter passcode"
            />
          </IonItem>
          {error && (
            <IonText color="danger">
              <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#d32f2f' }}>{error}</p>
            </IonText>
          )}
          <IonButton
            expand="block"
            size="large"
            color="primary"
            onClick={handleLogin}
            style={{
              fontSize: '1.1rem',
              marginTop: '1.5rem',
              boxShadow: '0 4px 16px #1976d280',
              borderRadius: '10px',
              background: 'linear-gradient(90deg, #1976d2 60%, #ff9800 100%)',
              color: '#fff',
              fontWeight: 'bold',
              letterSpacing: '1px',
              transition: 'transform 0.2s',
              animation: 'popIn 1.5s',
            }}
            disabled={showModal}
          >
            Enter Admin Panel
          </IonButton>
        </div>
        <IonModal isOpen={showModal} backdropDismiss={false}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              background: 'linear-gradient(135deg, #1976d2 0%, #ff9800 100%)',
            }}
          >
            <IonSpinner name="dots" style={{ marginBottom: '1rem', color: '#fff' }} />
            <IonText color="light">
              <h2 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '0.5rem' }}>Logging in...</h2>
            </IonText>
            <IonText>
              <p style={{ color: '#fff', marginTop: '0.5rem', fontWeight: 500 }}>
                Please wait while we verify your access.
              </p>
            </IonText>
          </div>
        </IonModal>
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