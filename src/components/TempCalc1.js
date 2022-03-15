import React, { Component } from 'react'
import TempBoiler2 from './TempBoiler2'

class TempCalc1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             temperature: ''
        }
    }

    tempChangeHandler = (event) => {
        this.setState({
            temperature: event.target.value
        })
    }
    
  render() {
    return (
      <div>
          <label htmlFor="">Enter Temperature of the Water</label>
          <input type="text" value={this.state.temperature} onChange={this.tempChangeHandler} />
          <TempBoiler2 celsius={parseFloat(this.state.temperature)}/>
      </div>
    )
  }
}

export default TempCalc1