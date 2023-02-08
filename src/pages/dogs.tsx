import DogsIntro from "@/components/dogs/dogs-intro";
import DogsMatch from "@/components/dogs/dogs-match";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const DogsPage = () => {
  const router = useRouter();

  useEffect(() => {
    // 데이터없으면 방출
    const testResult = window.localStorage.getItem("test-result");

    if (testResult === null || testResult === "undefined") {
      router.replace("/");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>P&D - Match your dogs</title>
        <meta
          name="description"
          content="p&d can match your dog with personality what you have. Just answer some questions and find dogs who fit-well into you"
        />
      </Head>
      <DogsIntro />
      <DogsMatch />
    </div>
  );
};

export default DogsPage;
