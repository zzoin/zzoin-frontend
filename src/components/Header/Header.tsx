import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonIcon,
} from "@ionic/react";

import styled from "styled-components";

const Header: React.FC = () => {
  const StyledIonIcon = styled(IonIcon)`
    color: #000;
  `;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ZZOIN</IonTitle>
          {/* <StyledIonIcon name="person-outline"></StyledIonIcon> */}
          <IonSearchbar placeholder="찾고 싶은 인하대 맛집이 있으신가요?" />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default Header;
