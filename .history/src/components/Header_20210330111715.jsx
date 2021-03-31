import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ title_header, parrafo_header, icon_header }) => {
  return (
    <>
      <div className="bg-primary">
        <div className="row  align-items-center justify-content-center">
          <div className="col-7">
            
            <h3 className="text-white">{title_header}</h3>
            <h5>{parrafo_header}</h5>{" "}
          </div>
          <div className="col-5 align-items-center">
            <FontAwesomeIcon icon={icon_header} />
          </div>
        </div>
      </div>
      <div>text</div>
      <div>img</div>
      <div>footer</div>
    </>
  );
};

export default Header;
