import axios from "axios";
import React, { useEffect, useState } from "react";

const Books = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <>
              <ul>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.author.name}</li>
              </ul>
            </>
          );
        })}
    </div>
  );
};

export default Books;
