import { getSession } from "next-auth/client";
import dynamic from "next/dynamic";

const DashGuru = dynamic(() =>
  import("components/Dashboard/DashGuru/DashGuru")
);

const index = ({ session }) => <DashGuru />;

export default index;

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
