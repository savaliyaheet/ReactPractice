import React, { Component } from 'react';
import InputRef from './InputRef';

class FocusInputRef extends Component {

  constructor(props) {
    super(props);

    this.focusRef = React.createRef();
  }

  // componentDidMount() {
  //   this.focusRef.current.focus();
  // }

  handleFocus = () => {
    this.focusRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <InputRef ref={this.focusRef} />
        <button onClick={this.handleFocus}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInputRef;