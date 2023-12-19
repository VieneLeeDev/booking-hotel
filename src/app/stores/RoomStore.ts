import { types } from "mobx-state-tree";
import room from "../api/rooms/rooms.json";
import { toJS, values } from "mobx";
import hotel from "../api/hotels/hotels.json";
import { RootStore, initialStore } from "./app.store";
export const Room = types.model("Room", {
  id: types.identifier,
  hotel_id: types.string,
  image_url: types.string,
  price: types.number,
  size: types.string,
  guest: types.number,
});

//defind a store
export const RoomStore = types
  .model("RoomStore", {
    isLoading: true,
    rooms: types.array(Room),
    location: "All",
  })
  .views((self) => ({
    get roomsAvailable() {
      let listRoom = values(self.rooms);
      return listRoom;
    },
  }))
  .actions((self) => ({}));

export const roomStore = RoomStore.create({ rooms: room });
