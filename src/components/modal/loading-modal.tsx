import styles from "./loading-modal.module.scss";

const LoadingModal = (props:{title:string;image:string}) => {
  const {title, image} = props
  return (
    <div className={styles.loading}>
      <div className={styles.loading__background}> </div>
      <div className={styles.loading__main}>
        <h1> {title}</h1>
        <img src={image} />
      </div>
    </div>
  );
};

export default LoadingModal;
