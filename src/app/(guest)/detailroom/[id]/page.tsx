"use client";
import React, { useEffect, useState } from "react";
import hotels from "../../../api/hotels/hotels.json";
import rooms from "../../../api/rooms/rooms.json";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Link from "next/link";
import uuid from "react-uuid";
import { useRouter } from "next/navigation";
import { bookingStore } from "@/app/stores/booking/BookingStore";
dayjs.extend(customParseFormat);

const DetailRoom = ({ params }: { params: { id: string } }) => {
  const [count, setCount] = useState(1);
  const [reload, setReload] = useState(false);
  const [dataInBill, setDataInBill] = useState({
    checkIn: "",
    checkOut: "",
  });

  // const [flag,setFlag] = useState(false)
  const [dataOrder, setDataOrder] = useState({
    checkInDate: "",
    checkOutDate: "",
    total: 0,
  });

  const router = useRouter();

  const detailRoom = rooms.find((room) => room.id === params.id);
  const detailHotel = hotels.find((hotel) => hotel.id === detailRoom?.hotel_id);

  const searchParams = useSearchParams();
  const dateCheckIn = searchParams.get("dateCheckIn");
  const dateCheckOut = searchParams.get("dateCheckOut");

  const dataInSearch = {
    checkIn: dateCheckIn || "",
    checkOut: dateCheckOut || "",
  };

  useEffect(() => {
    //check in the first time the date is empty ?if it's none empty we get the date from params to fill the bill : if it's empty we get curently date for data bill
    dataInSearch.checkIn !== ""
      ? setDataInBill({
          checkIn: String(dateCheckIn),
          checkOut: String(dateCheckOut),
        })
      : setDataInBill({
          checkIn: String(dayjs().format("MM-DD-YYYY")),
          checkOut: String(dayjs().format("MM-DD-YYYY")),
        });
    handleCountDays(dataInSearch.checkIn, dataInSearch.checkOut);
  }, []);

  useEffect(() => {
    if (dataInBill.checkIn !== "" && dataInBill.checkOut !== "") {
      handleCountDays(dataInBill.checkIn, dataInBill.checkOut);
    }
  }, [count, reload]);

  useEffect(() => {
    handleCountDays(dataInBill.checkIn, dataInBill.checkOut);
  }, [dataInBill]);

  const handleCountDays = (dateCheckIn: string, dateCheckOut: string) => {
    const startDay = new Date(dateCheckIn).getTime();
    const endDay = new Date(dateCheckOut).getTime();
    const result = Math.floor((endDay - startDay) / (1000 * 60 * 60 * 24)) + 1;
    setCount(result);
  };

  // const handleClick = () => {
  //   detailRoom && setDataOrder({checkInDate:dataInBill.checkIn,checkOutDate:dataInBill.checkOut,total:detailRoom?.price * count})
  // }

  const onChangeDateCheckIn = (e: any) => {
    setDataInBill({ ...dataInBill, checkIn: e });
    setReload(!reload);
  };
  const onChangeDateCheckOut = (e: any) => {
    setDataInBill({ ...dataInBill, checkOut: e });
    setReload(!reload);
  };

  const ValidateCheckIn = (value: any) => {
    return value && value < dayjs().endOf("day");
  };

  const ValidateCheckOut = (value: any) => {
    return (
      dayjs(value).isBefore(dayjs()) ||
      dayjs(value).isBefore(`${dataInBill.checkIn}`)
    );
  };

  // set default value for datePicker in detail products
  const defaultValueCheckin =
    dataInSearch.checkIn === "" ? dayjs() : dayjs(`${dataInSearch.checkIn}`);
  const defaultValueCheckOut =
    dataInSearch.checkOut === "" ? dayjs() : dayjs(`${dataInSearch.checkOut}`);

  const handleOrder = () => {
    if(detailRoom){
    const dataBooking = {
      id: uuid(),
      id_room:detailRoom.id,
      date_checkIn:dataInBill.checkIn,
      date_checkOut:dataInBill.checkOut,
      total_price:detailRoom.price * count,
      status:"Confirmed"
    }
    bookingStore.addBooking(dataBooking)
    router.push(`/received/${dataBooking.id}`);
    }
  };
  return (
    <div className="container flex flex-col h-full justify-center items-center lg:py-[30px]">
      <div className="flex flex-col h-1/2 justify-center items-center lg:py-[20px">
        <h1 className="text-2xl md:text-4xl font-bold mb-10">
          {detailHotel?.name}
        </h1>
        <p className="text-center md:max-w-1/3 break-words">
          The Mountain Room is available with either double or single beds.
          Designed in an open-concept living area, it comes with oversized
          windows and lots of in-room facilities.
        </p>
      </div>
      <hr className="container my-10" />
      <div className="container relative h-[400px] bg-slate-100 flex justify-center items-center">
        <Image
          fill
          className="object-cover object-center"
          alt="pic"
          src={
            detailRoom
              ? `${detailRoom?.image_url}`
              : "https://fl-1.cdn.flockler.com/embed/no-image.svg"
          }
        />
      </div>
      <hr className="container my-10" />
      <div className="container flex flex-col md:flex-row ">
        <div className="flex-[2]">
          <p>{detailHotel?.description}</p>
          {/**Detail */}
          <div className="flex-col lg:flex-row flex container min-h-[300px] border-[1px] p-5 my-10 lg:justify-between">
            <h2 className="flex-[1] text-center text-2xl font-bold">Details</h2>
            <div className="flex-[3] h-1/3 border-t-[1px] lg:h-full lg:px-10 lg:border-l-[1px] lg:border-t-0">
              <ul>
                <li className="flex my-5 break-words">
                  <span className="text-[#767b80] w-1/4">Guest:</span>
                  <span className="w-3/4">{detailRoom?.guest}</span>
                </li>
                <li className="flex my-5 break-words">
                  <span className="text-[#767b80] w-1/4">Size:</span>
                  <span className="w-3/4"> {detailRoom?.size}</span>
                </li>
                <li className="flex my-5 break-words">
                  <span className="text-[#767b80] w-1/4">Location:</span>
                  <span className="w-3/4">{detailHotel?.city}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Bill */}
        <div className="flex flex-1 justify-center container min-h-[700px] lg:ml-10">
          <div className="flex flex-1 flex-col min-h-[300px] max-h-[600px] border-[1px] p-5">
            <div className="flex flex-col justify-center h-1/4">
              <p className="text-xl">
                <span className="text-2xl">
                  <strong>€{detailRoom?.price}</strong>
                </span>{" "}
                per Day
              </p>
            </div>
            <hr />
            <div className="h-3/4">
              <div className="flex flex-col my-5 ">
                <p className="text-sm font-semibold">Check-in Date*</p>
                {
                  <DatePicker
                    disabledDate={ValidateCheckIn}
                    defaultValue={defaultValueCheckin}
                    size="large"
                    format="MM-DD-YYYY"
                    onChange={(obj, value) => onChangeDateCheckIn(value)}
                  />
                }
              </div>
              <div className="flex flex-col my-5 ">
                <p className="text-sm font-semibold">Check-out Date*</p>
                {
                  <DatePicker
                    disabledDate={ValidateCheckOut}
                    defaultValue={defaultValueCheckOut}
                    size="large"
                    format="MM-DD-YYYY"
                    onChange={(obj, value) => onChangeDateCheckOut(value)}
                  />
                }
              </div>
              <div className="my-5 break-word">
                {/* <p className="text-red-500">message error</p> */}
              </div>
              <p className="text-xl my-5">
                <span className="text-2xl">
                  <strong>
                    €
                    {`${
                      dataInBill.checkIn !== ""
                        ? detailRoom && detailRoom?.price * count
                        : detailRoom?.price
                    }`}
                  </strong>
                </span>{" "}
                for {dataInBill.checkIn !== "" ? count : 1} days
              </p>
              <button
                className="w-[150px] h-[50px] bg-slate-200"
                onClick={handleOrder}
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailRoom;
