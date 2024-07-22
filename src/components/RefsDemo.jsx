import React, { Component } from 'react';

class RefsDemo extends Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  handleClick = () => {
    alert(this.inputRef.current.disabled);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} className="inputClass class2 class3" disabled />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;