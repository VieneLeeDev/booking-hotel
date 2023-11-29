"use client";
import Button from "@/app/components/ui/Button/Button";
import React from "react";
import hotels from "../../../api/hotels/hotels.json"
import rooms from "../../../api/rooms/rooms.json"
import Image from "next/image";


const DetailRoom = ({ params }: { params: { id: string } }) => {
  const detailRoom= rooms.find((room) => room.id_room === params.id)
  const detailHotel = hotels.find((hotel) => hotel.id_hotel === detailRoom?.id_hotel)
  console.log(detailHotel,detailRoom)
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
            {/* The Mountain Room is a newly renovated studio apartment with
            breathtaking city views. Our apartments for rent in the sky define
            the new benchmark of NYC luxury: expansive, exclusive and
            extraordinary from every vantage point. Dramatic window views with
            sweeping views of the city, Empire State Building, rivers, huge
            ceilings, custom solar and blackout shades, warm hardwood oak
            floors, unparalleled lifestyle concierge. You can rent the entire
            apartment or any unit like a studio, multiple-bedroom apartments –
            any unit you can find on our website. Reach out and a member of our
            team will help you get started. */}
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
                  <strong>€{detailRoom?.price} </strong>
                </span>{" "}
                per night
              </p>
            </div>
            <hr />
            <div className="h-3/4">
              <div className="flex flex-col my-5 ">
                <p className="text-sm font-semibold">Check-in Date*</p>
                <input className="border-[1px] h-[50px] my-2"></input>
              </div>
              <div className="flex flex-col my-5 ">
                <p className="text-sm font-semibold">Check-out Date*</p>
                <input className="border-[1px] h-[50px] my-2"></input>
              </div>
              <div className="my-5 break-word">
                <p>message</p>
              </div>
              <p className="text-xl my-5">
                <span className="text-2xl">
                  <strong>€{detailRoom?.price}</strong>
                </span>{" "}
                for 1 nights
              </p>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailRoom;
