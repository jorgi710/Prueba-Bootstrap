import React from "react";

const Logo = () => {
  return (
    <>
      <div
        className="d-flex flex-row justify-content-center align-items-center p-4 red"
        style={{ fontWeight: "bold" }}
      >
        <div className="p-6 bg-white p-4 ">
          <h4 className="text-secondary" >
            <h6 style={{fontSize:"medium"}} className="text-secondary ">FULL ACCESS <br/> MEMBERSHIP</h6>
            1<b className="text-white">_</b>YEAR
            <h3 className="bg-secondary text-primary pr-3 pl-2" style={{opacity:"0.6" }}>for</h3>
            <h3>$6,999</h3>
            
          </h4>
        </div>
        <div
          className="p-2 bg-primary p-4 "
          style={{ borderRadius: " 0 8px 8px 0 ", fontWeight:"bold" }}
        >
          <h1 className="text-white">2<b className="text-primary">_</b>YEARS $5,799*</h1>
        </div>
      </div>

        <h5 className="float-right mb-5 mt-0 text-primary">
          <b>limited time offer</b>
        </h5>

    </>
  );
};

export default Logo;
