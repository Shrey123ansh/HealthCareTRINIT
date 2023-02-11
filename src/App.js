import React,{ useEffect, useState } from 'react'
import { ethers } from 'ethers'
// import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { Route, Routes } from 'react-router-dom';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";



import { Sidebar, Navbar } from './components';
import {  Home, Doctor,Patient,Signuppatient,Signupdoctor } from './pages';


const App = () => {
  const address = useAddress();

  return (
    <div>
    {address ? (
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
          <Route path="/Signuppatient" element={<Signuppatient />} />
          <Route path="/Signupdoctor" element={<Signupdoctor />} />
        </Routes>
      </div>

    </div>
    ) : (
      <ConnectWallet />
    )}
    </div>
  )
}

export default App