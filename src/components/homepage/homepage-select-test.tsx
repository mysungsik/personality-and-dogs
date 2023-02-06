import SelectTestCard from "../cards/select-test-card";
import styles from "./homepage-select-test.module.scss";

const HomepageSelectTests = () => {
  return (
    <div className={styles.homepage__selectTest}>
      <div className={styles.text__section}>
        <h1>
          To find a dog that is a good match for you, you need to know your
          personality.
        </h1>
        <p>
          It is necessary not only for you, but also for the dog you choose.{" "}
        </p>
        <h1>
          P&D check your PERSONALITY and match the dog, who have good CHEMISTRY
          with YOU
        </h1>
        <p> for this, check your PERSONALITY First</p>
      </div>
      <hr className={styles.hr} />
      <div className={styles.contents__section}>
        <p> &#10004; Select Test What you want</p>
        <div className={styles.card__section}>
          <SelectTestCard
            href="/test-number"
            image="/images/homepage/numbers.png"
            alt="number"
            title="NUMBER"
            subtitle="TEST"
          />
          <SelectTestCard
            href="/test-disc"
            image="/images/homepage/disc.png"
            alt="disc"
            title="DISC"
            subtitle="TEST"
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageSelectTests;
