import React, { useEffect, useState, useContext } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { HealthContext } from "../Context/HealthCareContext";

const OnlyCollab = () => {
  return (
    <div>
      <div>
        {/* <div>CollabNFT</div> */}
        <div>
          <form>
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-2 col-form-label">
                Colab with Address:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="form-group row ">
              <label for="inputPassword3" className="col-sm-2 col-form-label">
                Colab with Company Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-2 col-form-label">
                Fee:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <label for="inputPassword3" className="col-sm-2 col-form-label">
                Percent
              </label>
            </div>
            <div className="form-row " >
              <div className="form-group col-md-6 row">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnlyCollab;
