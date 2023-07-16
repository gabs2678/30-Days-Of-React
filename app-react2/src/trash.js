import React, {Component} from 'react'

class Message extends Component
{
  constructor()
  {
    super()
    this.state = 
    {
      message: "Hola"
    }
  }  
  changeMessage(props)
  {
    if(props== 'Hola')
    {
      this.setState({
        message: 'Cambio'
      })
    }else
    {
      this.setState({
        message: 'Hola'
      })
    }
  }
  render()
  {
    return(
      <div>
        <h1>Klk {this.state.message}</h1>
        <button onClick={()=> this.changeMessage(this.state.message)}>presionar</button>
      </div>
    )
  }
}

export default Message