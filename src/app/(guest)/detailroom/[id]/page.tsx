"use client";
import Button from "@/app/components/ui/Button/Button";
import React, { useEffect, useState } from "react";
import hotels from "../../../api/hotels/hotels.json"
import rooms from "../../../api/rooms/rooms.json"
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const DetailRoom = ({ params }: { params: { id: string } }) => {
  const [count,setCount] = useState(1)
  const [reload, setReload] = useState(false)
  const [dataInBill, setDataInBill] = useState({
    checkIn: "",
    checkOut:"",
  })

  const detailRoom= rooms.find((room) => room.id_room === params.id)
  const detailHotel = hotels.find((hotel) => hotel.id_hotel === detailRoom?.id_hotel)

  const searchParams = useSearchParams();
  const dateCheckIn = searchParams.get('dateCheckIn') 
  const dateCheckOut = searchParams.get('dateCheckOut') 

  useEffect(() =>{
    detailRoom && setDataInBill({...dataInBill,checkIn:String(dateCheckIn),checkOut:String(dateCheckOut)})
    console.log(dataInBill)
  },[])

  useEffect(() => {
    handleCountDays(dataInBill.checkIn,dataInBill.checkOut)
    // if(detailRoom){
    //   const totalPrice = detailRoom.price * count
    //   setDataInBill({...dataInBill,count:count,total:totalPrice})
    // }
    // else{
    //   setDataInBill({...dataInBill,count:1,total:detailRoom?.price})
    // }
  },[count,reload])
  
  console.log(reload,dataInBill)

  const handleCountDays = (dateCheckIn: string,dateCheckOut:string) =>{
    const startDay = new Date(dateCheckIn).getTime()
    const endDay = new Date(dateCheckOut).getTime()
    const result = Math.floor((endDay - startDay)/ (1000 * 60 * 60 * 24)) + 1
    setCount(result)
  }

  const handleClick = () => {
    // (dateCheckIn && dateCheckOut) ? handleCountDays(dateCheckIn,dateCheckOut) : alert("pick the date!")
  }

  const onChangeDateCheckIn = (e: any) => {
    setDataInBill({...dataInBill,checkIn:e.target.value})
    setReload(!reload)
  }
  const onChangeDateCheckOut = (e: any) => {
    setDataInBill({...dataInBill,checkOut:e.target.value})
    setReload(!reload)
  }

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
        <Image fill className="object-cover object-center" alt="pic" src={detailRoom ? `${detailRoom?.image_url}` :"https://fl-1.cdn.flockler.com/embed/no-image.svg"} />
      </div>
      <hr className="container my-10" />
      <div className="container flex flex-col md:flex-row ">
        <div className="flex-[2]">
          <p>
            {detailHotel?.description}
          </p>
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
          {/**Available */}
          <div className="flex-col lg:flex-row flex container min-h-[300px] border-[1px] p-5 my-10 lg:justify-between">
            <h2 className="flex-[1] text-center text-2xl font-bold">
              Availability
            </h2>
            <div className="h-1/3 flex-[3] border-t-[1px] lg:h-full lg:w-3/4 lg:px-10 lg:border-l-[1px] lg:border-t-0"></div>
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
                <input onChange={onChangeDateCheckIn} defaultValue={dataInBill.checkIn} type="date" className="border-[1px] h-[50px] my-2 px-2"></input>
              </div>
              <div className="flex flex-col my-5 ">
                <p className="text-sm font-semibold">Check-out Date*</p>
                <input onChange={onChangeDateCheckOut} defaultValue={dataInBill.checkOut} type="date" className="border-[1px] h-[50px] my-2 px-2"></input>
              </div>
              <div className="my-5 break-word">
                <p className="text-red-500">message error</p>
              </div>
              <p className="text-xl my-5">
                <span className="text-2xl">
                  <strong>€{`${detailRoom && detailRoom?.price * count}`}</strong>
                </span>{" "}
                for {count} days
              </p>
              <button className="w-[150px] h-[50px] bg-slate-200" onClick={handleClick}>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailRoom;
