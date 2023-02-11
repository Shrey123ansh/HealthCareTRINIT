import React, { useEffect, useState, useContext } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { HealthContext } from "../Context/HealthCareContext";

const Doctor = () => {
  const { getDoctorInfo,data } = useContext(HealthContext);
  // const p = getDoctorInfo();
  // const hello = data[0];
  // const full = data;
  const address = useAddress();
  // console.log(hello);
  // console.log(full);
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
          Get Doctor Information
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
              <div className="modal-body">
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      ID:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Patient List:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <div>
        <Link to="/doctor">
          <Button variant="outline-light" size="lg">
            Sign up as Doctor
          </Button>
        </Link>
      </div>
      )}
    </div>
    
    
  )
}

export default Doctor
