import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../components/Header";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
      </IonContent>
    </IonPage>
  );
};

export default Main;
