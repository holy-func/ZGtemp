import { Room } from '../constants/room'
const INITIAL_STATE = {
    room: 0
  }  
export default function room (state=0, action) {
  switch (action.type) {
    case Room:
      return action.room;
     default:
       return state;
  }
}
