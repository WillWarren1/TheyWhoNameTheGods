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
import MainInput from './components/main-input'
import ActivityFeed from './components/activity-feed'

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <main className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            PLACEHOLDER
          </a>
          <ActivityFeed />
          <MainInput />
        </main>
      </div>
    </RecoilRoot>
  )
}

export default App
