import styles from "./test-number-testing.module.scss";
import LoadingModal from "../modal/loading-modal";
import { useRouter } from "next/router";
import { useState } from "react";

const TestNumberTesting = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const allNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const numberTestCards = allNumbers.map((selected) => (
    <div
      key={selected}
      className={styles.number__card}
      onClick={() => {
        setLoading(true);
        router.push(`/test-number/${selected}`);
      }}
    >
      <p className={styles.text}> My Favorite Number</p>
      <div className={styles[`number__${selected}`]}>{selected}</div>
    </div>
  ));

  return (
    <div>
      {loading && <LoadingModal title="Getting Test Results..." image={"/images/loading/icons8-corgi.gif"}/>}
      <div className={styles["test-number__testing"]}>
        <div className={styles.description__section}>
          <h1> NUMBER TEST </h1>
          <p>
            Number Personality Test: What your favorite number says about you?
            Know interesting personality traits based on your favorite number
            between 0 to 9.
          </p>
          <p> Just choose the number and find your type</p>
        </div>
        <div className={styles.testing__section}>{numberTestCards}</div>
      </div>
    </div>
  );
};

export default TestNumberTesting;
