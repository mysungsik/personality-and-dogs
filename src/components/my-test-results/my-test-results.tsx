import { useEffect, useState } from "react";
import { UserTestType } from "../../pages/api/get-user-test-data";
import styles from "./my-test-results.module.scss";

let initial = true;
const MyTestResults = (props: { userId: string | null | undefined }) => {
  const { userId } = props;
  const [userResultData, setUserResultData] = useState<UserTestType[]>();
  const [dropDownId, setDropdownId] = useState<string>();

  const dropDownToggle = (id: string) => {
    setDropdownId(id);
  };
  const hideDropDown = () => {
    setDropdownId("");
  };

  const deleteResult = async (_id: string) => {
    await fetch("/api/get-user-test-data", {
      method: "DELETE",
      body: JSON.stringify({ _id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setUserResultData((prev) => prev?.filter((item) => item._id !== _id));
  };

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    (async () => {
      const userData = await fetch("/api/get-user-test-data", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resultData = await userData.json();

      setUserResultData(resultData.data);
    })();
  }, [userId]);

  return (
    <div className={styles.myResult}>
      <h2> HELLO! {userId}</h2>
      <ul className={styles.myResult__ul}>
        {userResultData?.map((item) => (
          <li key={item._id} className={styles.list}>
            <div className={styles.main__div}>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.type}>{item.testType}</p>
              <div>
                <button onClick={() => dropDownToggle(item._id)}> 확인</button>
                <button onClick={() => deleteResult(item._id)}>삭제</button>
              </div>
            </div>
            {dropDownId === item._id && (
              <div className={styles.dropdown__div} onClick={hideDropDown}>
                <p> click to close</p>
                <div>
                  <label>YOUR TYPE</label> <p> {item.testId}</p>
                </div>
                <div>
                  <label>YOUT RESULT </label>
                  <p> {item.testResult}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTestResults;
