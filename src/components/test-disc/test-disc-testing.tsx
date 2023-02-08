import styles from "./test-disc-testing.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { TestPaperType } from "@/pages/api/test-paper";
import LoadingModal from "../modal/loading-modal";

const TestDiscTesting = () => {
  const [testPaper, setTestPaper] = useState<TestPaperType[]>(); // 질문지
  const [resultState, setResultState] = useState<string[]>([]); // 유저 결과값 데이터
  const [loading, setLoading] = useState<boolean>(false);
  const [paperLoading, setPaperLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setPaperLoading(true);

    if (testPaper?.length !== 0) {
    }
    (async () => {
      const testPaper = await fetch("/api/test-paper");
      const testPaperData = await testPaper.json();
      setTestPaper(testPaperData.data);
      setPaperLoading(false);
    })();
  }, []);

  // 정답값 넣는 로직
  const addHandler = (questionId: string, id: string) => {
    if (resultState.length === 4 * Number(id)) {
      setResultState((prev) => [...prev, questionId + id + 6]);
    } else if (resultState.length === 4 * Number(id) + 1) {
      setResultState((prev) => [...prev, questionId + id + 4]);
    } else if (resultState.length === 4 * Number(id) + 2) {
      setResultState((prev) => [...prev, questionId + id + 2]);
    } else if (resultState.length === 4 * Number(id) + 3) {
      setResultState((prev) => [...prev, questionId + id + 0]);
    }
  };

  // 최종 결과 생성 함수 (및 로컬스토리지에 저장 후 페이지이동)
  const submitHandler = () => {
    setLoading(true);
    const totalD: number = resultState
      .filter((result) => result.startsWith("c"))
      .reduce((acc, cur) => Number(acc) + Number(cur.slice(2, 3)), 0);
    const totalI: number = resultState
      .filter((result) => result.startsWith("b"))
      .reduce((acc, cur) => Number(acc) + Number(cur.slice(2, 3)), 0);
    const totalS: number = resultState
      .filter((result) => result.startsWith("a"))
      .reduce((acc, cur) => Number(acc) + Number(cur.slice(2, 3)), 0);
    const totalC: number = resultState
      .filter((result) => result.startsWith("d"))
      .reduce((acc, cur) => Number(acc) + Number(cur.slice(2, 3)), 0);

    const result = [
      { type: "d", data: totalD },
      { type: "i", data: totalI },
      { type: "s", data: totalS },
      { type: "c", data: totalC },
    ];

    window.localStorage.setItem("test-result-graph", JSON.stringify(result));

    const reArrange = result.sort((a, b): number => {
      return b.data - a.data;
    });

    router.push(`/test-disc/${reArrange[0].type}${reArrange[1].type}`);

    // 스토리지에 저장할 결과 => [{ type: "d", data: totalD }, { type: "i", data: totalI }, ... , ]
    // 동적 페이지로 이동할 결과 => [test-disc,di], [test-disc,"결과"] 페이지로 이동
  };

  // 질문지생성
  const question = testPaper?.map((item) => {
    if (
      resultState.length >= Number(item.id) * 4 &&
      resultState.length < Number(item.id) * 4 + 4
    ) {
      return (
        <div key={item.id} className={styles.question}>
          <h1> Test Paper</h1>
          <p> We present 4 personality types. </p>
          <p>
            <strong>
              Press all buttons, starting with the button that you think suits
              you best.
            </strong>
          </p>
          <p>The button will be disabled when you press it</p>
          <p>
            For accurate results, it is recommended to press without thinking
            deeply.
          </p>
          <div className={styles.questionList}>
            <div className={styles.questionList__buttons}>
              {/* 정답값에 값이 들어있다면 버튼을 disabled */}
              <button
                onClick={() => addHandler("a", item.id)}
                disabled={
                  resultState.find((data) => data.startsWith("a" + item.id))
                    ? true
                    : false
                }
              >
                {item.question.a}
              </button>
              {/* 정답값에 값이 들어있다면 버튼을 disabled */}
              <button
                onClick={() => addHandler("b", item.id)}
                disabled={
                  resultState.find((data) => data.startsWith("b" + item.id))
                    ? true
                    : false
                }
              >
                {item.question.b}
              </button>
              {/* 정답값에 값이 들어있다면 버튼을 disabled */}
              <button
                onClick={() => addHandler("c", item.id)}
                disabled={
                  resultState.find((data) => data.startsWith("c" + item.id))
                    ? true
                    : false
                }
              >
                {item.question.c}
              </button>
              {/* 정답값에 값이 들어있다면 버튼을 disabled */}
              <button
                onClick={() => addHandler("d", item.id)}
                disabled={
                  resultState.find((data) => data.startsWith("d" + item.id))
                    ? true
                    : false
                }
              >
                {item.question.d}
              </button>
            </div>
            <div>
              <p> {Number(item.id) + 1} / 10</p>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      {paperLoading && (
        <LoadingModal
          title="Preparing Test Paper..."
          image={"/images/loading/icons8-corgi.gif"}
        />
      )}
      {loading && (
        <LoadingModal
          title="Getting Test Results..."
          image={"/images/loading/icons8-corgi.gif"}
        />
      )}
      <div className={styles["test-number__testing"]}>
        <div className={styles.description__section}>
          <h1> DISC TEST </h1>
          <p>
            Use this Free DISC Personality Test to get a fast estimate of your
            DISC profile based on answers to 10 short questions. It&apos;s fast
            and it&apos;s free. You can probably finish it in less than 10
            minutes. Use the results to gain insights you can use to better
            understand why you communicate the way you do and how you can
            communicate with others more effectively.
          </p>
          <p>
            The DISC test classifies types and behavioral items according to two
            criteria. Extroverts vs introverts, work-centered vs people are the
            standards. According to these two criteria, four types of D-type,
            I-type, S-type, and C-type are unfolded.
          </p>
        </div>
        <div className={styles.testing__section}>{question}</div>
        {resultState.length === 40 && (
          <div className={styles.result__section}>
            <h1> Test Finish!</h1>
            <div className={styles.result__section__buttons}>
              <button className={styles.submit} onClick={submitHandler}>
                Show Result
              </button>
              <button
                className={styles.retry}
                onClick={() => {
                  setResultState([]);
                }}
              >
                Retry
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestDiscTesting;
