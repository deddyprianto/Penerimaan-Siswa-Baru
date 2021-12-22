import dynamic from "next/dynamic";
const Home = dynamic(() => import("components/Home/Home"));
import { getSession } from "next-auth/client";

const index = () => {
  const products = [
    { name: "apples", category: "fruits" },
    { name: "oranges", category: "fruits" },
    { name: "potatoes", category: "vegetables" },
  ];

  const groupByCategory = products.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
  }, {});

  console.log(groupByCategory);
  return (
    <div className="bg-gray-200 h-full w-screen">
      <Home />
    </div>
  );
};

export default index;
