import styles from "./Slider.module.scss";
import winnersSrc from "src/assets/images/winners.png";
import sonofegyptSrc from "src/assets/images/sonofegypt.png";

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__topBg} />

      <div className={styles.slider__middleBg} />

      <div className={styles.slider__bottomBg} />

      <div className={styles.slider__content}>
        <img src={winnersSrc} alt="winners logo" />

        <h3 className={styles.slider__title}>
          Recent <br />
          <span className="highlighted">winners</span>
        </h3>

        <div className={`${styles.slider__card} ${styles.slider__card_active}`}>
          <div>
            Robert - €18.75 in
            <span className="highlighted"> Sun of Egypt</span>
          </div>

          <img src={sonofegyptSrc} alt="son of egypt" />
        </div>

        <div className={styles.slider__card}>
          <div>
            Robert - €18.75 in
            <span className="highlighted"> Crystal Fruits</span>
          </div>

          <img src={sonofegyptSrc} alt="son of egypt" />
        </div>
      </div>
    </div>
  );
};
