import dynamic from "next/dynamic";
import { ChatIcon } from "@heroicons/react/outline";
const Pendaftaran = dynamic(() =>
  import("../../components/Pendaftaran/Pendaftaran")
);

const index = () => {
  return (
    <div className="relative">
      <Pendaftaran />
      <div className="w-28 h-28 rounded-full shadow-lg bg-gray-50 flex justify-center items-center fixed bottom-5 right-5 z-50 hover:bg-blue-400 animate-bounce ">
        <ChatIcon className="w-1/2 h-1/2 text-gray-400 hover:text-gray-100" />
      </div>
    </div>
  );
};

export default index;
