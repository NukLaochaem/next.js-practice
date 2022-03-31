import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function About() {
  return (
    <>
      <Layout />
      <Head>
        <title>About | Create Next App</title>
      </Head>
      <h1>About page</h1>

      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}
