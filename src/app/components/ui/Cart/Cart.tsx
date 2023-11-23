import Image from "next/image";

const Cart = () => {
  return (
    <div className="flex flex-col container h-[400px]">
      <div className=" h-full border-[1px] overflow-hidden">
        <div className="flex relative h-3/4 bg-slate-600">
          <Image
            width={50}
            height={50}
            className="object-cover"
            src="https://themes.getmotopress.com/booklium-default/wp-content/uploads/sites/29/2019/08/Seaside-Villa-Tuscany-Maremma-9-892x892.jpg"
            alt="pic"
            layout="responsive"
          />
          <div className="absolute w-[100px] h-[25px] bg-black bottom-2 left-2 text-center text-white rounded-md">
            <span>Location</span>
          </div>
        </div>
        <div className="container h-1/4 text-left p-2">
          <h2 className="text-lg font-bold text-ellipsis whitespace-nowrap overflow-hidden">
            Name room/vila
          </h2>
          <span>Rate: ***</span>
          <p className="text-[#3b4249]">
            <span>
              <strong>€700</strong>{" "}
            </span>
            per night
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cart;
