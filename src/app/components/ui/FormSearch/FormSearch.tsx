import Button from "../Button/Button";

const FormSearch = () => {
  return (
    <div className="hidden lg:flex flex-col h-auto container mx-auto">
      <div className="">
        <h2 className="text-3xl text-white font-bold my-5">
          Book hotel quickly & safely
        </h2>
        <div className="h-[75px] ">
          <form className="flex  h-full">
            <div className="flex flex-col flex-1 h-full ">
              <label className=" h-1/3 text-white">check-in:...</label>
              <input className=" h-2/3 border-[2px] border-solid border-[#ffce00] focus:outline-none px-2 whitespace-nowrap text-ellipsis overflow-hidden"></input>
            </div>
            <div className="flex flex-col flex-1 h-full ">
              <label className=" h-1/3 text-white">check-out:...</label>
              <input className=" h-2/3 border-[2px] border-solid border-[#ffce00] focus:outline-none px-2 whitespace-nowrap text-ellipsis overflow-hidden border-l-0"></input>
            </div>
            <div className="flex flex-col flex-1 h-full ">
              <label className=" h-1/3 text-white">Guest:...</label>
              <input className=" h-2/3 border-[2px] border-solid border-[#ffce00] focus:outline-none px-2 whitespace-nowrap text-ellipsis overflow-hidden border-l-0"></input>
            </div>
            <div className="flex flex-col flex-1 h-full ">
              <label className=" h-1/3 text-white">Location:...</label>
              <input className=" h-2/3 border-[2px] border-solid border-[#ffce00] focus:outline-none px-2 whitespace-nowrap text-ellipsis overflow-hidden border-l-0"></input>
            </div>
            <div className="flex flex-col flex-1 h-full ">
              <label className=" h-1/3"></label>
              <Button></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormSearch;
