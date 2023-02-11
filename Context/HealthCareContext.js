import React, { useState, useEffect } from "react";

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
// import { useRouter } from "next/router";

//INTERNAL IMPORT
import { connectingWithContract } from "../Utils/apiFeature";

export const HealthContext = React.createContext();

export const HealthCareProvider = ({ children }) => {
  const address = useAddress();

  //USER DATA
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserAddress, setCurrentUserAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
//   const [userLists, setUserLists] = useState([]);
  const [error, setError] = useState("");
  //   const router = useRouter();

  //CREATE ACCOUNT
  const signupDoctor = async ({ name, accountAddress }) => {
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

  const signupPatient = async ({ name, accountAddress }) => {
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
      const read = await contract.getDoctorInfo();
      setData(read);
    } catch (error) {
      console.log("Currently You Have no Message");
    }
  }; 

  const getPatientInfo = async () => {
    try {
      const contract = await connectingWithContract();
      const read = await contract.getPatientInfo();
      setData(read);
    } catch (error) {
      console.log("Currently You Have no Message");
    }
  }; 

  return (
    <HealthContext.Provider
      value={{
        address,
        connectingWithContract,
        signupDoctor,
        signupPatient,
        getDoctorInfo,
        getPatientInfo,
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};
