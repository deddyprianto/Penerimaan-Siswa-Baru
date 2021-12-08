import dynamic from "next/dynamic";
import { getSession } from "next-auth/client";
import React from "react";

const Dashboard = dynamic(() => import("../../components/Dashboard/Dashboard"));

const index = ({ session }) => {
  return (
    <div>
      <Dashboard session={session} />
    </div>
  );
};

export default index;

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
