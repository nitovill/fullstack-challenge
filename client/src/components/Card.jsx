import React from "react";
import "./card.css";
import { deleteMessage } from "../actions";
import { connect } from "react-redux";

function CardMessage({ message, deleteMessage }) {
  var clase = "info";
  if (message.priority === 1) {
    clase = "error";
  } else {
    if (message.priority === 2) {
      clase = "warning";
    }
  }
  return (
    <div className={clase}>
      <p>{message.message}</p>
      <button
        style={{ background: "transparent", borderStyle: "hidden" }}
        onClick={() => deleteMessage(message)}
      >
        Clear
      </button>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    deleteMessage: (mes) => dispatch(deleteMessage(mes)),
  };
}
export default connect(null, mapDispatchToProps)(CardMessage);
