import { types } from "mobx-state-tree";
import room from "../../api/rooms/rooms.json"
import { toJS } from "mobx";

export const Room = types.model("Room", {
  id_room: types.string,
  id_hotel: types.string,
  image_url: types.string,
  price: types.number,
  size: types.string,
  guest: types.number,
});

//get all rooms from api
const getAllDataRooms = () => {
  // const data = await fetch('room-api-domain')
  const data = room
  return data
}
//defind a store 
export const RoomStore = types
  .model("RoomStore", {
    isLoading:true,
    rooms: types.array(Room)
  })
  .actions((self) => ({
    getAllRooms() {
      const data = getAllDataRooms()
      self.rooms.replace(data)
    },
    removeRoom(id:string) {
      const remain = getAllDataRooms()
      const findRoom = remain.find((room) => room.id_room === id)
      const indexRoom = findRoom ? remain.indexOf(findRoom) : null
      if(typeof indexRoom === 'number'){
        remain.splice(indexRoom,1)
      }
      self.rooms.replace(remain)
    }
    // getAllRooms: flow(function* getAllRooms () {
    //   const data = yield getAllDataRooms()
    //   self.rooms.replace(data)
    // })
  }))
