import { Footer } from "../ui/Footter/page";
import { Header } from "../ui/Header/page";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col max-w-screen h-screen">
      <Header />
      <div className="px-5 flex w-full xl:px-[300px]">{children}</div>
      <Footer />
    </div>
  );
};
export default MainLayout;
