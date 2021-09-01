import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const MessageList = () => {
  const [start, setStart] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setStart(!start)}>
        {start ? "Start Messages" : "Stop Messages"}
      </Button>
    </>
  );
};

export default MessageList;
