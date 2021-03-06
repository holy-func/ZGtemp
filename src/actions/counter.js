import {
  ADD,
  MINUS
} from '../constants/counter'

export const add = (e) => {
  console.log(e);
  return {
    e:e,
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
