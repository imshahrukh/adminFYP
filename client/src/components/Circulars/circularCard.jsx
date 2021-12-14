import React from "react";
import "./circularCard.css";
import axios from "axios";

function CircularCard({ el, setRefresh, refresh, setPageStatus, setSelected }) {
  const getdata = async (url) => {
    let res = await axios.delete(url);
    return res.data;
  };

  let fetchVisitor = async () => {
    const url = `http://localhost:8000/v1/adminCircular/${el._id}`;
    const newData = await getdata(url);
  };

  return (
    <div className="circulars">
      <h4
        className="cross"
        onClick={() => {
          fetchVisitor();
          refresh === true ? setRefresh(false) : setRefresh(true);
        }}
      >
        Delete
      </h4>
      <h4
        className="edit"
        onClick={() => {
          setPageStatus("editCircular");
          setSelected(el);
        }}
      >
        Edit
      </h4>
      <h2>{el.subject}</h2>
      <p>{el.body}</p>
      <h3>Date: {el.date}</h3>
      <div className="classHolders">
        {el.classes.map((el, key) => (
          <h4 key={key}>{el}</h4>
        ))}
      </div>
    </div>
  );
}

export default CircularCard;
