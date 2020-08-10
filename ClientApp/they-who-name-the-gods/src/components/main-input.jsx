import React, { useEffect, useState } from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import '../App.css'
import {
  godNameState,
  godTitleState,
  hideMainInputState,
} from '../recoil/atoms.js'
import {
  godGenerator,
  titleGenerator,
  forgeDivineCreation,
} from '../utils/util'

const MainInput = ({ domain }) => {
  const [godname, setGodname] = useRecoilState(godNameState)
  const [godtitle, setGodtitle] = useRecoilState(godTitleState)
  const [hideMainInput, setHideMainInput] = useRecoilState(hideMainInputState)
  const [editGodName, seteditGodName] = useState(false)
  const [editGodTitle, seteditGodTitle] = useState(false)

  useEffect(() => {
    const initialGodName = godGenerator()
    const initialGodTitle = titleGenerator()
    setGodname(initialGodName)
    setGodtitle(initialGodTitle)
  }, [])

  const onChange = (event) => {
    if (event?.target?.name === 'godname') {
      setGodname(event?.target?.value)
    } else if (event?.target?.name === 'godtitle') {
      setGodtitle(event?.target?.value)
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/api/Gods', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: godname,
        title: godtitle,
        domain: domain || 'pants',
        favor: 0,
      }),
    })
      .then((response) => response.json())
      .then((resp) => console.log(resp))
    forgeDivineCreation(godname)
    setHideMainInput(true)
  }

  return (
    <div className="main-input" style={{ width: '100%' }}>
      {/* <p>God of {domain}</p> */}
      <div className={`${hideMainInput ? ' hide' : ''}`}>
        <form onSubmit={onSubmit}>
          <div className="god-name-field">
            {editGodName ? (
              <div className="god-name-field">
                <input
                  id="godname"
                  name="godname"
                  type="text"
                  placeholder="Name this deity"
                  value={godname}
                  onChange={onChange}
                />
                <label htmlFor="godname">Name this deity</label>
              </div>
            ) : (
              <div onClick={() => seteditGodName(true)}>
                <p className="god-name">{godname}</p>
              </div>
            )}
          </div>

          <div className="god-name-field">
            {editGodTitle ? (
              <div className="god-name-field">
                <input
                  id="godtitle"
                  name="godtitle"
                  type="text"
                  value={godtitle}
                  onChange={onChange}
                />
                <label htmlFor="godtitle">Give them a descriptive title</label>
              </div>
            ) : (
              <div onClick={() => seteditGodTitle(true)}>
                <p className="god-title">{godtitle}</p>
              </div>
            )}
          </div>
          <button disabled={!godname || !godtitle} type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default MainInput
