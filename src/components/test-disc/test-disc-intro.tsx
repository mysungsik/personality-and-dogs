import Image from "next/image";
import styles from "./test-disc-intro.module.scss";

const TestDiscIntro = () => {
  return (
    <div className={styles.mainDescription}>
      <div className={styles.mainDescription__text}>
        <h1> WELCOME TO DISC TEST PAGE</h1>
        <hr />
        <p>
          The DISC test, invented by Morton Marston, who guessed the lie
          detector, is a test that monitors four extensions: Dominace,
          Influence, Conscientiousness, and Steadiness.
        </p>
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
export default TestDiscIntro;
