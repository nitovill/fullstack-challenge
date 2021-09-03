import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import random from "lodash/random";
import { getMessage, cleanMessages } from "../actions";
import { Grid, Button } from "@material-ui/core";
import Card from "./Card";
import Snackbar from "./Snackbar.jsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  botones: {
    backgroundColor: "#88FCA3",
    padding: "inherit",
    margin: "10px",
  },
});

const MessageList = ({ messages, getMessage, clearMessages, actual }) => {
  const [start, setStart] = useState(true);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    const nextInMS = random(500, 3000);
    setOpen(false);
    if (actual && actual.priority === 1) {
      setOpen(true);
    }
    setTimeout(() => {
      if (start) {
        getMessage();
      }
    }, nextInMS);
  }, [start, actual]);
  return (
    <>
      <h1>Coding Challenge</h1>
      <hr></hr>
      {open && <Snackbar message={actual} />}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className={classes.botones}
          variant="contained"
          onClick={() => setStart(!start)}
        >
          {start ? "Stop" : "Start"}
        </Button>
        <Button
          className={classes.botones}
          variant="contained"
          onClick={() => clearMessages()}
        >
          Clear
        </Button>
      </div>
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
    actual: state.actual,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getMessage: () => dispatch(getMessage()),
    clearMessages: () => dispatch(cleanMessages()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
