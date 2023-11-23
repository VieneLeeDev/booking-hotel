import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiClose } from "react-icons/tfi";

const MobileHeader = ({ open, close }: any) => {

  const path = usePathname()
  return (
    <>
      <div className={`${open ? `block` : `hidden`} fixed bg-slate-200 inset-0 z-10 opacity-50 md:hidden `} onClick={close}></div>
      <div className={`${open ? `translate-x-0` : `-translate-x-full`} fixed z-20 flex flex-col md:hidden bg-slate-500 top-0 bottom-0 left-0 right-[30vw] items-end duration-700 p-5`}>
        <button className={`${open ? `rotate-180 ` : `rotate-360 `} hover:rotate-90 duration-700 w-[30px] h-[30px] text-white flex justify-end mb-2.5`} onClick={close}><TfiClose className="w-full h-full" /></button>
          <Link href={"/home"} className={`${path === "/home"?`bg-slate-200`: `bg-black text-white`} font-bold my-2.5 rounded-lg h-[45px] w-full flex items-center p-5`} >Home</Link>
          <Link href={"/room"} className={`${path === "/room"?`bg-slate-200`: `bg-black text-white`} font-bold my-2.5 rounded-lg h-[45px] w-full flex items-center p-5`} >Room</Link>
          <Link href={"/received"} className={`${path === "/received"?`bg-slate-200`: `bg-black text-white`} font-bold my-2.5 rounded-lg h-[45px] w-full flex items-center p-5`} >received</Link>
          <Link href={"/confirmation"} className={`${path === "/confirmation"?`bg-slate-200`: `bg-black text-white`} font-bold my-2.5 rounded-lg h-[45px] w-full flex items-center p-5`} >Confirmation</Link>
          <Link href={"/detailroom"} className={`${path === "/detailroom"?`bg-slate-200`: `bg-black text-white`} font-bold my-2.5 rounded-lg h-[45px] w-full flex items-center p-5`} >Detailroom</Link>
      </div>
    </>
  );
};
export default MobileHeader;
