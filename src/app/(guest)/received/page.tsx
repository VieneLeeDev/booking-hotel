const Received = () => {
  return (
    <div className="flex flex-col container">
      <h1 className="text-center text-4xl font-bold h-[100px] my-10">
        Reservation Received
      </h1>
      <hr className="my-[50px]"></hr>
      <div className="container break-words text-[#3b4249] text-lg font-semibold my-5">We are pleased to inform you that your reservation request has been received.</div>
      {/**Booking details */}
      <div className="container h-auto border-[1px] p-10 my-[50px] shadow-md">
        <h3 className="text-xl font-bold ">Booking Details</h3>
        <div className="flex container h-auto ">
          <ul className="flex container my-[20px] flex-col md:flex-row ">
            <li className="flex flex-1 flex-col mb-5 mr-10  md:border-r-[1px] md:border-dashed md:border-[#d3ced2]">
              <span className="text-lg text-[#3b4249]">Booking:</span>
              <span className="font-bold text-[#3b4249]">2488</span>
            </li>
            <li className="flex flex-[2] flex-col mb-5 mr-10  md:border-r-[1px] md:border-dashed md:border-[#d3ced2] break-words max-w-[350px]">
              <span className="text-lg text-[#3b4249]">Check-in:</span>
              <span className="font-bold text-[#3b4249]">
                December 18, 2023
              </span>
            </li>
            <li className="flex flex-[2] flex-col mb-5 mr-10  md:border-r-[1px] md:border-dashed md:border-[#d3ced2] break-words max-w-[350px]">
              <span className="text-lg text-[#3b4249]">Check-out:</span>
              <span className="font-bold text-[#3b4249]">
                December 20, 2023
              </span>
            </li>
            <li className="flex flex-[2] flex-col mb-5 mr-10  md:border-r-[1px] md:border-dashed md:border-[#d3ced2]">
              <span className="text-lg text-[#3b4249]">Total:</span>
              <span className="font-bold text-[#3b4249]">€1,180</span>
            </li>
            <li className="flex flex-1 flex-col">
              <span className="text-lg text-[#3b4249]">Status:</span>
              <span className="font-bold text-[#3b4249]">Confirmed</span>
            </li>
          </ul>
        </div>
      </div>
      {/**payment details */}
      <div className="container h-auto border-[1px] p-10 my-[50px] shadow-md">
        <h3 className="text-xl font-bold ">Payment Details</h3>
        <div className="flex container">
          <ul className="flex container my-[20px] flex-col md:flex-row ">
            <li className="flex flex-1 flex-col mb-5 mr-10  md:border-r-[1px] md:border-dashed md:border-[#d3ced2]">
              <span className="text-lg text-[#3b4249]">Payment:</span>
              <span className="font-bold text-[#3b4249]">2488</span>
            </li>
            <li className="flex flex-[2] flex-col mb-5 mr-10  md:border-r-[1px] md:border-dashed md:border-[#d3ced2] break-words max-w-[350px]">
              <span className="text-lg text-[#3b4249]">Date:</span>
              <span className="font-bold text-[#3b4249]">
                December 20, 2023
              </span>
            </li>
            <li className="flex flex-[2] flex-col mb-5 mr-10  md:border-r-[1px] md:border-dashed md:border-[#d3ced2] break-words max-w-[350px]">
              <span className="text-lg text-[#3b4249]">Payment Method:</span>
              <span className="font-bold text-[#3b4249]">Pay on Arrival</span>
            </li>
            <li className="flex flex-[2] flex-col mb-5 mr-10  md:border-r-[1px] md:border-dashed md:border-[#d3ced2]">
              <span className="text-lg text-[#3b4249]">Total:</span>
              <span className="font-bold text-[#3b4249]">€1,180</span>
            </li>
            <li className="flex flex-1 flex-col">
              <span className="text-lg text-[#3b4249]">Status:</span>
              <span className="font-bold text-[#3b4249]">On Hold</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Received;
