import { types } from "mobx-state-tree";
import room from "../../api/rooms/rooms.json";
import { toJS, values } from "mobx";
import { Hotel } from "../hotel/HotelStore";
import hotel from "../../api/hotels/hotels.json";
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
    hotels: types.array(Hotel),
    guest: 1,
    location: "All",
  })
  .views((self) => ({
    get roomsAvailable() {
      let listRoom = values(self.rooms);
      if (self.guest !== 1 || self.location !== "All") {
        if(self.guest !== 1){
          return values(self.rooms).filter((room) => room.guest > self.guest);
        }
        if(self.location !== "All"){
          const hotelCheck = values(self.hotels)
          return values(self.rooms).filter((room) => hotelCheck.find((hotel) => room.hotel_id === hotel.id && hotel.city === self.location))
        }
      }
      return listRoom;
    },
  }))
  .actions((self) => ({
    setFilterGuest(guest: any) {
      self.guest = guest;
      self.location = "All";
    },
    setFilterCity(city: any) {
      self.location = city;
      self.guest = 1
      console.log(self.guest)
    },
  }));

export const roomStore = RoomStore.create({ rooms: room, hotels: hotel });
