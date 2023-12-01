"use client";
import Cart from "@/app/components/ui/Cart/Cart";
import FormSearch from "@/app/components/ui/FormSearch/FormSearch";
import LinkButton from "@/app/components/ui/LinkButton/LinkButton";
import { useEffect, useState } from "react";
import rooms from "../../api/rooms/rooms.json";
import hotels from "../../api/hotels/hotels.json";
import Link from "next/link";
import { stringify } from "querystring";
const Home = () => {
  const [hotelList, setHotelsList] = useState(hotels);
  const [dataFilter, setDataFilter] = useState(rooms);
  const [date,setDate] = useState({
    dateCheckIn: "",
    dateCheckOut:""
  })

  //func handle fetch data and loading component
  // const getHotels = async (): Promise<Hotel[]> => {
  //   const data = await fetch(
  //     "https://62ab5d42a62365888bdad034.mockapi.io/hotels"
  //   );
  //   const hotels = await data.json();
  //   setLoading(false);
  //   return hotels;
  // };

  // useEffect(() => {
  //   const getAllsHotels = async () => {
  //     const hotels = await getHotels();
  //     setHotelList([...hotels]);
  //   };
  //   getAllsHotels();
  // }, []);

 const handleSearch = (dataSearch: any) => {
  setDataFilter([...dataSearch])
 }
 const handleSetDateTime = (dataDateTime: any) => {
  setDate({...dataDateTime})
 }
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex items-center h-[500px] bg-center bg-cover bg-[url('https://themes.getmotopress.com/booklium-default/wp-content/uploads/sites/29/2019/08/Slide-2.jpg')]">
        <FormSearch setDateTime={handleSetDateTime} dataRoom={rooms} startSearch={handleSearch} dataHotel={hotelList}/>
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
};
export default Home;
