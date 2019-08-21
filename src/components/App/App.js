import React from "react";
import './App.scss'
import Editor from "../Editor/Editor";
import Previewer from "../Previewer/Previewer";

class App extends React.Component {
  state={
    markdown:''
  }
  editMarkdown=text=>{
    this.setState({
      markdown:text
    })
  }
  render() {
    return (
      <div className="App">
        <Editor editMarkdown={this.editMarkdown}/>
        <Previewer markdown={this.state.markdown}/>
      </div>
    );
  }
}

export default App;
