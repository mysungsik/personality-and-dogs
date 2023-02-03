import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const MyTestResultPage = () => {
  const { data } = useSession();
  const router = useRouter();

  if (data === null) {
    router.replace("/");
  }

  return <div>My Test Result</div>;
};

export default MyTestResultPage;
