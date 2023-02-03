import DogsIntro from "@/components/dogs/dogs-intro";
import DogsMatch from "@/components/dogs/dogs-match";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
      <DogsIntro />
      <DogsMatch />
    </div>
  );
};

export default DogsPage;
