import Image from "next/image";
import Link from "next/link";
import styles from "./layout-aside.module.scss";

const LayoutAside = () => {
  return (
    <aside className={styles.layoutAside}>
      <ul className={styles.layoutAside__ul}>
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
    </aside>
  );
};
export default LayoutAside;
