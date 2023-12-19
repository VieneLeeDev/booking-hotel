import { onSnapshot, types } from "mobx-state-tree";
import { RoomStore } from "./RoomStore";
// import { BookingStore } from "./BookingStore";
// import { HotelStore } from "./HotelStore";
import { dataApp } from "./data";

export const RootStore = types
  .model("RooStore", {
    room: types.optional(RoomStore, {}),
    filter_guest: 1,
  })
  .views(() => {
    return {
      get itemsSorted() {
        return;
      },
    };
  })
  .actions((self: any) => {
    return {
      setFilterGuest(guest: any) {
        self.filter_guest = guest;
      },
    };
  });

export const initialStore = RootStore.create(dataApp);
onSnapshot(initialStore, (snapshot) => {
  console.log("appStore", snapshot);
  localStorage.setItem("bookingApp", JSON.stringify(snapshot));
});