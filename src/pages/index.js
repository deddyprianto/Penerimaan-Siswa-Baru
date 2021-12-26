import dynamic from "next/dynamic";
const Home = dynamic(() => import("components/Home/Home"));
import { getSession } from "next-auth/client";
import { ChatIcon } from "@heroicons/react/outline";

const index = () => {
  // const products = [
  //   { name: "apples", category: "fruits" },
  //   { name: "oranges", category: "fruits" },
  //   { name: "potatoes", category: "vegetables" },
  // ];

  // const groupByCategory = products.reduce((group, product) => {
  //   const { category } = product;
  //   group[category] = group[category] ?? [];
  //   group[category].push(product);
  //   return group;
  // }, {});

  return (
    <div className="bg-gray-200 h-full w-screen overflow-x-hidden relative">
      <Home />
      {/* contact person */}
      <div className="w-28 h-28 rounded-full shadow-lg bg-gray-50 flex justify-center items-center fixed bottom-5 right-5 z-50 hover:bg-blue-400 animate-bounce ">
        <ChatIcon className="w-1/2 h-1/2 text-gray-400 hover:text-gray-100" />
      </div>
    </div>
  );
};

export default index;
