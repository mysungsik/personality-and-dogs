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
      <div className={styles.myResult__title}>
        <h1> HELLO! {userId}</h1>
        <p> Latest your Test Result</p>
      </div>
      <ul className={styles.myResult__ul}>
        {userResultData?.map((item) => (
          <li key={item._id} className={styles.list}>
            <div className={styles.main__div}>
              <p className={styles.date}>
                Date : <span>{item.date}</span>
              </p>
              <p className={styles.type}>
                Test Type : <span>{item.testType}</span>
              </p>
              <div className={styles.main__div__buttons}>
                <button
                  onClick={() => dropDownToggle(item._id)}
                  className={styles.check}
                >
                  Check
                </button>
                <button
                  onClick={() => deleteResult(item._id)}
                  className={styles.delete}
                >
                  Delete
                </button>
              </div>
            </div>
            {dropDownId === item._id && (
              <div className={styles.dropdown__div} onClick={hideDropDown}>
                <div>
                  <label>Test-Date</label> <p> {item.date}</p>
                </div>
                <hr />
                <div>
                  <label>Test-TYPE</label> <p> {item.testType.toUpperCase()}</p>
                </div>
                <hr />
                <div>
                  <label>Test-Id</label> <p> {item.testId.toUpperCase()}</p>
                </div>
                <hr />
                <div>
                  <label>Test-Result </label>
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
