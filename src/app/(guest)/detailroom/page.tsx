import React from "react";

const DetailRoom = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="flex flex-col w-full md:w-1/2 h-1/2 justify-center items-center">
        <h1 className="text-4xl font-bold mb-10">Standard Single Room</h1>
        <p className="text-center md:max-w-1/3 break-words">
          The Mountain Room is available with either double or single beds.
          Designed in an open-concept living area, it comes with oversized
          windows and lots of in-room facilities.
        </p>
      </div>
      <hr className="w-full my-10" />
      <div className="w-full h-[400px] bg-slate-100 flex justify-center items-center">
        <h2 className="text-4xl">Slide Room Area</h2>
      </div>
      <hr className="w-full my-10" />
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex-[2]">
          <p>
            The Mountain Room is a newly renovated studio apartment with
            breathtaking city views. Our apartments for rent in the sky define
            the new benchmark of NYC luxury: expansive, exclusive and
            extraordinary from every vantage point. Dramatic window views with
            sweeping views of the city, Empire State Building, rivers, huge
            ceilings, custom solar and blackout shades, warm hardwood oak
            floors, unparalleled lifestyle concierge. You can rent the entire
            apartment or any unit like a studio, multiple-bedroom apartments –
            any unit you can find on our website. Reach out and a member of our
            team will help you get started.
          </p>
          <div className="w-full h-[300px] bg-slate-500 p-5 my-10">
            Detail room
          </div>
          <div className="w-full h-[300px] bg-slate-500 p-5 my-10">
            Caledar Booking
          </div>
        </div>
        <div className="flex-1 px-2">
          <div className="w-full h-1/2 bg-slate-500 text-center">
            Total Bill
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailRoom;
