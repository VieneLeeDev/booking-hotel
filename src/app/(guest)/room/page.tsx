import RoomWrapper from "@/app/components/ui/RoomWrapper/page";

const Room = () => {
  return (
    <div className="flex flex-col items-center mt-10 flex-1">
      <h2 className="text-2xl">List of the Rooms</h2>
      <RoomWrapper />
      <RoomWrapper />
      <RoomWrapper />
    </div>
  );
};
export default Room;
