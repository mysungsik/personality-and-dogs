import styles from "./test-number-result.module.scss";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { TestResultType } from "../../pages/api/test-result";

const TestNumberResult = (props: { result: string }) => {
  const { result } = props;
  const { data } = useSession();
  const router = useRouter();
  const [testResultData, setTestResultData] = useState<TestResultType>();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/test-result", {
        method: "POST",
        body: JSON.stringify({ testType: "number-test", testId: result }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();

      setTestResultData(responseData.data);
    })();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("test-result", JSON.stringify(testResultData));
  }, [testResultData]);

  const submitHandler = async () => {
    if (data === null) {
      signIn("google", { callbackUrl: "/" });
      return;
    }

    const userId = data?.user?.email;
    const testId = testResultData?.testId;
    const testType = testResultData?.testType;
    const testResult = testResultData?.testResult;
    const date = new Date().toLocaleString("ko-KR");

    const response = await fetch("/api/user-test-data", {
      method: "POST",
      body: JSON.stringify({ userId, testId, testType, testResult, date }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      return;
    } else {
      router.push("/dogs");
    }
  };

  return (
    <div>
      <div className={styles.mainDescription}>
        <div className={styles.mainDescription__text}>
          <h1> YOU CHOOSE NUMBER {testResultData?.testId}</h1>
          <hr />
          <p> MIGHT YOU HAVE</p>
          <p> {testResultData?.testResult}</p>
        </div>
        <div className={styles.mainDescription__image}>
          <Image
            src={
              "/images/main-description/brett-jordan-D44kHt8Ex14-unsplash.jpg"
            }
            alt={"find-who-you-are"}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={styles.testResult__section}>
        <div className={styles.description}>
          <div>
            <h2> Description</h2>
            <p>{testResultData?.testDescription}</p>
          </div>
          <div>
            <h2> Personal Trait</h2>
            <p> {testResultData?.testResult}</p>
          </div>
        </div>
        <div>
          <button className={styles.button} onClick={submitHandler}>
            {data ? <p>SAVE & MATCH DOGS</p> : <p>Please SignIn to SAVE</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestNumberResult;
