import LinkButton from "../LinkButton/page";

const RoomWrapper = () => {
  return (
    <div className="flex-col md:flex-row flex flex-1 w-full md:max-h-[300px] p-5 shadow-lg border-[1px] rounded-lg justify-between my-5">
      <div className="flex-[2] bg-slate-400 text-center overflow-hidden">
        {" "}
        <img
          className="w-full max-h-full object-cover"
          src="https://themes.getmotopress.com/booklium-bed-and-breakfast/wp-content/uploads/sites/33/2019/09/The-meadow-room-3.jpg"
          alt="pic"
        ></img>
      </div>
      <div className="flex md:flex-[2] py-5 md:py-0 md:px-5 flex-col">
        <h2 className="flex-1 text-xl font-bold">Name of The Room</h2>
        {/** short atribute */}
        <div className="flex-1">Rate: ***</div>
        {/** description */}
        <p className="flex-[2] text-[#3b4249]">
          Let yourself fully relax in our luxurious favorable accommodations
          with lots of facilities and high-level service. We do our best to make
          you always content, smiling and satisfied.
        </p>
        {/** sumary*/}
        <div className="flex-[2] text-[#3b4249] py-4">
          2 single beds, 2 twin beds
        </div>
      </div>
      <div className="flex flex-col flex-[1]">
        <p className="flex-1 flex-col">
          <span className="block"> Price start at:</span>
          <span>
            <strong>$60</strong>/per night
          </span>
        </p>
        <LinkButton />
      </div>
    </div>
  );
};
export default RoomWrapper;
