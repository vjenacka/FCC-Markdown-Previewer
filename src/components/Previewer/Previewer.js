import React from "react";
import './Previewer.scss';
import marked from 'marked';

//sets the option for line breaks
marked.setOptions({
    breaks: true,
  });
//inserts target='_blank' into href tags
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
}

const Previewer = ({markdown}) => {
  return (
    <div className="preview">
      <div className="header">
        <i className="fas fa-eye" />
        <span>Previewer</span>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, { renderer: renderer })}} ></div>
    </div>
  );
};

export default Previewer;
