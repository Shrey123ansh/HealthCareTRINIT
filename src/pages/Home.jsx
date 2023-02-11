import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const Home = () => {
  const address = useAddress();

  return (
    <>
      <div>
        {address ? (
          <div className="">
            <div>
              <Link to="/patient">
                <Button variant="outline-light" size="lg">
                  Sign up as Patient
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/doctor">
                <Button variant="outline-light" size="lg">
                  Sign up as Doctor
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <ConnectWallet />
        )}
      </div>
    </>
  );
};

export default Home;
