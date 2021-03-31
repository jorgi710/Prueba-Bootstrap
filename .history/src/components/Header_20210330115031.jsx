import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ title_header, parrafo_header, icon_header }) => {
  return (
    <>
      <div className="bg-primary ">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-row d-flex justify-content-around align-content-center">
              <div className="p-6">
                <p className="text-white ">{title_header}</p>
                <p>{parrafo_header}</p>
              </div>
              <div className="p-6">
                <FontAwesomeIcon icon={icon_header} />
              </div>
            </div>
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
