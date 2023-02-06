import styles from "./loading-modal.module.scss";

const LoadingModal = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__background}> </div>
      <div className={styles.loading__main}>
        <h1> Getting Test Results...</h1>
        <img src="/images/loading/icons8-corgi.gif" />
      </div>
    </div>
  );
};

export default LoadingModal;
