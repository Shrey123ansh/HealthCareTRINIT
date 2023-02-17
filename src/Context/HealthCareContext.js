import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import { HealthCareabi,HealthCareAddress } from "../Context/constants";



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
  const getDoctorInfo = async () => {
    try {
      const contract = await connectingWithContract();
      const [name,id,userlist]  = await contract.getDoctorInfo();
      // setData(data);
      console.log(name);
      console.log(id);
      console.log(userlist);
    } catch (error) {
      console.log("Currently You Have no Message");
    }
  };
  // const getDostorInfo = async () => {
  //   try {
  //     //After adding your Hardhat network to your metamask, this code will get providers and signers
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   //Pull the deployed contract instance
  //   let contract = new ethers.Contract(HealthCareAddress, HealthCareabi, signer);
  //   const [data,address]  = await contract.getDoctorInfo();
    
  //     console.log(data);
  //     console.log(address);
  //   } catch (error) {
  //     console.log("Currently You Have no Message");
  //   }
  // };

  const getPatientInfo = async () => {
    try {
      const contract = await connectingWithContract();
      const [name,id] = await contract.getPatientInfo();
      console.log(name);
      console.log(id);
      // setData(data);
    } catch (error) {
      console.log("Currently You Have no Message");
    }
  };
  useEffect(() => {
    getPatientInfo();
    // getDostorInfo();
    getDoctorInfo();
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
        getDoctorInfo,
        // getPatientInfo,
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};
