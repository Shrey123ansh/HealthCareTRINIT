import React, { useEffect, useState, useContext } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { HealthContext } from "../Context/HealthCareContext";

const Signupdoctor = () => {
    //USESTATE
  const [name, setName] = useState("");
    const { SignupDoctor } = useContext(HealthContext);
    const address = useAddress();
  return (
    <div>
      <div className="">
            <div className="">
            
              <input type="text" placeholder="your name" onChange={(e)=> setName(e.target.value)} />
            </div>

            <div className="">
              <button onClick={()=>SignupDoctor({name})}>
                {""}
                {""}
                Submit
              </button>
            </div>

          </div>
    </div>
  )
}

export default Signupdoctor
