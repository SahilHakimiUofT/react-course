import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.okHandler} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.error}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={styles.action}>
          <Button onClick={props.okHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
