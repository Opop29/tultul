import React, { useRef } from 'react';
import { IonPage, IonContent, IonText, IonMenu, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonList, IonItem, IonIcon, IonMenuToggle } from '@ionic/react';
import { logOutOutline, menuOutline, homeOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();
  const menuRef = useRef<HTMLIonMenuElement>(null);

  const handleLogout = () => {
    // Close the menu before navigating
    if (menuRef.current) {
      menuRef.current.close();
    }
    history.push('/tultul/landing');
  };

  const handleHomeClick = () => {
    if (menuRef.current) {
      menuRef.current.close();
    }
    // Add navigation if needed
  };

  return (
    <>
      <IonMenu side="start" contentId="main-content" type="overlay" ref={menuRef}>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Admin Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle autoHide={false}>
              <IonItem button onClick={handleHomeClick}>
                <IonIcon slot="start" icon={homeOutline} />
                Home
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle autoHide={false}>
              <IonItem button onClick={handleLogout}>
                <IonIcon slot="start" icon={logOutOutline} />
                Logout
              </IonItem>
            </IonMenuToggle>
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