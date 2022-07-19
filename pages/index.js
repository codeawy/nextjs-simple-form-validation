import { useState } from "react";
import Head from "next/head";

export default function Home() {
  // ** States
  const [postList, setPostList] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    creator: "",
    email: "",
  });
  const [errors, setErrors] = useState({ ...post });
  const [isError, setIsError] = useState(false);

  return (
    <div>
      <Head>
        <title>Simple Form Validation</title>
        <meta name="description" content="Simple Form Validation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Simple Form Validation</h1>
      </main>
    </div>
  );
}
