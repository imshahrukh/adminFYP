import React, { useState, useEffect } from "react";
import TopBar from "../TopBar";
import VisitorCard from "./VisitorCard";
import moment from "moment";
import axios from "axios";
import DummyData from "./DummyData";
import "./style.css";

function Visitor({ tab }) {
  const [searchKey, setsearchKey] = useState("");
  const [Visitor, setVisitor] = useState(DummyData.Visitors);
  const [refresh, setrefresh] = useState(false);
  const [date, setdate] = useState("Today");
  const [statusSelector, setstatusSelector] = useState("All");

  const reload = () => {
    setrefresh(!refresh);
  };

  const getdata = async (url) => {
    let res = await axios.get(url);
    return res.data;
  };

  let fetchVisitor = async () => {
    const url = "http://localhost:8000/v1/Report";
    const newData = await getdata(url);
    setVisitor(newData.data.Visitor);
  };

  useEffect(() => {
    setsearchKey("");
    // fetchVisitor();
  }, [tab, refresh]);

  const findDate = (status) => {
    if (status == "Today") {
      return moment(new Date()).format("L");
    } else if (status == "Yesterday") {
      return moment(
        new Date(new Date().valueOf() - 1000 * 60 * 60 * 24)
      ).format("L");
    } else if (status == "This Week") {
      return moment(
        new Date(new Date().valueOf() - 1000 * 60 * 60 * 168)
      ).format("L");
    } else {
      return moment(
        new Date(new Date().valueOf() - 1000 * 60 * 60 * 720)
      ).format("L");
    }
  };

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

      {/* selectors */}
      <div
        style={{
          height: "30px",
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          marginTop: "85px",
        }}
      >
        <select
          style={{
            border: "1px solid #2575c0",
            borderRadius: "5px",
            width: "120px",
            color: "#2575c0",
          }}
          name="datePicker"
          value={date}
          onChange={(e) => {
            setdate(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="Today">Today</option>
          <option value="Yesterday">Yesterday</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
        </select>

        <select
          style={{
            border: "1px solid #2575c0",
            borderRadius: "5px",
            width: "120px",
            color: "#2575c0",
          }}
          name="statusPicker"
          value={statusSelector}
          onChange={(e) => {
            setstatusSelector(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="Exited">Exited</option>
          <option value="Entered">Entered</option>
        </select>
      </div>

      {/* Results */}

      {
        <div
          className="noScroll"
          style={{
            height: "70%",
            maxHeight: "430px",
            margin: "10px",
            display: "flex",
            flexWrap: "wrap",
            overflowY: "scroll",
            justifyContent: "flex-start",
            padding: "10px",
          }}
        >
          {Visitor.length == 0 ? (
            <p
              style={{
                textAlign: "center",
                marginTop: "22%",
                color: "#2575c0",
              }}
            >
              {" "}
              No results found{" "}
            </p>
          ) : (
            Visitor.map((item) => {
              if (
                searchKey == "" ||
                item.visitorName
                  .toLowerCase()
                  .includes(searchKey.toLowerCase()) ||
                item.purpose.toLowerCase().includes(searchKey.toLowerCase())
              ) {
                if (
                  date == "All" ||
                  (date == "Today" &&
                    findDate(date) ==
                      moment(item.date.valueOf()).format("L")) ||
                  (date == "Yesterday" &&
                    findDate(date) ==
                      moment(item.date.valueOf()).format("L")) ||
                  ((date == "This Week" || date == "This Month") &&
                    findDate(date) <= moment(item.date.valueOf()).format("L"))
                ) {
                  if (
                    statusSelector == "All" ||
                    (statusSelector == "Entered" &&
                      statusSelector == item.status) ||
                    (statusSelector == "Exited" && item.status != "Entered")
                  ) {
                    return <VisitorCard item={item} reload={reload} />;
                  }
                }
              } else {
                return null;
              }
            })
          )}
        </div>
      }
    </div>
  );
}

export default Visitor;
