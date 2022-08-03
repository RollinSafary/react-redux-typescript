import React from "react";
import { Layout } from "../components/layout/Layout";
import { Demo } from "./home/Demo";

export const Home = () => {
  React.useEffect(() => {}, []);

  return (
    <Layout>
      <Demo />
    </Layout>
  );
};
