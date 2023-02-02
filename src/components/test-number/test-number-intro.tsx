import Image from "next/image";
import styles from "./test-number-intro.module.scss";

const TestNumberIntro = () => {
  return (
    <div className={styles.mainDescription}>
      <div className={styles.mainDescription__text}>
        <h1> WELCOME TO NUMBER TEST PAGE</h1>
        <hr />
        <p> JUST CHOOSE YOUR FAVORTIES</p>
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
export default TestNumberIntro;
