import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

export const godNameState = atom({
  key: 'godNameState',
  default: '',
})
export const godTitleState = atom({
  key: 'godTitleState',
  default: '',
})
export const hideMainInputState = atom({
  key: 'hideMainInputState',
  default: false,
})
export const godDataState = atom({
  key: 'godDataState',
  default: [{}],
})
export const creationDataState = atom({
  key: 'creationDataState',
  default: [{}],
})
