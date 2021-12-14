import React, { useState, useEffect } from "react";
import TopBar from "../TopBar";
import FineCard from "./FineCard";
import ComplaintCardSquare from "./ComplaintCardSquare";
import ComplaintDetail from "./ComplaintDetail";
import axios from "axios";
import moment from "moment";
import { Modal, Button } from "react-bootstrap";
import { saveAs } from "file-saver";
import "./style.css";
import FineNewCard from "./FineNewCard";
function Fines({ tab }) {
  const [searchKey, setsearchKey] = useState("");

  const [Complaints, setComplaints] = useState([]);
  const [selected, setselected] = useState(null);
  const [refresh, setrefresh] = useState(false);
  const [date, setdate] = useState("All");
  const [statusSelector, setstatusSelector] = useState("All");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [list, setList] = useState(false);
  const reload = () => {
    setrefresh(!refresh);
  };
  function closeModal() {
    setIsOpen(false);
  }
  const createAndDownloadPdf = async () => {
    console.log("test");
    await axios
      .post(`${process.env.REACT_APP_API}/create-pdf`, selected)
      .then(() =>
        axios.get(`${process.env.REACT_APP_API}/fetch-pdf`, {
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
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
  const updateData = async () => {
    const url = `${process.env.REACT_APP_API}/v1/adminFine/${selected._id}`;

    let res = await axios.patch(url, {
      status: "Paid",
    });
    return res.data.status;
  };

  let fetchComplaints = async () => {
    const url = `${process.env.REACT_APP_API}/v1/adminFine`;
    const newData = await getdata(url);
    const filteredResult = newData.data.fine;
    console.log(filteredResult);
    setComplaints(filteredResult);
  };
  const submitFine = async () => {
    setSubmit(false);
    const check = await updateData();
    console.log(check);
    if (check === "success") {
      setSubmit(true);
    }
    // setIsOpen(false);
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
      {modalIsOpen ? (
        <div className="customeModel">
          <div
            className="btnClose"
            onClick={() => {
              setIsOpen(false);
              setSubmit(false);

              refresh ? setrefresh(false) : setrefresh(true);
            }}
          >
            Back
          </div>
          <div className="fineDetailsCard">
            <h2 style={{ textAlign: "center", color: "black" }}>
              Fine Detials
            </h2>
            <div className="row1">
              <img
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  boxShadow:
                    "0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)",
                }}
                src={selected.studentId.photo}
                alt="user"
              />
              <h4>{selected.studentId.name}</h4>
              <h4>{selected.studentId.RegNo}</h4>
            </div>
            <div>
              <h2 style={{ textAlign: "center", color: "black" }}>
                Fine History
              </h2>

              <div className="row1">
                <h4>{selected.violations[0].date}</h4>
                <h4>{selected.violations[0].timeDetected}</h4>
                <h4>{selected.violationName}</h4>
              </div>
              <div className="row1">
                <h4>{selected.violations[1].date}</h4>
                <h4>{selected.violations[1].timeDetected}</h4>
                <h4>{selected.violationName}</h4>
              </div>
              <div className="row1">
                <h4>{selected.violations[2].date}</h4>
                <h4>{selected.violations[2].timeDetected}</h4>
                <h4>{selected.violationName}</h4>
              </div>
            </div>
            <div className="fine">
              <h3 style={{ display: "inline-block" }}>Fine:</h3>{" "}
              <h3 style={{ display: "inline-block" }}>{selected.amount}/Rs:</h3>
            </div>
            {submit === true ? (
              <div>
                <div className="finetbn">Fine Submited</div>
                <div
                  className="finetbn"
                  onClick={() => {
                    createAndDownloadPdf();
                  }}
                >
                  Download Pdf
                </div>
              </div>
            ) : selected.status === "Paid" ? (
              <div>
                <div className="finetbn">Fine Already Submited</div>
                <div
                  className="finetbn"
                  onClick={() => {
                    createAndDownloadPdf();
                  }}
                >
                  Download Pdf
                </div>
              </div>
            ) : (
              <div
                className="finetbn"
                onClick={() => {
                  submitFine();
                }}
              >
                Submit Fine
              </div>
            )}
            {/* <div className="finetbn">Submit Fine</div> */}
          </div>
        </div>
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
              position: "relative",
              width: "95%",
              // width: "94%",
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
            <i
              onClick={() => {
                setList(false);
              }}
              style={{
                cursor: "pointer",
                position: "absolute",
                display: "block",
                top: "0.55rem",
                fontSize: "2.1rem",
                right: "12.5rem",
                color: !list ? "#2575c0" : "gray",
              }}
              class="fas fa-address-card"
            ></i>
            <i
              onClick={() => {
                setList(true);
              }}
              style={{
                cursor: "pointer",

                position: "absolute",
                display: "block",
                top: "0.55rem",
                fontSize: "2.1rem",
                right: "10rem",
                color: list ? "#2575c0" : "gray",
              }}
              class="fas fa-th-list"
            ></i>

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

            {Complaints.length === 0 ? (
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
                      if (list) {
                        return (
                          <FineCard
                            setselected={setselected}
                            item={item}
                            setModalShow={setIsOpen}
                          />
                        );
                      }
                      return (
                        <FineNewCard
                          setselected={setselected}
                          item={item}
                          setModalShow={setIsOpen}
                        />
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

export default Fines;
