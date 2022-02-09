import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Tutorial from "./Tutorial";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Tutorial />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
