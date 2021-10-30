import React from "react";

const Message = ({ error, bgColor }) => {
  let styleMessage = {
    padding: "1rem",
    margin: "1rem 0",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: bgColor,
    color: "#fff",
  };

  return (
    <div style={styleMessage}>
      <p>{error}</p>
    </div>
  );
};

export default Message;
