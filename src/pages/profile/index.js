import { async } from "@firebase/util";
import dynamic from "next/dynamic";

const Profile = dynamic(() => import("../../components/Profile/Profile"));

const index = ({ dataFinal }) => <Profile dataFinal={dataFinal} />;

export default index;

export async function getServerSideProps(context) {
  const data = await fetch(
    "https://run.mocky.io/v3/c818a738-962f-4bf6-b3d9-d247db62b94e"
  );
  const dataFinal = await data.json();
  return {
    props: {
      dataFinal,
    },
  };
}
