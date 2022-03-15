import React, { useState } from "react";
import styled from "styled-components";
import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonSearchbar,
} from "@ionic/react";
import Input from "./common/Input";

export interface HeaderProps {
  height: string;
  width: string;
}

const Header = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons>
          <IonButton>
            <IonIcon slot="icon-only" name="menu-outline" />
          </IonButton>
        </IonButtons>

        <IonButtons>
          <IonButton>
            <IonIcon slot="icon-only" name="person-outline" />
          </IonButton>
        </IonButtons>

        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        >
          <Input />
        </IonSearchbar>

        <SearchBar>
          <Input />
        </SearchBar>
      </IonToolbar>
    </IonHeader>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 10rem;
  background-color: red;
`;

const SearchBar = styled.div`
  position: relative;
  width: 100%;
  background-color: yellow;
  border-radius: 2rem;
  opacity: 1;
`;

export default Header;
