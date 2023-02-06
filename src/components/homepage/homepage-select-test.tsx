import SelectTestCard from "../cards/select-test-card";
import styles from "./homepage-select-test.module.scss";

const HomepageSelectTests = () => {
  return (
    <div className={styles.homepage__selectTest}>
      <div className={styles.text__section}>
        <h1>To CHOOSE your PET, you should consider your PERSONALITY </h1>
        <p> its not only for pet, but for you </p>
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
            image="/images/logo/logo.png"
            alt="number"
            title="NUMBER"
            subtitle="to number"
          />
          <SelectTestCard
            href="/test-disc"
            image="/images/logo/logo.png"
            alt="disc"
            title="DISC"
            subtitle="to DISC Test"
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageSelectTests;
