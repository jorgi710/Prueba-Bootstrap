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
  list_more_1,
  list_more_2,
  list_more_3
}) => {
  return (
    <div>
      <h5 className="text-center my-3 text-primary">{title_name}</h5>
      <ul className=" align-content-left my-1">
        <li className="my-1"> <b>{list_1}</b> </li>
        <li className="my-1"><b>{list_2}</b></li>
        <li className="my-1"><b>{list_3}</b></li>
        <li className="my-1" style={{fontSize:"x-small"}}>{list_4}</li>
        <ul style={{listStyle:"none"}}>

            <li><b>{list_more_1}</b></li>
            <li><b>{list_more_2}</b></li>
            <li><b>{list_more_3}</b></li>
        </ul>
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
