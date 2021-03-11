import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/LandingPage/Header';

const App = () => (
  <Header />
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
