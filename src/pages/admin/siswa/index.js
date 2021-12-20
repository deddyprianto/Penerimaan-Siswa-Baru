import dynamic from "next/dynamic";
const DashSiswa = dynamic(() =>
  import("components/Dashboard/DashSiswa/DashSiswa")
);
import { getSession } from "next-auth/client";
const index = () => <DashSiswa />;

export default index;

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
