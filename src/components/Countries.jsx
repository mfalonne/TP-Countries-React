import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = () => {
  const [data, setData] = useState([]);
  const [hello, setHello] = useState(["Hello les amis"]);
  useEffect(() => {
    axios
      .get("https://iso.lahrim.fr/countries")
      .then((res) => setData(res.data.data));
  }, []);
  return (
    <div className="countries">
      <h1>COUNTRIES</h1>
      <h2>{hello}</h2>
    </div>
  );
};

export default Countries;
