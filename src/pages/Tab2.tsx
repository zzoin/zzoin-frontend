import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import Main from "./Main";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Main />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
