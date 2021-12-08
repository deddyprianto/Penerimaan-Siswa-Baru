import dynamic from "next/dynamic";
const Login = dynamic(() => import("../../components/Login/Login"));

const index = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default index;
