import Image from "next/image";
interface CartProps {
  name: string;
  price: string;
  rate: string;
  description: string;
  location: string;
  img:string
}
const Cart = (props: CartProps) => {
  return (
    <div className="container  border-[1px] overflow-hidden">
      <div className="flex relative bg-slate-600 overflow-hidden aspect-square">
        <Image
          fill
          className="object-cover"
          src={`${props.img}`}
          alt="pic"
        />
        <div className="absolute w-[150px] h-[25px] bg-black bottom-2 left-2 text-center text-white rounded-md">
          <span className="text-sm">{`${props.location}`}</span>
        </div>
      </div>
      <div className="container h-1/4 text-left p-2">
        <h2 className="text-lg font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          {props.name}
        </h2>
        <span>Rate: {props.rate}</span>
        <p className="text-[#3b4249]">
          <span>
            <strong>€{props.price}</strong>{" "}
          </span>
          per night
        </p>
      </div>
    </div>
  );
};
export default Cart;
