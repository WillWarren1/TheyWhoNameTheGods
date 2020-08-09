import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          {/* <Router>
            <Switch>
              <Route path="/" component />
            </Switch>
          </Router> */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Hello Tally
          </a>
        </header>
      </div>
    </RecoilRoot>
  )
}

export default App
