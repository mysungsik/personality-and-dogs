import MyTestResults from "../components/my-test-results/my-test-results";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const MyTestResultPage = () => {
  const { data } = useSession();
  const router = useRouter();

  if (data === null) {
    router.replace("/");
  }

  // 왜 data 가 늦게 들어가는가..?
  return (
    <div>
      <MyTestResults userId={data?.user?.email} />
    </div>
  );
};

export default MyTestResultPage;
