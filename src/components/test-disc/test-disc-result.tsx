import styles from "./test-disc-result.module.scss";
import Image from "next/image";
import TestDiscGraph from "./test-disc-graph";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { TestResultType } from "../../pages/api/test-result";

// 쿼리된 값으로, "결과값 DB 에서 가져온다."
// test-result-graph 로, 그래프를 그려주고,
// DB 에서 가져온 결과값으로, 설명과 TRAIT 를 표시해준다.

// SAVE &  MATCH DOGS 누르면, 해당 결과값으로 DOS 페이지로 이동한다.

const TestDiscResult = (props: { result: string }) => {
  const { result } = props; // page 에서 넘어온, 유저의 테스트결과의 id값 (e.g. di, ds, ic 등...)
  const { data } = useSession();
  const [mainTestResultData, setMainTestResultData] =
    useState<TestResultType>();
  const [subTestResultData, setSubTestResultData] = useState<TestResultType>();
  const router = useRouter();

  // 쿼리에서 온 결과값을 통해, DB 에서 데이터를 가져온다.
  useEffect(() => {
    (async () => {
      const main = await fetch("/api/test-result", {
        method: "POST",
        body: JSON.stringify({
          testType: "disc-test",
          testId: Array.from(result)[0], // 유저의 최종결과값중 메인결과값
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const sub = await fetch("/api/test-result", {
        method: "POST",
        body: JSON.stringify({
          testType: "disc-test",
          testId: Array.from(result)[1], // 유저의 최종 결과값중 서브결과값
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const mainData = await main.json();
      const subData = await sub.json();

      setMainTestResultData(mainData.data);
      setSubTestResultData(subData.data);
    })();
  }, []);

  // DOGS 페지에서 사용할 수 있게, DB 에서 결과값이 나오면 자동으로 로컬스토리지에 넣는다.
  useEffect(() => {
    window.localStorage.setItem(
      "test-result",
      JSON.stringify(mainTestResultData)
    );
  }, [mainTestResultData]);

  // 저장후 DOGS 페이지로 이동 버튼을 누르면, DB에 결과값을 저장하고 DOGS 페이지로 넘어간다.
  const submitHandler = async () => {
    if (data === null) {
      signIn("google", { callbackUrl: "/" });
      return;
    }
    const userId = data?.user?.email;
    const testId = result;
    const testType = mainTestResultData?.testType;
    const testResult = mainTestResultData?.testResult;
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
          <h1> YOU have PERSONALITY Type OF &apos;{result}&apos;</h1>
          <hr />
          <p> This Type has below Personality</p>
          <p> {mainTestResultData?.testResult}</p>
          <p>, with an additional {subTestResultData?.testResult}</p>
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
        <div className={styles.graph}>
          <TestDiscGraph />
        </div>
        <div className={styles.description}>
          <div>
            <h1> Description</h1>
            <div>
              <h2>
                Your Main Type Is
                <span className={styles.description__type}>
                  {mainTestResultData?.testId.toUpperCase()}
                </span>
              </h2>
              <p>{mainTestResultData?.testDescription}</p>
            </div>
            <div>
              <h2>
                Your Sub Type Is
                <span className={styles.description__type}>
                  {subTestResultData?.testId.toUpperCase()}
                </span>
              </h2>
              <p>{subTestResultData?.testDescription}</p>
            </div>
          </div>
          <div>
            <h1> your Personal Trait</h1>
            <p> {mainTestResultData?.testResult}</p>
            <h4> And you also Have</h4>
            <p>{subTestResultData?.testResult}</p>
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

export default TestDiscResult;

// testDescription
// :
// "You focus on getting everything done right. To get things done right, you ask about processes and ideas. You are methodical and immersed in detailed analysis, and make decisions through observation and analysis rather than being guided by emotion. You like to work independently, and You have a calm personality, so You take an objective and sociable attitude when dealing with others."
// testId
// :
// "s"
// testResult
// :
// "careful, conscientious, accurate, analytical, detailed, organized"
// testType
// :
// "disc-test"
// _id
// :
// "63e05542ddfc8b4b0d8d657f"

// testDescription
// :
// "your number personality reveals that you embody leadership qualities. You are independent and self-sufficient. You are ambitious and a high-achiever. You have a mind of your own. You are ambitious and efficient at dealing with problems with brilliant solutions. You like to be on the top and ahead of the crowd. You will stop at nothing to materialize your goals. You are a courageous and creative individual. You find unique opportunities which the crowd misses to notice. You are not a follower. You are most probably a leader that reaches a level of personality cult. You are a caring and passionate individual but can be quite demanding of yourself as well as others in relationships. You have really high standards. You could also feel lonely at times due to such stickler for perfection. You have a loving and appealing personality, but you do not like to be dominated."
// testId
// :
// "1"
// testResult
// :
// "Independent, self-sufficient, ambitious, high-achiever, courageous"
// testType
// :
// "number-test"
// _id
// :
// "63d8c32ff16f46b6ab12820b"
