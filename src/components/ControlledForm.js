import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comments:'',
      }
    }
    handleNameChange = (event) => {
        let newValue = event.target.value
        console.log(newValue)
        this.setState({
            name: newValue
        })
    }
    handleCategoryChange = (event) => {
      this.setState({
        category:event.target.value
      })
    }
    handleCommentsChange = (event) => {
      this.setState({
        comments: event.target.value
      })
    }
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state)
    }
  render() {
    return (
      <div>
        <h2>please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="id-name">Your Name:</label>
            <input
              value={this.state.name}
              onChange={this.handleNameChange}
              id="id-name"
              name="name"
              type="text"
            />
          </div>
          <div>
            <label htmlfor="id-category">Query category:</label>
            <select 
                id="id-category"
                name="category"
                value={this.state.category}
                onChange={this.handleCategoryChange}
              >
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General inquiry</option>
            </select>
          </div>
          <div>
              <label htmlfor="id-comments">Comments:</label>
              <textarea 
                  id="id-comments"
                  name="comments" 
                  value={this.state.comments}
                  onChange={this.handleCommentsChange}
                />
          </div>
          <input type="submit" value="submit" />
          
        </form>
      </div>
    );
  }
}


export default ControlledForm