import { flow, types } from "mobx-state-tree";
import hotel from "../../api/hotels/hotels.json"
export const Hotel = types.model("Hotel", {
  id: types.string,
  name: types.string,
  description: types.string,
  address: types.string,
  email: types.string,
  tel: types.string,
  city: types.string,
});

const getAllHotels = () => {
  const data = hotel
  return data
}

export const HotelStore = types
  .model("HotelStore", {
    isLoading: true,
    hotels: types.array(Hotel)
  })
  .actions((self) => ({
  }));

  export const hotelStore = HotelStore.create({hotels:hotel})