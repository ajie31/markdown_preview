import React, { Component } from "react";
import marked from "marked";

const Preview = ({ text }) => {
  const createMarkDown = () => {
    return { __html: marked(text) };
  };
  const previewStyle = {
    height: "82vh",
    overflowY: "scroll",
    overflowX: "hidden",
  };
  const headerStyle = {
    textAlign: "center",
  };
  return (
    <div className="col-sm">
      <h3 className="display-6" style={headerStyle}>
        {" "}
        Preview{" "}
      </h3>
      <div
        style={previewStyle}
        id="preview"
        dangerouslySetInnerHTML={createMarkDown()}
      ></div>
    </div>
  );
};

export default Preview;
