import { getSession } from "next-auth/client";

const index = ({ session }) => {
  return <div>This Is Page Teacher</div>;
};

export default index;

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
