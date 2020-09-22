import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { detail } from "../http/http-call";

function Detail() {
  const [detailData, setDetailData] = useState([]);
  useEffect(() => {
    const id = window.location.pathname.split("/")[2];

    detail(id)
      .then((res) => {
        setDetailData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Link to="/">Previous</Link>
      {console.log(detailData)}
      <h2>
        Name :{detailData.owner !== undefined ? detailData.owner.login : null}
      </h2>
      <p>
        {detailData.description !== "" && detailData.description !== null
          ? detailData.description
          : "Not Available"}
      </p>
    </div>
  );
}

export default Detail;
