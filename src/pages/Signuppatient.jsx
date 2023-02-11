import React, { useEffect, useState, useContext } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { HealthContext } from "../Context/HealthCareContext";

const Signuppatient = () => {
    //USESTATE
  const [name, setName] = useState("");
    const { SignupPatient } = useContext(HealthContext);
    const address = useAddress();
  return (
    <div>
      <div className="">
            <div className="">
            
              <input type="text" placeholder="your name" onChange={(e)=> setName(e.target.value)} />
            </div>

            <div className="">
              <button onClick={()=>SignupPatient({name})}>
                {""}
                {""}
                Submit
              </button>
            </div>

          </div>
    </div>
  )
}

export default Signuppatient
