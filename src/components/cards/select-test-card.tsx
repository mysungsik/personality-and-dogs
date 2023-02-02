import Link from "next/link";
import Image from "next/image";
import styles from "./select-test-card.module.scss";

const SelectTestCard = (props: {
  href: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}) => {
  const { href, image, alt, title, subtitle } = props;
  return (
    <Link href={href} className={styles.selectCard}>
      <div className={styles.selectCard__image}>
        <Image src={image} alt={alt} width={150} height={75} />
      </div>
      <div className={styles.selectCard__text}>
        <h1>{title}</h1>
        <p> {subtitle}</p>
      </div>
    </Link>
  );
};

export default SelectTestCard;
