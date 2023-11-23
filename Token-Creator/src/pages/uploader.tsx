import type { NextPage } from "next";
import Head from "next/head";
import { UploaderView } from "../views";

const Uploader: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>CarbonX Scaffold</title>
        <meta
          name="description"
          content="CarbonX Scaffold"
        />
      </Head>
      <UploaderView />
    </div>
  );
};

export default Uploader;