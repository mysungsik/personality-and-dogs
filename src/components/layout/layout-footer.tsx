import styles from "./Layout-footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const LayoutFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <Image src="/images/logo/logo.png" alt="logo" width={150} height={80} />
        <p> P & D</p>
      </div>
      <div className={styles.footer__aboutme}>
        <ul>
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
      </div>
      <div className={styles.footer__aboutsite}>
        <ul>
          <li> ABOUT US</li>
          <li> NUMBER TEST</li>
          <li> ETC TEST</li>
          <li> FIND DOG</li>
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
