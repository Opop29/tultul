import React from 'react';
import { IonPage, IonContent, IonText, IonMenu, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonList, IonItem, IonIcon } from '@ionic/react';
import { logOutOutline, menuOutline, homeOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/tultul/landing');
  };

  return (
    <>
      <IonMenu side="start" contentId="main-content" type="overlay">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Admin Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button>
              <IonIcon slot="start" icon={homeOutline} />
              Home
            </IonItem>
            <IonItem button onClick={handleLogout}>
              <IonIcon slot="start" icon={logOutOutline} />
              Logout
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton>
                <IonIcon icon={menuOutline} />
              </IonMenuButton>
            </IonButtons>
            <IonTitle>Admin Panel</IonTitle>
          </IonToolbar>
        </IonHeader>
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
    </>
  );
};

export default Home;