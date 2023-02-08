import styles from "./all-dogs-random.module.scss";
import { useState } from "react";

// https://dog.ceo/api/breeds/image/random/<number>
const AllDogsRandom = () => {
  const [randomImages, setRandomImages] = useState<string[]>([]);
  const getRandomImages = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/4");
    const responseData = await response.json();

    setRandomImages(responseData.message);
  };
  return (
    <div className={styles.random}>
      <h1>TODAY DOGS!</h1>
      <div>
        <button onClick={getRandomImages}> Random</button>
      </div>
      <div>
        {randomImages?.map((item) => (
          <img key={item} src={item} alt={"dog"} />
        ))}
      </div>
    </div>
  );
};

export default AllDogsRandom;
