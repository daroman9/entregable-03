import React from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentList = ({ data }) => {
  return (
    <div className="resident-list container">
      {data?.residents?.map((resident) => (
        <ResidentInfo resident={resident} key={data.residents} />
      ))}
    </div>
  );
};

export default ResidentList;
