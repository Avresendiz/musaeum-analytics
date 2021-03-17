import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Musaeum Analytics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe
        src="https://drive.google.com/file/d/1yOUYtPjTlGbRuqdvI3fSTqsIjXbFi6Tz/preview"
        style={{ width: "100vw", height: "100vh" }}
      ></iframe>
    </div>
  );
}
