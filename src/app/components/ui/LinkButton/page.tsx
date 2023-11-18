import Link from "next/link";

// interface LinkButtonProps {
//   href: string;
//   text: string;
// }
const LinkButton = () => {
  return (
    <Link
      className="flex flex-1 justify-center items-center  w-full max-h-[50px] border-[1px] text-xl font-sans my-2"
      href={`/detailroom`}
    >
      View detail
    </Link>
  );
};
export default LinkButton;
