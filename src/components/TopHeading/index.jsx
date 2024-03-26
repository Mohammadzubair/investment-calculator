import styles from "./TopHeading.module.scss";
import topImg from "../../assets/investment-calculator-logo.png";

const TopHeading = () => {
  return (
    <div className={styles.mainTopHeadingBox}>
      <img
        className={styles.topImg}
        src={topImg}
        alt="Money bag logo showing"
      />
      <h2 className={styles.topHeading}>Investment Calculator</h2>
    </div>
  );
};

export default TopHeading;
