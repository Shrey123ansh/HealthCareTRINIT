import { ethers } from "ethers";
// import React, { useEffect, useState } from "react";

// import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

// ABIs
import HealthCare from '../src/abis/HealthCare.json'

// Config
import config from '../src/config.json'

export const connectingWithContract = async () => {
    // const [account, setAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const [healthCare, setHealthCare] = useState(null);
  try {
    if (!window.ethereum) return console.log("Install MetaMask");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    setProvider(provider);
    // console.log(address);
    const network = await provider.getNetwork();

    const healthCare = new ethers.Contract(
      config[network.chainId].healthCare.address,
      HealthCare,
      provider
    );
    setHealthCare(healthCare);
    return healthCare;
    // console.log(healthCare);
  } catch (error) {
    console.log(error);
  }
};


  
