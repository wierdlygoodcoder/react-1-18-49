import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? 'Data Loaded!' : 'Loading...'}</h1>
        {this.state.isLoggedIn ? (
        <div>
            <p> Welcome to the site! please complete the steps below:</p>
            <ol>
                <li>Confirm your email</li>
                <li>Complete your Profile</li>
                <li>Subcribe to the newsletter</li>
            </ol>
        </div>
                ) : 
                (<p>please sign in</p>) }
      </div>
    )
  }
}

export default ConditionalRenderingClass