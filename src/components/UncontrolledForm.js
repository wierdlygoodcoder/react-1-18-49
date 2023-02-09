import react from 'react';
import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputCategory = React.createRef();
      this.inputComment = React.createRef();
    }
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.inputName.current.value)
      console.log(this.inputCategory.current.value)
      console.log(this.inputComment.current.value)
    }
  render() {
    return (
      <div>
        <h2>please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="id-name">Your Name:</label>
            <input
              id="id-name"
              name="name"
              type="text"
              ref={this.inputName}
            />
          </div>
          <div>
            <label htmlfor="id-category">Query category:</label>
            <select 
                id="id-category"
                name="category"
                ref={this.inputCategory}
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
                  ref={this.inputComment} 
                />
          </div>
          <input type="submit" value="submit" />
          
        </form>
      </div>
    );
  }
}


export default UncontrolledForm