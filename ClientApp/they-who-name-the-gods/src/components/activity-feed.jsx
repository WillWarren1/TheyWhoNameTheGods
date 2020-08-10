import React, { useState, useEffect } from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import '../App.css'
import {
  godNameState,
  godTitleState,
  godDataState,
  creationDataState,
  hideMainInputState,
} from '../recoil/atoms.js'
import {
  godGenerator,
  fetchGodData,
  fetchCreationData,
  decideAction,
} from '../utils/util'
import { useInterval } from '../CustomHooks/hooks'

const ActivityFeed = ({ domain }) => {
  const [godData, setGodData] = useRecoilState(godDataState)
  const [hideMainInput, setHideMainInput] = useRecoilState(hideMainInputState)
  const [creationData, setCreationData] = useRecoilState(creationDataState)
  const [actions, setActions] = useState([])

  const decideNextAction = async () => {
    console.log('tick', godData)
    console.log('whateven', creationData)
    if (godData.length > 0 && creationData.length > 0) {
      console.log('ToCK')
      const nextAction = await decideAction(godData, creationData)
      if (nextAction === 'A new Deity is born!') {
        setHideMainInput(false)
      }
      const allActions = [...actions, nextAction]
      setActions(allActions)
    }
  }

  useEffect(async () => {
    const initialGodData = await fetchGodData()
    const initialCreationData = await fetchCreationData()
    console.log('initialGodData', initialGodData)
    setGodData(initialGodData)
    setCreationData(initialCreationData)
  }, [])

  useInterval(() => decideNextAction(), 10000)

  return (
    <div className="activityfeed" style={{ width: '100%' }}>
      {actions.length &&
        actions.map((action) => {
          console.log('action', action)
          return <p>{action}</p>
        })}
    </div>
  )
}

export default ActivityFeed
