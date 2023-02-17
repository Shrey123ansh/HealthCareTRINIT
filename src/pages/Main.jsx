import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { Previous,Createnew,Collection } from "../components";

const Main = () => {
  const address = useAddress();

  return (
    <>
      <div>
        <Previous />
        <hr class="hr hr-blurry" />
        <Createnew />
        <hr class="hr hr-blurry" />
        <Collection />
        <hr class="hr hr-blurry" />
      </div>
    </>
  );
};

export default Main;
