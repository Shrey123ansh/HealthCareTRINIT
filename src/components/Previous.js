import React from "react";

const Previous = () => {
  return (
    <div>
      <div>Previous</div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div>
          <div className="card border-success mb-3">
            <div className="card-header bg-transparent border-success">
              Colab with XXXXX
            </div>
            <div className="card-body text-success">
              <h5 className="card-title">Address:</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Percentage:</li>
                <li className="list-group-item">Total Revenue:</li>
                <li className="list-group-item">Starts From ....... & Ends on ......</li>
              </ul>
            </div>
            <div className="card-footer bg-transparent border-success"> Your Amount ......</div>
          </div>
        </div>
        <div>
          <div className="card border-success mb-3">
            <div className="card-header bg-transparent border-success">
              Colab with XXXXX
            </div>
            <div className="card-body text-success">
              <h5 className="card-title">Address:</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Percentage:</li>
                <li className="list-group-item">Total Revenue:</li>
                <li className="list-group-item">Total Mints:</li>
                <li className="list-group-item">Starts From ....... & Ends on ......</li>
              </ul>
            </div>
            <div className="card-footer bg-transparent border-success"> Your Amount ......</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Previous;
