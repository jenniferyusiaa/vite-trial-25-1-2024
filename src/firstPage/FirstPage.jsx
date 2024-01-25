import styles from "./firstPage.module.css";
import Header from "/src/firstPage/header/Header.jsx";

const FirstPage = () => {
  return (
    <div className={styles.firstPage}>
      <Header />
    </div>
  );
};

export default FirstPage;
