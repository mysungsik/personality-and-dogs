import Image from "next/image";
import Link from "next/link";
import styles from "./layout-aside.module.scss";

const LayoutAside = () => {
  return (
    <aside className={styles.layoutAside}>
      <ul className={styles.layoutAside__ul}>
        <li>
          <Link href={"/"}>
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={30}
              height={15}
            />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={30}
              height={15}
            />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={30}
              height={15}
            />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={30}
              height={15}
            />
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default LayoutAside;
