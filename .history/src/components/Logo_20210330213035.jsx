import React from "react";

const Logo = () => {
  return (
    <>
      <div
        className="d-flex flex-row justify-content-center align-items-center p-4 "
        style={{ fontWeight: "bold" }}
      >
        <div className="p-6 bg-white p-5">
          <h4>
            1<b className="text-white">_</b>YEAR
            <h3 className="bg-secondary text-primary px-2" style={{opacity:"0.1"}}>for</h3>
          </h4>
        </div>
        <div
          className="p-6 bg-primary p-5 "
          style={{ borderRadius: " 0 15px 15px  " }}
        >
          <h3>2_YEARS $5,799</h3>
        </div>
      </div>
      <div>
        <h5 className="float-right mb-5 text-primary">
          <b>limited time offer</b>
        </h5>
      </div>
    </>
  );
};

export default Logo;
