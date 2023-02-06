import styles from "./test-disc-testing.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { TestPaperType } from "@/pages/api/test-paper";
import LoadingModal from "../modal/loading-modal";

let initial = true;

const TestDiscTesting = () => {
  const [testPaper, setTestPaper] = useState<TestPaperType[]>(); // 질문지
  const [resultState, setResultState] = useState<string[]>([]); // 유저 결과값 데이터
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    (async () => {
      const testPaper = await fetch("/api/test-paper");
      const testPaperData = await testPaper.json();
      setTestPaper(testPaperData.data);
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
          <p> Pick the button that suits you best </p>
          <p>The button will be disabled when you press it</p>
          <p>It is better to choose without thinking deeply. </p>
          <div className={styles.questionList}>
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
      );
    }
  });

  return (
    <div>
      {loading && <LoadingModal />}
      <div className={styles["test-number__testing"]}>
        <div className={styles.description__section}>
          <h1> DISC TEST </h1>
          <p>...HOW TO DISC TEST...</p>
          <p> ...HOW TO DISC TEST2...</p>
        </div>
        <div className={styles.testing__section}>{question}</div>
        {resultState.length === 40 && (
          <div className={styles.result__section}>
            <button
              className={styles.result__section__submit}
              onClick={submitHandler}
            >
              제출하고 결과보기
            </button>
            <button className={styles.result__section__retry}> 다시하기</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestDiscTesting;
