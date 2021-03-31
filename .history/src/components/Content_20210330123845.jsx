import React from "react";

const Content = ({
  title_name,
  list_1,
  list_2,
  list_3,
  list_4,
  list_5,
  list_6,
  list_7,
  list_8,
  list_9,
}) => {
  return (
    <div>
      <h5 className="text-center my-3 text-primary">{title_name}</h5>
      <ul className=" align-content-left my-1">
        <li className="my-1"> <b>{list_1}</b> </li>
        <li className="my-1"><b>{list_2}</b></li>
        <li className="my-1"><b>{list_3}</b></li>
        <li className="my-1">{list_4}</li>
        <li className="my-1">{list_5}</li>
        <li className="my-1">{list_6}</li>
        <li className="my-1">{list_7}</li>
        <li className="my-1">{list_8}</li>
        <li className="my-1">{list_9}</li>
      </ul>
    </div>
  );
};

export default Content;
