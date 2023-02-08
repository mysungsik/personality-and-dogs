import styles from "./dogs-card.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";

const DogCard = (props: {
  name: string;
  personality: string;
  size: string;
}) => {
  const { name, personality, size } = props;
  const [dogRandomImage, setDogRandomImage] = useState<string>("");

  useEffect(() => {
    const imageAPI = async () => {
      const result = await fetch(
        `https://dog.ceo/api/breed/${name}/images/random`
      );

      const resultData = await result.json();
      setDogRandomImage(resultData.message);
    };

    imageAPI();
  }, [name]);

  return (
    <div className={styles.dogCard}>
      {dogRandomImage === "" ? (
        <div className={styles.loading__section}>
          <Image
            src="/images/loading/icons8-corgi.gif"
            width={100}
            height={100}
            alt={"loading"}
          />
          <h2> Loading...</h2>
        </div>
      ) : (
        <div className={styles.image__section}>
          <img src={dogRandomImage} alt={name} />
        </div>
      )}
      <div className={styles.description__section}>
        <div>
          <label>Dog Name</label>
          <p> {name}</p>
        </div>
        <hr />
        <div>
          <label>Dog Personality</label>
          <p> {personality}</p>
        </div>
        <hr />
        <div>
          <label>Dog Size</label>
          <p> {size}</p>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
