import React from "react";
import "./FineNewCard.css";
function FineNewCard({ item, setselected, setModalShow }) {
  return (
    <div class="card">
      <img src={item.studentId.photo} />
      <h1>Alexandra</h1>

      <table>
        <tr>
          <td>
            <strong>Registration </strong>
          </td>
          <td>{item.RegNo}</td>
        </tr>
        <tr>
          <td>
            <strong>Name </strong>
          </td>
          <td>{item.studentId.name}</td>
        </tr>
        <tr>
          <td>
            <strong>Class</strong>
          </td>
          <td>{item.studentId.class}</td>
        </tr>
        <tr>
          <td>
            <strong>Violation</strong>
          </td>
          <td>{item.violationName}</td>
        </tr>
        <tr>
          <td>
            <strong>Date</strong>
          </td>
          <td>{item.date}</td>
        </tr>
        <tr>
          <td>
            <strong>Amount</strong>
          </td>
          <td>{item.amount}</td>
        </tr>
        <tr>
          <td>
            <strong>Status</strong>
          </td>
          <td>{item.status}</td>
        </tr>
      </table>
      <div class="social">
        <div style={{ display: "inline", width: "120px", textAlign: "center" }}>
          <h4
            style={{
              color: "#2575c0",
              fontSize: "15px",
              fontWeight: "400",
              letterSpacing: "1px",
            }}
            className="btn-hover"
            onClick={() => {
              setselected(item);
              setModalShow(true);
            }}
          >
            View Detial
          </h4>
        </div>
      </div>
    </div>
  );
}

export default FineNewCard;
