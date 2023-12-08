"use client";
import Cart from "@/app/components/ui/Cart/Cart";
import FormSearch from "@/app/components/ui/FormSearch/FormSearch";
import { useEffect, useState } from "react";
import Link from "next/link";
import { observer } from 'mobx-react-lite';
import { RoomStore} from "@/app/stores/room/RoomStore";
import { toJS } from "mobx";
import { HotelStore } from "@/app/stores/hotel/HotelStore";
const Home = observer(() => {
  const [hotelList, setHotelsList] = useState<any[]>([]);
  const [dataFilter, setDataFilter] = useState<any[]>([]);
  const [date,setDate] = useState({
    dateCheckIn: "",
    dateCheckOut:""
  })

  const [inputText,setInputText] = useState("")

  const roomStore = RoomStore.create();
  const hotelStore = HotelStore.create();

  useEffect(() =>{
   roomStore.getAllRooms()
   hotelStore.getAllHotel()

   const fetchDataRoom = roomStore.rooms
   const fetchDataHotel = hotelStore.hotels

   setDataFilter(fetchDataRoom)
   setHotelsList(fetchDataHotel)
  },[])


 const handleSearch = (dataSearch: any) => {
  setDataFilter([...dataSearch])
 }
 const handleSetDateTime = (dataDateTime: any) => {
  setDate({...dataDateTime})
 }

 const handleChangle = (text:string) => {
    setInputText(text)
 }
 const handleRemoveRoom = () => {
  roomStore.removeRoom(inputText)
  const newData = roomStore.rooms
  setDataFilter(newData)
 }
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex items-center h-[500px] bg-center bg-cover bg-[url('https://themes.getmotopress.com/booklium-default/wp-content/uploads/sites/29/2019/08/Slide-2.jpg')]">
        <FormSearch setDateTime={handleSetDateTime} dataRoom={dataFilter} startSearch={handleSearch} dataHotel={hotelList}/>
      </div>
      <div className="container mx-auto px-5 md:px-0">
        {/**products */}
        <div className="my-20">
          <div className="flex flex-col md:flex-row justify-between my-10">
            <div className="text-left text-[#3b4249]">
              <h2 className="text-2xl font-bold">Home around the world</h2>
              <p>
                Villas can be a perfect place for you to spend the most
                unforgettable vacation!
              </p>
            </div>
            <div className="flex w-[300px] bg-red-200">
              <input className="h-full w-2/3 outline-1" onChange={(e) => handleChangle(e.target.value)}/>
              <button onClick={handleRemoveRoom} className="h-full w-1/3 bg-slate-200">Remove</button>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center items-stretch">
            {/* {loading ? <Loading /> : null} */}
             {dataFilter.map((product: any) => (
              <Link 
              className="w-full h-full" key={product.id_room} 
              href={{
                pathname:`/detailroom/${product.id_room}`,
                query: {...date}
              }}>
              <Cart
                name={`${product.id_room} | ${product.guest} peoples | ${product.size} - ${hotelList.find((hotel) => hotel.id_hotel === product.id_hotel)?.name}`}
                description={product.description}
                price={product.price}
                city={`${hotelList.find((hotel) => hotel.id_hotel === product.id_hotel)?.city}`}
                img={product.image_url}
              /></Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
export default Home;
