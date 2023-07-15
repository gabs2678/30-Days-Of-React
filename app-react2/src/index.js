// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import image from './images/download.jpg'
import image2 from './images/front.png'
import './style.css';
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
const lista = ["hola", "hola2", "hola3"]
const mapper = lista.map((lista)=> <li>{lista}</li>)
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
    {header}
    {main}
  </div>
)


const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)