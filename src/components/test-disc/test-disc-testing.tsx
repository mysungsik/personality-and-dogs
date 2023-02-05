import styles from "./test-disc-testing.module.scss";
import { useState } from "react";

const TestDiscTesting = () => {
  const [resultState, setResultState] = useState<string[]>([]); // 유저 결과값 데이터

  // 질문지 데이터
  const questionslists = [
    {
      id: "0",
      question: {
        a: "systematic",
        b: "passionate",
        c: "active",
        d: "exploratory",
      },
    },
    {
      id: "1",
      question: {
        a: "harmonious",
        b: "sociable",
        c: "straight",
        d: "thorough",
      },
    },
    {
      id: "2",
      question: {
        a: "pleasant",
        b: "funny",
        c: "big-picture ",
        d: "discipline",
      },
    },
    {
      id: "3",
      question: {
        a: "patience",
        b: "persuasive",
        c: "pioneering",
        d: "logical",
      },
    },
    {
      id: "4",
      question: {
        a: "helping well",
        b: "chatterbox",
        c: "authoritative",
        d: "objective",
      },
    },
    {
      id: "5",
      question: {
        a: "relaxed",
        b: "impulsive",
        c: "result oriented",
        d: "self-control",
      },
    },
    {
      id: "6",
      question: {
        a: "compassionate",
        b: "motivational",
        c: "impatient",
        d: "careful",
      },
    },
    {
      id: "7",
      question: {
        a: "generous",
        b: "optimistic",
        c: "competitive",
        d: "analytical",
      },
    },
    {
      id: "8",
      question: {
        a: "consistent",
        b: "lively",
        c: "determined",
        d: "preparation",
      },
    },
    {
      id: "9",
      question: {
        a: "considerate",
        b: "imaginative",
        c: "bold",
        d: "accurate",
      },
    },
  ];

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
  const submitHandler=()=>{
    
  }

  // 질문지생성
  const question = questionslists.map((item) => {
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
            <p> {item.id} / 10</p>
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      <div className={styles["test-number__testing"]}>
        <div className={styles.description__section}>
          <h1> DISC TEST </h1>
          <p>...HOW TO DISC TEST...</p>
          <p> ...HOW TO DISC TEST2...</p>
        </div>
        <div className={styles.testing__section}>{question}</div>
        {resultState.length === 40 && (
          <div className={styles.result__section}>
            <button className={styles.result__section__submit}>
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
