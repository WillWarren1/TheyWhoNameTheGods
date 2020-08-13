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
  titleGenerator,
} from '../utils/util'
import { useInterval } from '../CustomHooks/hooks'

const ActivityFeed = ({ domain }) => {
  const [godname, setGodname] = useRecoilState(godNameState)
  const [godtitle, setGodtitle] = useRecoilState(godTitleState)
  const [godData, setGodData] = useRecoilState(godDataState)
  const [hideMainInput, setHideMainInput] = useRecoilState(hideMainInputState)
  const [creationData, setCreationData] = useRecoilState(creationDataState)
  const [actions, setActions] = useState([])
  const [pauseInterval, setPauseInterval] = useState(
    useInterval(() => decideNextAction(), null)
  )

  useEffect(() => {
    const action = actions[actions.length - 1]
    if (action?.godName && action?.godTitle) {
      setGodname(action.godName)
      setGodtitle(action.godTitle)
      setHideMainInput(false)
    } else if (!hideMainInput) {
      setHideMainInput(true)
    }
  }, [actions.length])

  useInterval(() => decideNextAction(), 10000)

  const decideNextAction = async () => {
    if (godData?.length > 0 && creationData?.length > 0) {
      const nextAction = await decideAction(godData, creationData)
      const allActions = [...actions, nextAction]
      setActions(allActions)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const initialGodData = await fetchGodData()
      const initialCreationData = await fetchCreationData()
      setGodData(initialGodData)
      setCreationData(initialCreationData)
    }
    fetchData()
  }, [])

  return (
    <div className="activityfeed" style={{ width: '100%' }}>
      {actions.length > 0 &&
        actions.map((action, i) => {
          return <p key={i}>{action.message}</p>
        })}
    </div>
  )
}

export default ActivityFeed
