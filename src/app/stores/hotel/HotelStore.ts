import { flow, types } from "mobx-state-tree";
import hotels from "../../api/hotels/hotels.json"
export const Hotel = types.model("Hotel", {
  id_hotel: types.string,
  name: types.string,
  description: types.string,
  address: types.string,
  email: types.string,
  tel: types.string,
  city: types.string,
});

const getAllHotels = () => {
  const data = hotels
  return data
}

export const HotelStore = types
  .model("HotelStore", {
    isLoading: true,
    hotels: types.array(Hotel)
  })
  .actions((self) => ({
    getAllHotel() {
      const data = getAllHotels()
      self.hotels.replace(data)
    }
    // getAllHotel: flow(function* getAllHotel(){
    //     const data = yield fetch("/hotel-api-domain")
    //     self.Hotel.replace(data)
    // }) 
  }));
