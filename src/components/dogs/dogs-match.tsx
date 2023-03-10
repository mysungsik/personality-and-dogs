import styles from "./dogs-match.module.scss";
import { useCallback, useEffect, useState } from "react";
import { TestResultType } from "../../pages/api/test-result";
import { matchPersonality } from "../../helper/match-dogs-logic";
import DogCard from "../cards/dogs-card";

export interface DogsDataType {
  _id: string;
  name: string;
  personality: string;
  size: string;
}

const DogsMatch = () => {
  let dogsPesonality; // match 된 dogs 의 dogsPesonality
  const [fitMatchDogsDatas, setFitMatchDogsDatas] = useState<DogsDataType[]>();
  const [balanceMatchDogsDatas, setBalanceMatchDogsDatas] =
    useState<DogsDataType[]>();

  const [size, setSize] = useState<string>("");
  const [testResultData, setTestResultData] = useState<TestResultType>({
    _id: "",
    testId: "",
    testType: "",
    testResult: "",
    testDescription: "",
  });

  useEffect(() => {
    const testResult = JSON.parse(window.localStorage.getItem("test-result")!); // 로컬스토리지 값 가져와서 State로
    setTestResultData(testResult);
  }, []);

  if (testResultData._id !== "") {
    dogsPesonality = matchPersonality(testResultData!.testResult); // 개의 성격 match [배열이기에, 원본변형 가능]
  }

  const fitArray = dogsPesonality?.fit!.split(","); // fit 한 dogs 들 배열로 변경
  const balanceArray = dogsPesonality?.balance?.split(","); // balance 한 dogs 들 배열로 변경

  // DB 에서 dog Data get하는 함수 [fit dogs 와 balance dogs]
  const getDogsDataHanlder = useCallback(async () => {
    const fitDogs = await fetch("/api/dogs", {
      method: "POST",
      body: JSON.stringify({ personality: fitArray, size: size }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const fitdogsData = await fitDogs.json();

    const balanceDogs = await fetch("/api/dogs", {
      method: "POST",
      body: JSON.stringify({ personality: balanceArray, size: size }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const balanceDogsData = await balanceDogs.json();

    setFitMatchDogsDatas(fitdogsData.data);
    setBalanceMatchDogsDatas(balanceDogsData.data);
  }, [size]);

  useEffect(() => {
    // 버튼에 의해 size 가 등록되어, size 가 있다면 함수실행
    if (size !== "") {
      getDogsDataHanlder();
    }
  }, [size]); // 의존성배열

  // State 값 화면에 보일 JSX 코드로 변환
  const fitDogsList = fitMatchDogsDatas?.map((dogs) => (
    <DogCard
      key={dogs._id}
      name={dogs.name}
      personality={dogs.personality}
      size={dogs.size}
    />
  ));

  const balanceDogsList = balanceMatchDogsDatas?.map((dogs) => (
    <DogCard
      key={dogs._id}
      name={dogs.name}
      personality={dogs.personality}
      size={dogs.size}
    />
  ));

  return (
    <div className={styles.dogsMatch}>
      <div className={styles.info__section}>
        <h2> These Dogs Personality might FIT Well </h2>
        <p>
          The dog with <span>{dogsPesonality?.fit}</span> personality
        </p>
        <h2> These Dogs Personality might BALANCE Well</h2>
        <p>
          The dog with <span>{dogsPesonality?.balance}</span> personality
        </p>
      </div>
      <div className={styles.choose__section}>
        <h2> Choose the size of Dogs which you want</h2>
        <div>
          <button onClick={() => setSize("small")}> small</button>
          <button onClick={() => setSize("medium")}> medium</button>
          <button onClick={() => setSize("large")}> large</button>
        </div>
      </div>
      {size && <h2> {size.toUpperCase()}</h2>}
      <div className={styles.cards__section}>
        <div className={styles.sub__section}>
          <p> FIT</p>
          <ul>{fitDogsList}</ul>
        </div>
        <div className={styles.sub__section}>
          <p>BALANCE</p>
          <ul>{balanceDogsList}</ul>
        </div>
      </div>
    </div>
  );
};
export default DogsMatch;
