import Head from "next/head";
// import styles from "@/styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Topic from "../comps/Topic";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Topic></Topic>
      <Navbar></Navbar>
      <h1 className="text-gray-700 text-center text-5xl"> Home Page </h1>
      <p className=" w-2/3 m-10 content-center  text-gray-500">
        Dazzling, state-of-the-art high-definition imagery highlights this
        breathtaking documentary series featuring footage of some of the world's
        most awe-inspiring natural wonders -- from the oceans to the deserts to
        the polar ice caps. Actress Sigourney Weaver narrates this American
        version of the original BBC production.
      </p>

      <p className=" w-2/3 m-10 content-center  text-gray-500">
        Sir David Attenborough narrates this critically acclaimed series that
        dives deep into the marine environment of Planet Earth. Although
        two-thirds of the world's surface is covered with water, scientists know
        less about the oceans than they do about the surface of the moon.
      </p>

      <Head>
        <title> Ninjalist | Home</title>
        <meta name="tutorial" content="Home page" />
      </Head>
    </div>
  );
}
