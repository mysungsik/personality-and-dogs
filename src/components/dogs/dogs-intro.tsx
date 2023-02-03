import Image from "next/image";
import styles from "./dogs-intro.module.scss";
import { useEffect, useState } from "react";
import { TestResultType } from "../test-number/test-number-result";

const DogsIntro = () => {
  const [testResultData, setTestResultData] = useState<TestResultType>();

  useEffect(() => {
    const userTestResult = window.localStorage.getItem("test-result");
    setTestResultData(JSON.parse(String(userTestResult)));
  }, []);

  return (
    <div className={styles.mainDescription}>
      <div className={styles.mainDescription__text}>
        <h1> YOUR PERSONALITY</h1>
        <hr />
        <p> {testResultData?.testResult}</p>
      </div>
      <div className={styles.mainDescription__image}>
        <Image
          src={"/images/main-description/brett-jordan-D44kHt8Ex14-unsplash.jpg"}
          alt={"find-who-you-are"}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default DogsIntro;
