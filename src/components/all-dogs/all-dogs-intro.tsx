import Image from "next/image";
import styles from "./all-dogs-intro.module.scss";

const AllDogsIntro = () => {
  return (
    <div className={styles.mainDescription}>
      <div className={styles.mainDescription__text}>
        <h1> WELCOME TO DOGS-DATA</h1>
        <hr />
        <p> These Data from "Dogs API" below URL</p>
        <p> https://dog.ceo/dog-api </p>
        <p> Thanks to Dogs API </p>
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

export default AllDogsIntro;
