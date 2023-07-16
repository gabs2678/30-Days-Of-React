import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         loggedIn: false
      }
    }
  render() {
    // let message
    // if (this.state.loggedIn)
    // {
    //    message =  <div>Welcome</div>
    // }else
    // {
    //     message = <div>Guest</div>
    // }
    // return(message)

    return(
        this.state.loggedIn ? <div>Welcome home</div> : <div>Welcome guest</div>
    )
  }
}

export default UserGreetings