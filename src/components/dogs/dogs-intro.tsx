import Image from "next/image";
import styles from "./dogs-intro.module.scss";

const DogsIntro = () => {
  return (
    <div className={styles.mainDescription}>
      <div className={styles.mainDescription__text}>
        <h1> UNDERSTAND YOUR PERSONALITY</h1>
        <hr />
        <p> AND FIND YOUR DOG</p>
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
