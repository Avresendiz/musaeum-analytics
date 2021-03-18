import Spinner from "react-bootstrap/Spinner";
import Head from "next/head";
import React from "react";

export default function Home() {
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <>
      <Head>
        <title>Musaeum Analytics</title>
      </Head>
      {load ? (
        <iframe
          src="https://drive.google.com/file/d/1IPiQGgF7qMJCHdTtEnjB-s6TbvIOZMCN/preview"
          title="Musaeum Analytics"
        />
      ) : (
        <Spinner animation="grow" variant="dark" />
      )}
    </>
  );
}
