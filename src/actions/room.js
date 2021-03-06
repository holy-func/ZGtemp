import {
  Room
} from '../constants/room'
export const changeRoom = (roomid) => {
  return {
    type: Room,
    room: roomid,
  }
}
