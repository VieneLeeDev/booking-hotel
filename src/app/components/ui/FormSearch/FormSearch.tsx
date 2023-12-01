"use client";
import { Hotel } from "@/app/constants/hotels";
import { Room } from "@/app/constants/rooms";
import { useEffect, useState } from "react";
import "react-datetime/css/react-datetime.css";
import hotels from "../../../api/hotels/hotels.json"
import rooms from "../../../api/rooms/rooms.json"
import { DatePicker } from "antd";
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs'; 
import type { RangePickerProps } from 'antd/es/date-picker';
interface FormSearchProps {
  dataRoom?: any[];
  startSearch?: any;
  dataHotel?: any[];
  setDateTime?: any; 
}
type RangeValue = [Dayjs | null, Dayjs | null] | null;
const { RangePicker } = DatePicker;
 
const FormSearch = ({ dataRoom, startSearch,dataHotel,setDateTime }: FormSearchProps) => {
  const [dates, setDates] = useState<RangeValue>(null);
  const [value, setValue] = useState<RangeValue>(null);
  const [citySearch, setCitySearch] = useState<string[]>([])
  const [guestSearch, setGuestSearch]=useState<number[]>([])
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
  const handleChangeDate = (obj: any,value:any) =>{
    // setDateSearch({dateCheckIn:e.target.value,dateCheckOut:e})
    setDateSearch({dateCheckIn:value[0],dateCheckOut:value[1]})
  }  
  
  useEffect(() => {
    //filter unit city for form search
    const arrayCity = hotels.map((hotel) => hotel.city)
    const unitArray = arrayCity.filter((city,index) => arrayCity.indexOf(city) === index)
    setCitySearch(unitArray)
    //filter quantity guest for form search
    const arrayGuest = rooms.map((rooms) => rooms.guest)
    const unitGuest = arrayGuest.filter((guest,index) => arrayGuest.indexOf(guest) === index)
    for(let i = 0; i < unitGuest.length; i++){
      for(let j = i + 1; j < unitGuest.length;j++){
        if (unitGuest[j] <= unitGuest[i]) {
          let remain = unitGuest[i];
          unitGuest[i] = unitGuest[j]
          unitGuest[j] = remain
        }
      }
    }
    setGuestSearch(unitGuest)
  },[])
  
  useEffect(() =>{
    const array = dataRoom?.filter((room: Room) => (dataFormSearch.guest === "All" ? true: room.guest > Number(dataFormSearch.guest) ||room.guest === Number(dataFormSearch.guest) ) && (dataFormSearch.location === "All" ? true : dataHotel?.find((hotel: any) => hotel.id_hotel === room.id_hotel).city === dataFormSearch.location));
    startSearch(array);
  },[dataFormSearch])

  useEffect(() => {
    setDateTime(dateSearch)
  },[dateSearch.dateCheckOut])
  
  //antd setting

  const range = (start: number, end: number) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};
  
  const onOpenChange = (open: boolean) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };

  return (
    <div className="hidden container xl:flex xl:mx-auto h-[75px]">
      <div className="w-1/2 h-full">
        <h3 className="text-black h-1/3 font-bold"> Check-in & Check-out</h3>
        <div className="w-full h-2/3 ">
    <RangePicker
      className="w-full h-full rounded-none "
      disabledDate={disabledDate}
      onChange={(obj,value) => handleChangeDate(obj,value)}
      format="DD-MM-YYYY"
    />
        </div>
      </div>
      <div className="flex overflow-hidden w-1/2 h-full">
      <div className="w-1/2 h-full">
        <h3 className="text-black h-1/3 font-bold px-3"> Guest</h3>
        <div className="w-full h-2/3 px-3 bg-white ">
        <select
          className="w-full h-full outline-none bg-white"
          onChange={handleChangeGuest}
        >
          <option value={"All"}>All</option>
          {guestSearch.map((guest,index) => <option key={index} value={guest}>{guest}</option>)}
        </select>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <h3 className="text-black h-1/3 font-bold px-3"> Location</h3>
        <div className="w-full h-2/3 px-3 bg-white ">
        <select
          className="w-full h-full outline-none bg-white"
          onChange={handleChangeLocation}
        >
          <option value={"All"}>All</option>
          {citySearch.map((hotel,index) => <option key={index} value={hotel}>{hotel}</option>)}
        </select>
        </div>
      </div>
      </div>

    </div>
  );
};
export default FormSearch;
