import styles from "./ModalWindow.module.css";
import Instructions from "./Instructions.atom";

const ModalWindow = () => {
  return (
    <div className={styles.woodBox}>
      <Instructions />
    </div>
  );
};

export default ModalWindow;