import React, { Component } from "react";

class MarkDown extends Component {
  render() {
    const textAreaStyle = {
      height: "82vh",
      outline: "none",
      resize: "none",
    };
    const headerStyle = {
      textAlign: "center",
    };
    return (
      <div className="col-sm">
        <h3 className="display-6" style={headerStyle}>
          Editor
        </h3>
        <textarea
          style={textAreaStyle}
          className=".container container-xl form-control"
          id="editor"
          type="text"
          value={this.props.value}
          onChange={this.props.onUpdate}
        />
      </div>
    );
  }
}

export default MarkDown;
