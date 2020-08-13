import React from 'react'
import './App.css'
import { RecoilRoot } from 'recoil'
import MainInput from './components/main-input'
import ActivityFeed from './components/activity-feed'

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <main className="App-header">
          <ActivityFeed />
          <MainInput />
        </main>
      </div>
    </RecoilRoot>
  )
}

export default App
