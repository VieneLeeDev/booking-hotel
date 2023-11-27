import Button from "../Button/Button";

const FormSearch = () => {
  return (
    <div className="hidden container xl:flex xl:flex-col xl:mx-auto">
      <h2 className="text-3xl text-white font-bold my-5">
        Book hotel quickly & safely
      </h2>
      <div className="h-[75px] flex w-full">
        <div className="flex flex-col flex-1 h-full">
          <label htmlFor="checkin" className="flex-1 text-white">
            Check-in...
          </label>
          <input
            id="checkin"
            type="text"
            className="flex-[2] focus:outline-none border-[#ffce00] border-[2px] px-2"
          ></input>
        </div>
        <div className="flex flex-col flex-1 h-full ">
          <label htmlFor="checkin" className="flex-1 text-white">
            Check-in...
          </label>
          <input
            id="checkin"
            type="text"
            className="flex-[2] focus:outline-none border-[#ffce00] border-[2px] px-2"
          ></input>
        </div>
        <div className="flex flex-col flex-1 h-full ">
          <label htmlFor="checkin" className="flex-1 text-white">
            Guest:...
          </label>
          <input
            id="checkin"
            type="text"
            className="flex-[2] focus:outline-none border-[#ffce00] border-[2px] px-2"
          ></input>
        </div>
        <div className="flex flex-col flex-1 h-full ">
          <label htmlFor="checkin" className="flex-1 text-white">
            Location:...
          </label>
          <input
            id="checkin"
            type="text"
            className="flex-[2] focus:outline-none border-[#ffce00] border-[2px] px-2"
          ></input>
        </div>
        <div className="flex flex-col flex-1 h-full  ">
          <div className="h-[25px] full-full"></div>
          <div className="flex-1">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormSearch;
