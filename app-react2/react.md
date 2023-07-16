# Documentation
## Table of contents

1. [Functional Components](#func)
2. [Class Components](#class)
    1. [Sub paragraph](#subparagraph1)
3. [Another paragraph](#paragraph2)
4. 
## <a name="func">Snippets</a>
- ``rconst`` (creates constructor)
- ``rce`` (creates class component)
- ``rfce`` (creates functional component)


## <a name="func">Functional componentsa</a>

Properties (props) ==> JS Function ==> HTML (JSX)

    function Greet(){
        return <h1>Hello </h1>
    }
    
    export default Greet

### Arrow function
```
export const Greet = () => {<h1> Hello </h1>}
```
```
import Greet from './components/Greet'

class App extendes Component{
	render()
	{
		return 
		(
		<div className="App">
		<Greet />
		);
	}
}
export default App;
```

- Functional components dont use 'this'
- Mainly responsible for the ui

## <a name = "class">Class Components</a>
Properties (props) ==> ES6  class ==> HTML (JSX)
``` 
import React, {Component} from 'react'

class Welcome extends Component
{
	render()
	{
	return <h1> Class Component</h1>
	}
}
export default Welcome
```
- More feuture rich
- Maintain their own private data
- Complex ui logic

## <a name ="jsx">JSX</a>

###  JSX version
```
const Hello = () =>
{
	return 
	(
		<div>
		<h1>Hello</h1>
		</div>
	)
}
export default Hello
```
### No JSX version
```
const hello = () =>
{
	return React.createElement('div',null, React,createElement('h1', null, 'Hello'))
}
```



## <a name = "props"> Props</a>

 - Props are read only, they are inmutable
 - Function parameters
	 - props - Functional Componetns
	 - this.props - Class Components

### Functional Component:

```
const Greet =(props)=>
{
	console.log(props)
	return (
	<div>
		<h1>Hello {props.name} aka {props.hero}</h1>
		{props.children}
	</div>
}
export default Greet
```
### Class Component:
```
import React, {Component} from 'react'

class Welcome extends Component
{
	render()
	{
	return <h1> Welcome {this.props,name} aka {this.props,hero}</h1>
	}
}
export default Welcome
```
```
import Greet from './components/Greet'

class App extendes Component{
	render()
	{
		return 
		(
		<div className="App">
		<Greet name ="Bruce" hero= "Batman">
			<p>He is him, he is that guy</p>
		<Greet/>
		<Greet name ="Ramon">
		<button>Action</button>
		<Greet/>
		<Welcome name="Pedro" hero="Juan"/>
		
		);
	}
}
export default App;
```

## <a name = "State"> State</a>

 - State is managed within the component
 - Variables declared in the function body
 - State can be changed
	 - useState Hook - Functional Components
	 - this.state - Class Components


```
import React, {Component} from 'react'

class Message extends Component
{
	contructor()
	{
		super()
		this.state = 
		{
			message: 'Welcome bro'
		}
			
	}
	changeMessage()
	{
		this.setState(
		{
			message: 'Hola'
		})
	}
	render()
	{
	return 
	(
		<div>
			<h1> {this.state.message}</h1>
			<button onClick={()=> this.changeMessage()}> Enviar </button
		</div>
	) 
	}
}
export default Message
```
## <a name = "setState"> setState</a>

- Use setState to change values, because if you change the state directly react wont rerender the code.

This program uses the the ``this.state.count + 1``
```
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment()
    {
        this.setState({
            count: this.state.count +1
        }, () => {console.log('Callback value', this.state.count)})
        //console.log(this.state.count)
    }
  render() {
    return (
        <div>
            <div>Counter : {this.state.count}</div>
            <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
```
is better to use 
```
this.setState(prevState)=>({
    count: prevState.count + 1
})
```
## <a name = "des"> Destructuring props and state </a>
### Functional component
 ```
 const basuraFile =({name, hero}) => {
  return (
    <div>
        <h1>
            Hello {name} aka {hero}
        </h1>
    </div>
  )
}

 ```
```
const basuraFile =props=> {
    const {name,hero} = props
    return (
    <div>
        <h1>
            Hello {name} aka {hero}
        </h1>
    </div>
  )
}
```

### Class Component

```
import React, { Component } from 'react'

class basuraFile extends Component {
  render() {
    const {name, hero} = this.props
    const {state1, state2} = this.props
    return (
      <div>Welcome {name} aka {hero}</div>
    )
  }
}

export default basuraFile
```

## <a name = "event"> Event Handling Binding </a>

Biding in class constructor(Recommended approach)
```
class basuraFile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hola'
    }
  }
  clickHandler()
  {
    this.setState({
        message: 'Adios'
    })
    console.log(this)    
  }
    render() {
    return (
      <div><div>
        {this.state.message}
        <button onClick={this.clickHandler.bind(this)}></button>
      </div></div>
    )
  }
}
```
This approach is viable if not rendering nested children component: ``<button onClick={this.clickHandler.bind(this)}></button>``
bad approch because multiple renders: `` <button onClick={this.clickHandler.bind(this)}></button>``


Final approach (Probably best Approach):
```
class basuraFile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hola'
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler= () =>
  {
    this.setState({
        message: 'Adios'
    })  
  }
    render() {
    return (
      <div><div>
        {this.state.message}
        <button onClick={this.clickHandler}></button>
      </div></div>
    )
  }
}
```



## <a name = "method"> Methods as props </a>


```
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
```


## <a name = "conditionalR">  Conditional Rendering </a>

```
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
```

## <a name = "ListRendering">  List Rendering </a>

```
import React from 'react'

function nameList() {
    const names = ['Bruce','Clark', 'Diana']
  return (
    <div>
        {
            names.map(name => <h2> {name}</h2>)
        }
    </div>
  )
}

export default nameList
```
## <a name = "ListRendering">  List Rendering </a>

```
import React from 'react'
import Person from './Person'

function nameList() {
    const persons = [
    {
        id:1,
        name: 'Gabs',
        age: 30,
        country: 'Usa'
    },
    {
        id:2,
        name: 'Juan',
        age: 20,
        country: 'Germany'
    },
    {
        id:3,
        name: 'Pedro',
        age: 15,
        country: 'Suiza'
    }
    ]
    const personList = persons.map(person => <Person person={person}></Person>)
  return (
    <div>
        {
            //names.map(name => <h2> {name}</h2>)
            
             <div>{personList}</div>
        }
    </div>
  )
}

export default nameList
```
Child: 
```
import React from 'react'

function Person({person}) {
  return (
    <div>
        My name is {person.name},  age {person.age},  from {person.country}
    </div>
  )
}

export default Person
```

## <a name = "ListRendering">  List Rendering </a>
Key help identify changes, more efficient
Key are not accesable in child components  
``const personList = persons.map(person => <Person key={person.id} person={person}></Person>)``


## <a name = "indexAskey">  Index as Key Anti-pattern </a>

This method has problems when inserting an item from the start  
Conditions to use index as key
- The items in your list do not have a unique id
- The list is a tatic list and will not change
- The lsit will never be reordered or filtered  
``const name = ['Gabs', 'Juan']``
``const nameList = names.map((name,index)=> <h2 key={index}>{name}</h2>)``

## <a name = "StylingCSS">  Styling and CSS Basics </a>

- CSS stylesheets
  
```
  import React from "react";
import './style2.css';

function Stylesheet(props) {
    let cambio = props.principal ? 'principal' : ''
  return (
    <div>
        <h2 className={`${cambio} font-xl`}>Hola</h2>
    </div>
  )
}

export default Stylesheet
```
CSS
```
.principal
{
    color: red;
}

.font-xl
{
    font-size: 200px;
}
```
- Inline syling
- CSS modules
- CSS in JS libraries

## <a name = "FormHandling">  Basics of Form Handling </a>


```
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
```

## <a name = "Lifecycle">  Component Lifecycle Methods </a>
