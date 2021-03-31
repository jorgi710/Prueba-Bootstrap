import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ title_header, parrafo_header, icon_header }) => {
  return (
    <>
      <div className="bg-primary ">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-row justify-content-center align-items-center ">
              <div className="p-6 ">
                <h1 className="text-white display-6">{title_header} </h1>
                <h6>{parrafo_header}</h6>
              </div>
              <div className="p-6 ml-2" style={{fontSize:"2em", color:"white", opacity:"0.6"}}>
                <FontAwesomeIcon icon={icon_header} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
