import React, { Component } from 'react'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Parent'
    }
    this.greetParent = this.greetParent.bind(this)
  }
  greetParent(childName)
  {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }
    render() {
    return (
      <ChildComponent greetHandler={this.greetParent}></ChildComponent>
    )
  }
}

import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default basuraFile