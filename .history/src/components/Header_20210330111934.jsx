import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ title_header, parrafo_header, icon_header }) => {
  return (
    <>
      <div className="bg-primary">
        <div className="row  align-items-center justify-content-center">
          <div className="col-7 mt-3 ml-3">            
            <p className="text-white ">{title_header} <br/> {parrafo_header}</p>
          </div>
          <div className="col-5">
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
