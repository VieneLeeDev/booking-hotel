"use client";
import Cart from "@/app/components/ui/Cart/Cart";
import FormSearch from "@/app/components/ui/FormSearch/FormSearch";
import LinkButton from "@/app/components/ui/LinkButton/LinkButton";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Hotel {
  name: string;
  price: string;
  rate: string;
  description: string;
  location: string;
}

const getHotels = async (): Promise<Hotel[]> => {
  const data = await fetch(
    "https://62ab5d42a62365888bdad034.mockapi.io/hotels"
  );
  const hotels = await data.json();

  return hotels;
};

const Home = () => {
  const [hotelList, setHotelList] = useState<Hotel[]>([]);
  
  useEffect(() => {
    const getAllsHotels = async () => {
      const hotels = await getHotels();
      setHotelList([...hotels]);
    };
    getAllsHotels();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex items-center h-[500px] bg-center bg-cover bg-[url('https://themes.getmotopress.com/booklium-default/wp-content/uploads/sites/29/2019/08/Slide-2.jpg')]">
        <FormSearch />
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
            <div className="w-[150px]">
              <LinkButton href="/room">View All</LinkButton>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center">
            {hotelList.map((product: any) => (
              <Cart
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                rate={product.rate}
                location={product.location}
                img={product.img}
              />
            ))}
          </div>
        </div>
        {/**Service */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 place-items-center">
          {/** Tag service */}
          <div className="flex justify-center items-center md:my-5 lg:my-0 h-[300px]">
            <div className="p-5 flex flex-col justify-center items-center h-full border-[1px]">
              <div className="relative h-1/3 aspect-square">
                <Image
                  fill
                  className="object-cover object-center "
                  src="https://themes.getmotopress.com/booklium-default/wp-content/uploads/sites/29/2019/09/list-your-property1.png"
                  alt="pic"
                />
              </div>
              <div className="h-2/3 text-center text-[#3b4249] my-5">
                <h2 className="text-lg font-bold my-2">
                  High-quality Property
                </h2>
                <p>
                  Every property we have to propose you corresponds to the all
                  high standards of comfort and pleasant rest.
                </p>
              </div>
            </div>
          </div>
          {/** Tag service */}
          <div className="flex justify-center items-center md:my-5 lg:my-0 h-[300px]">
            <div className="p-5 flex flex-col justify-center items-center h-full border-[1px]">
              <div className="relative h-1/3 aspect-square">
                <Image
                  fill
                  className="object-cover object-center "
                  src="https://themes.getmotopress.com/booklium-default/wp-content/uploads/sites/29/2019/09/list-your-property1.png"
                  alt="pic"
                />
              </div>
              <div className="h-2/3 text-center text-[#3b4249] my-5">
                <h2 className="text-lg font-bold my-2">
                  High-quality Property
                </h2>
                <p>
                  Every property we have to propose you corresponds to the all
                  high standards of comfort and pleasant rest.
                </p>
              </div>
            </div>
          </div>
          {/** Tag service */}
          <div className="flex justify-center items-center md:my-5 lg:my-0 h-[300px]">
            <div className="p-5 flex flex-col justify-center items-center h-full border-[1px]">
              <div className="relative h-1/3 aspect-square">
                <Image
                  fill
                  className="object-cover object-center "
                  src="https://themes.getmotopress.com/booklium-default/wp-content/uploads/sites/29/2019/09/list-your-property1.png"
                  alt="pic"
                />
              </div>
              <div className="h-2/3 text-center text-[#3b4249] my-5">
                <h2 className="text-lg font-bold my-2">
                  High-quality Property
                </h2>
                <p>
                  Every property we have to propose you corresponds to the all
                  high standards of comfort and pleasant rest.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/** blog */}
        <div className="container my-20">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="text-left text-[#3b4249]">
              <h2 className="text-2xl font-bold">Blog</h2>
              <p>
                In our blog section we list special tours which you can
                experience together.
              </p>
            </div>
            <div className="w-2/3 md:w-1/3 lg:1/4">
              <LinkButton href="/room">
                View Articles And Introductions
              </LinkButton>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
            {/**Tag blog */}
            <div className="container h-[300px] border-[1px] shadow-lg rounded-lg overflow-hidden my-5">
              <div className="h-2/3 bg-slate-600 text-white">
                <Image
                  width={30}
                  height={30}
                  className="max-w-full max-h-full object-cover"
                  src="https://themes.getmotopress.com/booklium-default/wp-content/uploads/sites/29/2019/08/Seaside-Villa-Tuscany-Maremma-9-892x892.jpg"
                  alt="pic"
                  layout="responsive"
                />
              </div>
              <div className="h-1/3 p-5 text-left text-[#3b4249]">
                <h2 className="text-lg font-bold overflow-hidden whitespace-nowrap text-ellipsis">
                  Discover the Scuba Diving
                </h2>
                <p>
                  August 21, 2019 &frasl;
                  <span className="text-[#13b0bb] mx-2">Activities</span>{" "}
                </p>
              </div>
            </div>
            {/**Tag blog */}
            <div className="container h-[300px] border-[1px] shadow-lg rounded-lg overflow-hidden my-5">
              <div className="h-2/3 bg-slate-600 text-white">
                <Image
                  width={30}
                  height={30}
                  className="max-w-full max-h-full object-cover"
                  src="https://themes.getmotopress.com/booklium-default/wp-content/uploads/sites/29/2019/08/Seaside-Villa-Tuscany-Maremma-9-892x892.jpg"
                  alt="pic"
                  layout="responsive"
                />
              </div>
              <div className="h-1/3 p-5 text-left text-[#3b4249]">
                <h2 className="text-lg font-bold overflow-hidden whitespace-nowrap text-ellipsis">
                  Discover the Scuba Diving
                </h2>
                <p>
                  August 21, 2019 &frasl;
                  <span className="text-[#13b0bb] mx-2">Activities</span>{" "}
                </p>
              </div>
            </div>
            {/**Tag blog */}
            <div className="container h-[300px] border-[1px] shadow-lg rounded-lg overflow-hidden my-5">
              <div className="h-2/3 bg-slate-600 text-white">
                <Image
                  width={30}
                  height={30}
                  className="max-w-full max-h-full object-cover"
                  src="https://themes.getmotopress.com/booklium-default/wp-content/uploads/sites/29/2019/08/Seaside-Villa-Tuscany-Maremma-9-892x892.jpg"
                  alt="pic"
                  layout="responsive"
                />
              </div>
              <div className="h-1/3 p-5 text-left text-[#3b4249]">
                <h2 className="text-lg font-bold overflow-hidden whitespace-nowrap text-ellipsis">
                  Discover the Scuba Diving
                </h2>
                <p>
                  August 21, 2019 &frasl;
                  <span className="text-[#13b0bb] mx-2">Activities</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
