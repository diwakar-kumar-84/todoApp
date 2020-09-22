import React, { useEffect, useState } from "react";
import { git } from "../http/http-call";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log(window.location.url);

    git()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      Home
      {console.log(data)}
      <table border={1}>
        <thead>
          <th>Owner Name</th>
          <th>Description</th>
          <th>View</th>
        </thead>
        <tbody>
          {data &&
            data.map((i) => {
              return (
                <tr>
                  <td>{i.owner.login}</td>
                  <td>{i.description}</td>
                  <td>
                    <Link to={`/detail/${i.id}`}>View</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
