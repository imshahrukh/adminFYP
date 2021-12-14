import React, { useState, useEffect } from "react";
import TopBar from "../TopBar";
import ComplaintCard from "./ComplaintCard";
import ComplaintCardSquare from "./ComplaintCardSquare";
import ComplaintDetail from "./ComplaintDetail";
import axios from "axios";
import moment from "moment";
import "./style.css";

function Complaints({ tab }) {
  const [searchKey, setsearchKey] = useState("");
  const [Complaints, setComplaints] = useState([]);
  const [selected, setselected] = useState(null);
  const [refresh, setrefresh] = useState(false);
  const [date, setdate] = useState("Today");
  const [statusSelector, setstatusSelector] = useState("All");

  const reload = () => {
    setrefresh(!refresh);
  };

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

  const getdata = async (url) => {
    let res = await axios.get(url);
    return res.data;
  };

  let fetchComplaints = async () => {
    const url = `${process.env.REACT_APP_API}/v1/adminComplaint`;
    const newData = await getdata(url);
    const filteredResult = newData.data.complaint;
    setComplaints(filteredResult);
  };

  useEffect(() => {
    setselected(null);
    setsearchKey("");
    fetchComplaints();
  }, [tab, refresh]);

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
      {selected ? (
        <ComplaintDetail
          reload={reload}
          item={selected}
          setselected={setselected}
        />
      ) : (
        <>
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
                width: "140px",
                color: "#2575c0",
              }}
              name="statusPicker"
              value={statusSelector}
              onChange={(e) => {
                setstatusSelector(e.target.value);
              }}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Under Investigation">Under Investigation</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

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
            {/* Results */}

            {Complaints.length == 0 ? (
              <p
                style={{
                  textAlign: "center",
                  marginTop: "22%",
                  color: "#2575c0",
                  width: "100%",
                }}
              >
                {" "}
                No results found{" "}
              </p>
            ) : (
              Complaints.map((item) => {
                if (
                  searchKey === "" ||
                  item.RegNo.toLowerCase().includes(searchKey.toLowerCase()) ||
                  item.studentId.name
                    .toLowerCase()
                    .includes(searchKey.toLowerCase())
                ) {
                  if (
                    date === "All" ||
                    (date === "Today" &&
                      findDate(date) ===
                        moment(item.date.valueOf()).format("L")) ||
                    (date === "Yesterday" &&
                      findDate(date) ===
                        moment(item.date.valueOf()).format("L")) ||
                    ((date === "This Week" || date === "This Month") &&
                      findDate(date) <= moment(item.date.valueOf()).format("L"))
                  ) {
                    if (
                      statusSelector === "All" ||
                      (statusSelector === "Under Investigation" &&
                        statusSelector === item.status) ||
                      (statusSelector === "Pending" &&
                        item.status === statusSelector) ||
                      (statusSelector === "Closed" &&
                        item.status === statusSelector)
                    ) {
                      return (
                        <ComplaintCard setselected={setselected} item={item} />
                      );
                    }
                  }
                } else {
                  return null;
                }
              })
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Complaints;
