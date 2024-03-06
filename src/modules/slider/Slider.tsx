import styles from "./Slider.module.scss";

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__topBg} />

      <div className={styles.slider__middleBg} />

      <div className={styles.slider__bottomBg} />

      <div className={styles.slider__content}>
        <img src="src/assets/images/winners.png" alt="winners logo" />

        <h3 className={styles.slider__title}>
          Recent <br />
          <span className={styles.slider__highlighted}>winners</span>
        </h3>

        <div className={`${styles.slider__card} ${styles.slider__card_active}`}>
          <div>
            Robert - €18.75 in
            <span className={styles.slider__highlighted}> Sun of Egypt</span>
          </div>

          <img src="src/assets/images/sonofegypt.png" alt="son of egypt" />
        </div>

        <div className={styles.slider__card}>
          <div>
            Robert - €18.75 in
            <span className={styles.slider__highlighted}> Crystal Fruits</span>
          </div>

          <img src="src/assets/images/sonofegypt.png" alt="son of egypt" />
        </div>
      </div>
    </div>
  );
};
