import React, { Component } from 'react'
import FRInputRef from './FRInputRef'

export class FRFocusInputRef extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus();
    }
    
  render() {
    return (
      <div>
          <FRInputRef ref={this.inputRef}/>
          <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRFocusInputRef