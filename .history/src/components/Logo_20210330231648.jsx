import React from "react";

const Logo = ({ price_logo_principal, price_logo }) => {
  return (
    <>
      <div
        className="d-flex flex-row justify-content-center align-items-center p-4 "
        style={{ fontWeight: "bold" }}
      >
        <div className="p-6 bg-white p-4 ">
          <h4 className="text-secondary">
            <h6 style={{ fontSize: "medium" }} className="text-secondary ">
              FULL ACCESS <br /> MEMBERSHIP
            </h6>
            1<b className="text-white" >_</b>YEAR
            <h3
              className=" pr-3 pl-2"
              style={{ opacity: "0.6", color:"#5C65A5", background:"#D4D4D4" }}
            >
              for
            </h3>
            <h3>{price_logo}</h3>
          </h4>
        </div>
        <div
          className="p-2  p-4 "
          style={{ borderRadius: " 0 8px 8px 0 ", fontWeight: "bold", background:"#343893" }}
        >
          <h1 className="text-white">
            2<b style={{color:"#343893"}}>_</b>YEARS {price_logo_principal}*
          </h1>
        </div>
      </div>
    </>
  );
};

export default Logo;
