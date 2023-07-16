import React, { Component } from 'react'

class Form extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comment: ''
    }
  }
  handlechange = (event) =>
  {
    this.setState({
        username: event.target.value
    })
  }
  commentchange = (event)=>
  {
    this.setState({
        comment: event.target.value
    })
  }
  handleSubmit = (event) =>
  {
    alert('submit completed')
    event.preventDefault()
  }
    render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>username
            </label>
            <input type='text' value={this.state.username} onChange={this.handlechange}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comment} onChange={this.commentchange}></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form