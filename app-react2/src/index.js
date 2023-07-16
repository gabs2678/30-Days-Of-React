// index.js
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import image from './images/download.jpg'
import image2 from './images/front.png'
import './style.css';
import './trash.js'
import Counter from './Counter.js';
import UserGreetings from './UserGreetings';
import NameList from './nameList';
import Stylesheet from './Stylesheet';
import Form from './Form';

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 4, 2020'

// Header Component
const Header = (props) => {
  console.log(props) // empty object, {}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {author.firstName} {author.lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component

class HolasMesage extends Component
{
  render()
  {
    return(
      <div>
        <Form/>
      </div>
    )
  }
}
const App = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  )
}


const rootElement = document.getElementById('root')

ReactDOM.render(<HolasMesage />, rootElement)
/*
// Header Component
const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 3, 2020</small>
      </div>
    </header>
  )
}

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>

const Button = () => <button className='buttonStyle' style={{backgroundColor: hexaColor()}} >action</button>
// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={image} alt='image' />
    <h2>Asabeneh Yetayeh</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <Button />
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)

*/
/** 
// JSX element, header
 
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Asabeneh Yetayeh</p>
      <small>Date: Oct 1, 2020</small>
    </div>
  </header>
)

const Header = () =>

  (
    <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Asabeneh Yetayeh</p>
      <small>Date: Oct 1, 2020</small>
    </div>
  </header>
  )
const front = 
(
  <div>
    <img src={image2} height="200px"alt='nose'></img>
  </div>
)

const user =
(
  <div>
    <img src={image} alt='imagen de algo'></img>
  </div>
)
const skills = ["html", "css", "sass","js"];
const mapSkills = skills.map((skills)=> <li>{skills}</li>)
const lista = ["hola", "hola2", "hola3"]
const mapper = lista.map((lista)=> <li>{lista}</li>)

const getUser = (first,last,country, title)=>
{
  return '${first}';
}
console.log(getUser("Gabriel"))

class Parent
{
  constructor(first,last, country, title)
  {
    this.first = first
    this.last = last
    this.country = country
    this.title = title
  }
  getInfo()
  {
    return '${this.first} ${this.last}, a ${this.title} developer base in ${this,country}'
  }
  ParentMethod()
  {

  }
}

class Child extends Parent
{
  constructor(first, last, country, title,skills)
  {
    super(first,last,country, title)
    this.skills = skills
  }
  getSkills()
  {
    let len = this.skills.length
    return len > 0 ? this.skills.join(' ') : 'No skills found'
  }
  childMethod()
  {

  }
}

const child = new Child
(
  'Gabs',
  'Del Rio',
  'USA',
  'Developer',
  ['HTML','CSS','Javascript']
)



// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{mapper}</ul>

      <ul>{mapSkills}</ul>
      {user}
      {front}
    </div>
    <div className='subscrite'>
    <h1> Subscribe</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <input placeholder='First Name'></input>
      <input placeholder='Last Name'></input>
      <input placeholder='Email'></input>
      <button>Subscribe</button>
    </div>
  </main>
)

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    
    {main}
    {footer}
  </div>
)


const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<Header />, rootElement)

*/