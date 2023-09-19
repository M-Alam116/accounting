import { Fragment } from "react";
import Head from "next/head";
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>

      <div className="bg-primaryColor w-full h-[100vh] flex justify-center items-center">
        <div className="flex justify-center items-center text-[28px] font-[600] text-white">
          Home Page
        </div>
      </div>
    </Fragment>
  );
}
