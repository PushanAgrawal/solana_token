import type { NextPage } from "next";
import Head from "next/head";
import { UpdateView } from "../views";

const Update: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>CarbonX Scaffold</title>
        <meta
          name="description"
          content="CarbonX Scaffold"
        />
      </Head>
      <UpdateView />
    </div>
  );
};

export default Update;