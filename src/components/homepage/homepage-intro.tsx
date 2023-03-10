import Image from "next/image";
import styles from "./homepage-intro.module.scss";

const HompageIntro = () => {
  return (
    <div className={styles.mainDescription}>
      <div className={styles.mainDescription__text}>
        <h1> UNDERSTAND YOUR PERSONALITY</h1>
        <hr />
        <p>
          Get to know your Inner-Self with this cool PERSONALITY TEST. And find
          DOGS that&apos;s WELL-FIT for you
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

export default HompageIntro;
