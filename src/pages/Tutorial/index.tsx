import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSlides,
  IonSlide,
} from "@ionic/react";

import styled from "styled-components";

// import Margin from "../../components/common/Margin";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const ImageCard = styled.div`
  width: 10em;
  height: 10em;
  background-color: red;
`;

const Tutorial: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tutorial</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            {/* <Margin size="40" /> */}
            <ImageCard />
            <h1>Tutorial Start</h1>
          </IonSlide>
          <IonSlide>
            <h3>
              인하대학교 근처에서 무엇을 먹을지 어디로 갈지 고민고민하지 마세요!
            </h3>
          </IonSlide>
          <IonSlide>
            <h3>
              인하대학교 주변 식당 목록을 타임라인으로 한 눈에 보기 쉽게
              보여드립니다!
            </h3>
          </IonSlide>
          <IonSlide>
            <h3>
              식당 메뉴와 가격을 확인하고 주변 쪼인러들과 함께 리뷰를
              공유해봐요!
            </h3>
          </IonSlide>
          <IonSlide>
            <h1>인하대에 ‘쪼인’해라</h1>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tutorial;
