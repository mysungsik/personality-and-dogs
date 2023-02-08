import styles from "./Layout-footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const LayoutFooter = () => {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <Image src="/images/logo/logo.png" alt="logo" width={150} height={80} />
        <p> P & D</p>
      </div>
      <div className={styles.footer__aboutme}>
        <ul>
          <li>
            <Link href={"https://github.com/mysungsik/personality-and-dogs"}>
              <Image
                src="/images/layout/github.png"
                alt="logo"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://dive-into-frontend.tistory.com/category/%EB%A9%94%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/Next.js%20-%20%EC%8B%AC%EB%A6%AC%EA%B2%80%EC%82%AC%EC%99%80%20%EA%B0%95%EC%95%84%EC%A7%80%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
              }
            >
              <Image
                src="/images/layout/tstory.png"
                alt="logo"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li>
            <Link href={"https://present-6445f8fhq-mysungsik.vercel.app/"}>
              <Image
                src="/images/layout/portfolio.png"
                alt="logo"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Image
                src="/images/loading/icons8-corgi.gif"
                alt="logo"
                width={30}
                height={30}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer__aboutsite}>
        <ul>
          <li
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              router.push("/test-number");
            }}
          >
            NUMBER TEST
          </li>
          <li
            onClick={() => {
              router.push("/test-disc");
            }}
          >
            DISC TEST
          </li>
          <li
            onClick={() => {
              router.push("/all-dogs");
            }}
          >
            FIND DOG
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.footer__copy}>
        <p> COPYRIGHT © 2023, P & D. ALL RIGHTS RESERVED. </p>
      </div>
    </footer>
  );
};
export default LayoutFooter;
