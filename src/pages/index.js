import dynamic from "next/dynamic";
const Home = dynamic(() => import("components/Home/Home"));
import { getSession } from "next-auth/client";

const index = () => {
  return (
    <div className="bg-gray-200 h-full w-screen">
      <Home />
    </div>
  );
};

export default index;
