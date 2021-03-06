import dynamic from "next/dynamic";
import { getSession } from "next-auth/client";
import React from "react";

const Dashboard = dynamic(() => import("components/Dashboard/Dashboard"));
const Index = ({ session }) => {
  return <Dashboard session={session} />;
};

export default Index;

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
