import styles from "./all-dogs-content.module.scss";
import { useCallback, useEffect, useState } from "react";
import DogCard from "../cards/dogs-card";

export interface DogsDataType {
  _id: string;
  name: string;
  personality: string;
  size: string;
}

const AllDogsContents = () => {
  const [allDogs, setAllDogs] = useState<DogsDataType[]>([]);

  useEffect(() => {
    const getDogsDataHanlder = async () => {
      const allDogs = await fetch("/api/dogs");
      const allDogsData = await allDogs.json();

      setAllDogs(allDogsData.data);
    };

    getDogsDataHanlder();
  }, []);

  const allDogsList = allDogs?.map((dogs) => (
    <DogCard
      key={dogs._id}
      name={dogs.name}
      personality={dogs.personality}
      size={dogs.size}
    />
  ));

  return <div className={styles.allDogs}>{allDogsList}</div>;
};
export default AllDogsContents;
