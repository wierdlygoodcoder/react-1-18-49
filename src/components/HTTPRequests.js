import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: null,
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/9999')
        .then(response => {
            console.log(response)
            this.setState({
                posts: Array.isArray(response.data)
                ? response.data
                : [response.data]
            })
        })
        .catch(error => {
          this.setState({
            error: error.message
          })
        })
    }
  render() {
    const posts = this.state.posts;
www
  }
}

export default HTTPRequests