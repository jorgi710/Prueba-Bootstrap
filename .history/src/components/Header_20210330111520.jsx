import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ title_header, parrafo_header, icon_header }) => {
  return (
    <>
      <div className="bg-primary">
        <div className="row  align-items-center">
          <div className="col-10">
            
            <h1 className="text-white">{title_header}</h1>
            <p>{parrafo_header}</p>{" "}
          </div>
          <div className="col-2 align-items-center">
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
