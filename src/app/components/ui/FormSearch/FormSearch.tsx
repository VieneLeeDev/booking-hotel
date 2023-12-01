"use client";
import { Hotel } from "@/app/constants/hotels";
import { Room } from "@/app/constants/rooms";
import { useEffect, useState } from "react";
import "react-datetime/css/react-datetime.css";
import hotels from "../../../api/hotels/hotels.json"
import rooms from "../../../api/rooms/rooms.json"
import { useRouter } from 'next/router'
interface FormSearchProps {
  dataRoom?: any[];
  startSearch?: any;
  dataHotel?: any[];
  setDateTime?: any; 
}
const FormSearch = ({ dataRoom, startSearch,dataHotel,setDateTime }: FormSearchProps) => {
  const [citySearch, setCitySearch] = useState<string[]>([])
  const [dateSearch,setDateSearch] = useState({
    dateCheckIn: "",
    dateCheckOut:""
  })
  const [dataFormSearch, setDataFormSearch] = useState({
    guest: "All",
    location: "All",
  });

  const handleChangeGuest = (e: any) => {
    setDataFormSearch({ ...dataFormSearch, guest: (e.target.value) });
  };
  const handleChangeLocation = (e: any) => {
    setDataFormSearch({ ...dataFormSearch, location: (e.target.value) });
  };
  const handleChangeDateCheckin = (e: any) =>{
    setDateSearch({...dateSearch,dateCheckIn:e.target.value})
  }  
  const handleChangeDateCheckOut = (e: any) =>{
    setDateSearch({...dateSearch,dateCheckOut:e.target.value})
  } 
  useEffect(() =>{
    const array = dataRoom?.filter((room: Room) => (dataFormSearch.guest === "All" ? true: room.guest > Number(dataFormSearch.guest) ||room.guest === Number(dataFormSearch.guest) ) && (dataFormSearch.location === "All" ? true : dataHotel?.find((hotel: any) => hotel.id_hotel === room.id_hotel).city === dataFormSearch.location));
    startSearch(array);

    const arrayCity = hotels.map((hotel) => hotel.city)
    const unitArray = arrayCity.filter((city,index) => arrayCity.indexOf(city) === index)
    setCitySearch(unitArray)
  },[dataFormSearch])

  useEffect(() => {
    setDateTime(dateSearch)
  },[dateSearch.dateCheckOut])

  return (
    <div className="hidden container xl:flex xl:mx-auto h-[75px]">
      <div className="w-1/4 h-full">
        <h3 className="text-black h-1/3 font-bold"> Check-in:...</h3>
        <div className="w-full h-2/3 ">
          <input
            className="w-full h-full p-2 bg-slate-200 outline-none"
            type="date"
            onChange={handleChangeDateCheckin}
          />
        </div>
      </div>
      <div className="w-1/4 h-full">
        <h3 className="text-black h-1/3 font-bold"> Check-out:...</h3>
        <div className="w-full h-2/3 ">
          <input
            className="w-full h-full p-2 bg-slate-200 outline-none"
            type="date"
            onChange={handleChangeDateCheckOut}
          />
        </div>
      </div>
      <div className="w-1/4 h-full">
        <h3 className="text-black h-1/3 font-bold"> Guest:...</h3>
        <select
          className="w-full h-2/3 outline-none p-2"
          onChange={handleChangeGuest}
        >
          <option value={"All"}>All</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </div>
      <div className="w-1/4 h-full">
        <h3 className="text-black h-1/3 font-bold"> Location:...</h3>
        <select
          className="w-full h-2/3 outline-none p-2"
          onChange={handleChangeLocation}
        >
          <option value={"All"}>All</option>
          {citySearch.map((hotel,index) => <option key={index} value={hotel}>{hotel}</option>)}
          {/* <option value={"Ha Noi"}>Ha Noi</option>
          <option value={"Da Nang"}>Da Nang</option>
          <option value={"Ho Chi Minh"}>Ho Chi Minh</option>
          <option value={"Gia Lai"}>Gia Lai</option> */}
        </select>
      </div>
    </div>
  );
};
export default FormSearch;
