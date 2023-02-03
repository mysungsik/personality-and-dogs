import styles from "./dogs-card.module.scss";
import { useEffect, useState } from "react";

let initial = true;

const DogCard = (props: {
  name: string;
  personality: string;
  size: string;
}) => {
  const { name, personality, size } = props;
  const [dogRandomImage, setDogRandomImage] = useState<string>("");

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    const imageAPI = async () => {
      const result = await fetch(
        `https://dog.ceo/api/breed/${name}/images/random`
      );

      const resultData = await result.json();
      setDogRandomImage(resultData.message);
    };

    imageAPI();
  }, []);

  return (
    <div className={styles.dogCard}>
      {dogRandomImage === "" ? (
        <div className={styles.image__section}>
          <p> Loading...</p>
        </div>
      ) : (
        <div className={styles.image__section}>
          <img src={dogRandomImage} alt={name} width={150} height={150} />
        </div>
      )}
      <div className={styles.description__section}>
        <div>
          <label>Dog Name</label>
          <p> {name}</p>
        </div>
        <div>
          <label>Dog Personality</label>
          <p> {personality}</p>
        </div>
        <div>
          <label>Dog Size</label>
          <p> {size}</p>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
