import styles from "./test-disc-testing.module.scss";
import { useRouter } from "next/router";

const TestDiscTesting = () => {
  // const router = useRouter();
  // const allNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  // const numberTestCards = allNumbers.map((selected) => (
  //   <div
  //     key={selected}
  //     className={styles.number__card}
  //     onClick={() => router.push(`/test-number/${selected}`)}
  //   >
  //     <p className={styles.text}> My Favorite Number</p>
  //     <div className={styles[`number__${selected}`]}>{selected}</div>
  //   </div>
  // ));

  return (
    <div>
      <div className={styles["test-number__testing"]}>
        <div className={styles.description__section}>
          <h1> DISC TEST </h1>
          <p>...HOW TO DISC TEST...</p>
          <p> ...HOW TO DISC TEST2...</p>
        </div>
        <div className={styles.testing__section}>...</div>
      </div>
    </div>
  );
};

export default TestDiscTesting;
