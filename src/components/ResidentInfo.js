import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const ResidentInfo = ({ resident }) => {
  const [residentFetch, setResidentFetch] = useState({});
  useEffect(() => {
    axios.get(resident).then((res) => {
      setResidentFetch(res.data);
    });
  }, [resident]);

  return (
    <div className="column">
      <div className="resident">
        <img src={residentFetch?.image} alt="" />
        <ul className="list">
          <li className="resident-name">{residentFetch?.name}</li>
          <li className="attribute">Status:{residentFetch?.status}</li>
          <li className="attribute">
            Episode appearences:{residentFetch?.episode?.length}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResidentInfo;
