import Image from "next/image";
import styles from "./layout-header.module.scss";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const LayoutHeader = () => {
  const [testsDropdown, setTestsDropdown] = useState<boolean>(false);
  const [dogsDropdown, setDogsDropdown] = useState<boolean>(false);
  const { data } = useSession();
  const router = useRouter();

  const toggleTestsDropdown = () => {
    setTestsDropdown((prev) => !prev);
    setDogsDropdown(false);
  };
  const toggleDogsDropdown = () => {
    setDogsDropdown((prev) => !prev);
    setTestsDropdown(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo} onClick={() => router.push("/")}>
        <Image
          src={"/images/logo/logo.png"}
          alt="logo"
          width={100}
          height={50}
        ></Image>
        <p>P & D</p>
      </div>
      <div className={styles.header__menus}>
        <div className={styles.header__menus__users}>
          {data === null ? (
            <>
              <p onClick={() => signIn("google", { callbackUrl: "/" })}>
                SignIn
              </p>
            </>
          ) : (
            <>
              <p onClick={() => signOut({ callbackUrl: "/" })}> SignOut</p>
              <p
                onClick={() => {
                  router.push("/my-test-result");
                }}
              >
                My Test Results
              </p>
            </>
          )}
        </div>
        <div className={styles.header__menus__menulist}>
          <ul>
            <li>
              <div onClick={() => toggleTestsDropdown()}>
                Personal Test
                {testsDropdown ? (
                  <span> &#11165;</span>
                ) : (
                  <span> &#11167;</span>
                )}
              </div>
              {testsDropdown && (
                <ul className={styles.dropdown}>
                  <li
                    onClick={() => {
                      router.push("/test-number");
                      setTestsDropdown(false);
                    }}
                  >
                    Number Test
                  </li>
                  <li
                    onClick={() => {
                      router.push("/test-disc");
                      setTestsDropdown(false);
                    }}
                  >
                    DISC Test
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div onClick={toggleDogsDropdown}>
                FIND DOGS
                {dogsDropdown ? <span> &#11165;</span> : <span> &#11167;</span>}
              </div>
              {dogsDropdown && (
                <ul className={styles.dropdown}>
                  <li
                    onClick={() => {
                      router.push("/all-dogs");
                      setDogsDropdown(false);
                    }}
                  >
                    DOG SPECIES
                  </li>
                  <li
                    onClick={() => {
                      router.push("/all-dogs/random-images");
                      setDogsDropdown(false);
                    }}
                  >
                    DOG IMAGES
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
