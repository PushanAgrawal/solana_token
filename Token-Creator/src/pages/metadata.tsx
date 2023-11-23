import type { NextPage } from "next";
import Head from "next/head";
import { MetadataView } from "../views";

const Metadata: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>CarbonX Scaffold</title>
        <meta
          name="description"
          content="CarbonX Scaffold"
        />
      </Head>
      <MetadataView />
    </div>
  );
};

export default Metadata;