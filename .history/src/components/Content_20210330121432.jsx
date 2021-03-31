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
      <h1>{title_name}</h1>
      <ul>
        <li>{list_1}</li>
        <li>{list_2}</li>
        <li>{list_3}</li>
        <li>{list_4}</li>
        <li>{list_5}</li>
        <li>{list_6}</li>
        <li>{list_7}</li>
        <li>{list_8}</li>
        <li>{list_9}</li>
      </ul>
    </div>
  );
};

export default Content;
