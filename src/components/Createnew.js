import React from "react";

const Createnew = () => {
  return (
    <div>
      <div>Create a New Collab</div>
      {/* <button
        type="button"
        className="btn btn-outline-light btn-square-md"
        data-mdb-ripple-color="dark"
      >
        Only Collab
      </button>
      <button
        type="button"
        className="btn btn-outline-info btn-square-md"
        data-mdb-ripple-color="dark"
      >
        Collab with NFT Collection
      </button> */}
      <div classNameName="row row-cols-1 row-cols-md-4 g-4">
        <div className="container">
          <h1>Only Collab</h1>
        </div>
        
        <div className="container">
          <h1>Collab with NFT Collection</h1>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Createnew;
