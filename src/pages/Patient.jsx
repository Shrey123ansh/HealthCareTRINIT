import React, { useEffect, useState, useContext } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { HealthContext } from "../Context/HealthCareContext";

const Patient = () => {
  const { getPatientInfo } = useContext(HealthContext);
  const address = useAddress();
  // const p = getPatientInfo();
  // console.log(p);
  return (
    <div>
      {address ? (
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Get Patient Information
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Your Information
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
              <Link to="/patient">
                <Button variant="outline-light" size="lg">
                  Sign up as Patient
                </Button>
              </Link>s
            </div>
      )}
    </div>
  );
};

export default Patient;
