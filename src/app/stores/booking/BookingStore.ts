import { types } from "mobx-state-tree";

export const Booking = types.model("Booking", {
  id_booking: types.string,
  date_checkIn: types.string,
  date_checkOut: types.string,
  total_price: types.number,
  total_day: types.number,
  status: types.string,
});

export const BookingStore = types
  .model("BookingStore", {
    isLoading: true,
    bookings: types.array(Booking),
  })
  .actions((self) => ({
    getAllBooking() {},
    addBooking(booking:any){
        self.bookings.push(booking)
    },
    updateBooking(id:string,booking_infomation:any){
    },
    removeBooking(id:string){
        const filterBooking = self.bookings.find((booking) => booking.id_booking === id)
        const indexOfBooking = filterBooking ? self.bookings.indexOf(filterBooking): null
        indexOfBooking && self.bookings.splice(indexOfBooking,1)
    }
  }));
