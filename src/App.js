import React, { Component } from "react";
import MarkDown from "./component/markDown";
import Preview from "./component/preview";

class App extends Component {
  state = {
    text:
      "# Markdown Text goes here\n## You can also make subheadings\n\n > One of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.<br><br> >According to the React Documentation,\n> dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\n ---\n```\n// CODE BLOCK SAMPLE\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\n --- \nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\n![Vipatron icon](https://bit.ly/fcc-running-cats 'Kitty walking')\n\n![Vipatron icon][picref]\n\n[picref]: https://bit.ly/fcc-relaxing-cat 'kitten'\n",
  };

  handleOnChange = (event) => {
    const input = this.state;
    input.text = event.target.value;
    this.setState({
      input,
    });
  };

  render() {
    return (
      <div className="row p-3">
        <MarkDown value={this.state.text} onUpdate={this.handleOnChange} />
        <Preview text={this.state.text} />
      </div>
    );
  }
}

export default App;
