import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: ''
      }
    }
    handleNameChange = (event) => {
        let newValue = event.target.value
        console.log(newValue)
        this.setState({
            name: newValue
        })
    }
  render() {
    return (
      <div>
        <form>
            <label htmlFor="id-name">Your Name:</label>
            <input 
                value={this.state.name}
                onChange={this.handleNameChange}
                id="id-name"
                name="name"
                type="text"
            />
            <input type="submit" value="submit" />
        </form>  
      </div>
      
    )
  }
}


export default ControlledForm