import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>빡코딩 포트폴리오</title>
        <meta name="description" content="오늘도 똥빡코딩" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">This is Home</h1>
    </Layout>
  );
}
