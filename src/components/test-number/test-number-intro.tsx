import Image from "next/image";
import styles from "./test-number-intro.module.scss";

const TestNumberIntro = () => {
  return (
    <div className={styles.mainDescription}>
      <div className={styles.mainDescription__text}>
        <h1> WELCOME TO NUMBER TEST PAGE</h1>
        <hr />
        <p>
          you will discover the qualities and characteristics of your
          personality and that of the people you know based on the number you
          love the most. We have gathered these key personality traits for each
          number from zero to nine based on many years of studies on behavioral
          styles and personality types by psychologists. These personality tests
          help you to facilitate the discovery of self as well as others at your
          workplace, family, school, groups, etc to enable deeper understanding
          and communications.
        </p>
      </div>
      <div className={styles.mainDescription__image}>
        <Image
          src={"/images/main-description/nick-hillier-yD5rv8_WzxA-unsplash.jpg"}
          alt={"find-who-you-are"}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
export default TestNumberIntro;
