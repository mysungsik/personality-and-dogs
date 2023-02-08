import MyTestResults from "../components/my-test-results/my-test-results";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";

const MyTestResultPage = () => {
  const { data } = useSession();
  const router = useRouter();

  if (data === null) {
    router.replace("/");
  }

  return (
    <div>
      <Head>
        <title>P&D - My Test Results</title>
        <meta name="description" />
      </Head>
      <MyTestResults userId={data?.user?.email} />
    </div>
  );
};

export default MyTestResultPage;
