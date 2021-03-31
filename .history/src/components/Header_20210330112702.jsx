import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ title_header, parrafo_header, icon_header }) => {
  return (
    <>
      <div className="bg-primary align-content-center">         
            <p className="text-white mt-3 ml-3">{title_header}</p>
            <p>{parrafo_header}</p>

            <FontAwesomeIcon icon={icon_header} />

        </div>
      <div>text</div>
      <div>img</div>
      <div>footer</div>
    </>
  );
};

export default Header;
