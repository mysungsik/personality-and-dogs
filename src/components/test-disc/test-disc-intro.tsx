import Image from "next/image";
import styles from "./test-disc-intro.module.scss";

const TestDiscIntro = () => {
  return (
    <div className={styles.mainDescription}>
      <div className={styles.mainDescription__text}>
        <h1> WELCOME TO DISC TEST PAGE</h1>
        <hr />
        <p>
          The DISC assessment is a measure of interpersonal behavior that is
          often used in workplace settings. It classifies how we interact in
          terms of four personality styles: Drive, Influence, Support, and
          Clarity. Based on the theories of psychologist William Moulton
          Marston, the DISC assessment is a simple yet powerful way to unlock
          your strengths and help your team work better together. The DISC
          personality model describes four types: D for Drive, I for Influence,
          S for Support, and C for Clarity. Each type describes a particular
          approach to getting work done and contributing to a team.
        </p>
      </div>
      <div className={styles.mainDescription__image}>
        <Image
          src={"/images/main-description/DISC-MODEL.png"}
          alt={"find-who-you-are"}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
export default TestDiscIntro;
