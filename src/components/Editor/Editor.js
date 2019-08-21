import React, { Component } from "react";
import "./Editor.scss";

export class Editor extends Component {
  handleChange = (e) => {
    this.props.editMarkdown(e.target.value)
  };
  render() {
    return (
      <div className="editor">
        <div className="header">
          <i className="fas fa-edit" />
          <span>Editor</span>
        </div>
        <textarea onChange={this.handleChange} id='editor'/>
      </div>
    );
  }
}

export default Editor;
