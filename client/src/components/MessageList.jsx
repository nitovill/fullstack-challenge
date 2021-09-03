import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import random from "lodash/random";
import { getMessage, cleanMessages } from "../actions";
import { Grid, Button } from "@material-ui/core";
import Card from "./Card";

const MessageList = ({ messages, getMessage, clearMessages }) => {
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
  }, [start, messages]);
  return (
    <>
      <Button variant="contained" onClick={() => setStart(!start)}>
        {start ? "Stop Messages" : "Start Messages"}
      </Button>
      <Button variant="contained" onClick={() => clearMessages()}>
        clear
      </Button>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid container item xs={3} justifyContent="center" direction="column">
          <h2>Error Type 1</h2>
          <p>Count {messages.filter((mes) => mes.priority === 1).length}</p>
          {messages.map(
            (mes) =>
              mes.priority === 1 && <Card key={mes.message} message={mes} />
          )}
        </Grid>
        <Grid container item xs={3} justifyContent="center" direction="column">
          <h2>Warning Type 2</h2>
          <p>Count {messages.filter((mes) => mes.priority === 2).length}</p>
          {messages.map(
            (mes) =>
              mes.priority === 2 && <Card key={mes.message} message={mes} />
          )}
        </Grid>
        <Grid container item xs={3} justifyContent="center" direction="column">
          <h2>Info Type 3</h2>
          <p>Count {messages.filter((mes) => mes.priority === 3).length}</p>
          {messages.map(
            (mes) =>
              mes.priority === 3 && <Card key={mes.message} message={mes} />
          )}
        </Grid>
      </Grid>
    </>
  );
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getMessage: () => dispatch(getMessage()),
    clearMessages: () => dispatch(cleanMessages()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
