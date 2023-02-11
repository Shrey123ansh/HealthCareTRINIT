import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";


import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
// import { useRouter } from "next/router";

//INTERNAL IMPORT
import {
  ChechIfWalletConnected,
  connectWallet,
  connectingWithContract,
} from "../Utils/apiFeature";

export const HealthContext = React.createContext();

export const HealthCareProvider = ({ children }) => {
  const address = useAddress();
  

  //USER DATA
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserAddress, setCurrentUserAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [provider, setProvider] = useState(null);
  const [healthCare, setHealthCare] = useState(null);
  //   const [userLists, setUserLists] = useState([]);
  // const [account, setAccount] = useState("");
  //   const router = useRouter();

  //CREATE ACCOUNT
  const SignupDoctor = async ({ name}) => {
    try {
      // if (name || accountAddress)
      //   return setError("Name And AccountAddress, cannot be emty");

      const contract = await connectingWithContract();
      const getCreatedUser = await contract.signupDoctor(name);
      setLoading(true);
      await getCreatedUser.wait();
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError("Error while creating your account Pleas reload browser");
    }
  };

  const SignupPatient = async ({ name }) => {
    try {
      // if (name || accountAddress)
      //   return setError("Name And AccountAddress, cannot be emty");

      const contract = await connectingWithContract();
      const getCreatedUser = await contract.signupPatient(name);
      setLoading(true);
      await getCreatedUser.wait();
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError("Error while creating your account Pleas reload browser");
    }
  };

  //fetch data of doctor and patient
  // const getDoctorInfo = async () => {
  //   try {
  //     const contract = await connectingWithContract();
  //     const data = await contract.getDoctorInfo();
  //     setData(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Currently You Have no Message");
  //   }
  // };
  const getDostorInfo = async () => {
    try {
      const contract = await connectingWithContract();
      const result = await contract.doctors();
      const {0: name, 1: id} = result;
      console.log(name);
      // setData(data);
    } catch (error) {
      console.log("Currently You Have no Message");
    }
  };

  // const getPatientInfo = async () => {
  //   try {
  //     const contract = await connectingWithContract();
  //     const data = await contract.getPatientInfo();
  //     setData(data);
  //   } catch (error) {
  //     console.log("Currently You Have no Message");
  //   }
  // };
  useEffect(() => {
    // getPatientInfo();
    getDostorInfo();
    // getDoctorInfo();
  }, []);
  console.log(data);
  return (
    <HealthContext.Provider
      value={{
        data,
        ChechIfWalletConnected,
        connectWallet,
        connectingWithContract,
        SignupDoctor,
        SignupPatient,
        getDostorInfo,
        // getPatientInfo,
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};
