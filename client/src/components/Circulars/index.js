import React, { useState, useEffect } from "react";
import TopBar from "../TopBar";
import Circular from "./addCircular";
import EditCircular from "./editCircular";
import axios from "axios";

import CircularCard from "./circularCard";
import "./circularCard.css";
function Circulars({ tab }) {
  const [searchKey, setsearchKey] = useState("");
  const [pageState, setPageState] = useState("circular");
  const [circular, setCircular] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [selected, setSelected] = useState(null);

  const getdata = async (url) => {
    let res = await axios.get(url);
    return res.data;
  };

  let fetchVisitor = async () => {
    const url = "http://localhost:8000/v1/adminCircular";
    const newData = await getdata(url);
    setCircular(newData.data.circular);
    console.log(newData.data.circular);
  };
  useEffect(() => {
    fetchVisitor();
  }, [refresh]);
  return (
    <div
      style={{
        paddingLeft: "6px",
        marginLeft: "18vw",
        marginRight: "5px",
        backgroundColor: "#f0f1f2",
        width: "100%",
        height: "100%",
      }}
    >
      <TopBar heading={tab} searchKey={searchKey} setsearchKey={setsearchKey} />

      {/* Body */}
      <div
        style={{
          marginTop: "7rem",
        }}
      ></div>
      {pageState === "editCircular" ? (
        <EditCircular
          setPageStatus={setPageState}
          setRefresh={setRefresh}
          selected={selected}
        />
      ) : pageState === "circular" ? (
        <div className="circular">
          <div className="circularCardHolder">
            {circular &&
              circular.map((el, key) => (
                <CircularCard
                  el={el}
                  key={key}
                  setRefresh={setRefresh}
                  refresh={refresh}
                  setPageStatus={setPageState}
                  setSelected={setSelected}
                />
              ))}
          </div>
          <div
            className="addCircular"
            onClick={() => {
              setPageState("addCircular");
              setRefresh(false);
              console.log("test");
            }}
          >
            Add Circular
          </div>
        </div>
      ) : (
        <Circular setPageStatus={setPageState} setRefresh={setRefresh} />
      )}
    </div>
  );
}

export default Circulars;
