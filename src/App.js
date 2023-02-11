import React,{ useEffect, useState } from 'react'
import { ethers } from 'ethers'
// import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { Route, Routes } from 'react-router-dom';

// // ABIs
// import HealthCare from './abis/HealthCare.json'

// // Config
// import config from './config.json'

import { Sidebar, Navbar } from './components';
import {  Home, Doctor,Patient } from './pages';


const App = () => {
  // const address = useAddress();

  
  // const [provider, setProvider] = useState(null);
  // const [healthCare, setHealthCare] = useState(null);
  
  // const [account, setAccount] = useState("");
  
  // const loadBlockchainData = async () => {
    // if (!window.ethereum) return console.log("Install MetaMask");

  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   console.log(provider)
  //   setProvider(provider)
  //   console.log(address)
  //   const network = await provider.getNetwork()

  //   const healthCare = new ethers.Contract(config[network.chainId].healthCare.address, HealthCare, provider)
  //   setHealthCare(healthCare)
  //   console.log(healthCare)
  // }

  // useEffect(() => {
  //   loadBlockchainData()
  // }, [])


  return (
    <div className="">
      <div className="">
        <Sidebar />
      </div>

      <div className="">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient />} />
        </Routes>
      </div>
    </div>
  )
}

export default App