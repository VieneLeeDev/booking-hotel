import { types } from "mobx-state-tree";
import booking from "../api/bookings/bookings.json";
import { values } from "lodash";
import { toJS } from "mobx";


// export const Booking = types.model("Booking", {
//   id: types.identifier,
//   id_room: types.string,
//   date_checkIn: types.string,
//   date_checkOut: types.string,
//   total_price: types.number,
//   status: types.string,
// });

// export const BookingStore = types
//   .model("BookingStore", {
//     isLoading: true,
//     bookings: types.array(Booking),
//     id: "",
//   })
//   .views((self) => ({
//     get bookingInfomation() {
//       return values(self.bookings).find((booking) => booking.id === self.id);
//     },
//   }))
//   .actions((self) => ({
//     addBooking(booking: any) {
//       self.bookings.push({...booking})
//       console.log(toJS(self.bookings))
//     },
//     findBooking(id: string) {
//       self.id = id;
//     },
//   }));

// export const bookingStore = BookingStore.create({ bookings: booking });
