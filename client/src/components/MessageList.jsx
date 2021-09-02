import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import random from "lodash/random";
import { getMessage } from "../actions";

const MessageList = ({ message, getMessage }) => {
  const [start, setStart] = useState(true);
  const mandar = () => {
    getMessage();
  };
  useEffect(() => {
    const nextInMS = random(500, 3000);
    setTimeout(() => {
      if (start) {
        mandar();
      }
    }, nextInMS);
  }, [start, message]);
  return (
    <>
      <Button variant="contained" onClick={() => setStart(!start)}>
        {start ? "Stop Messages" : "Start Messages"}
      </Button>
      <h1>{message}</h1>
    </>
  );
};

function mapStateToProps(state) {
  return {
    message: state.message,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getMessage: () => dispatch(getMessage()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
