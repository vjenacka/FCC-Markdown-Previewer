import React from "react";
import './Previewer.scss'

const Previewer = ({markdown}) => {
  return (
    <div className="preview">
      <div className="header">
        <i className="fas fa-eye" />
        <span>Previewer</span>
      </div>
      <div id="preview">{markdown}</div>
    </div>
  );
};

export default Previewer;
