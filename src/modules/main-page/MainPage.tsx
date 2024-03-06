import { Deposit } from "../deposit/Deposit";
import { Slider } from "../slider/Slider";
import slots from "src/assets/icons/slots.svg";
import casino from "src/assets/icons/casino.svg";
import promotions from "src/assets/icons/promotions.svg";
import tournaments from "src/assets/icons/tournaments.svg";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <main className={styles.main__main}>
        <div className={styles.main__page}>
          <Deposit />
        </div>

        <nav>
          <ul className={styles.main__nav}>
            <a
              href="/"
              className={`${styles.main__navBtn} ${styles.main__slots}`}
            >
              <li>
                <img src={slots} alt="slots" />
                Game slots
              </li>
            </a>

            <a
              href="/"
              className={`${styles.main__navBtn} ${styles.main__casino}`}
            >
              <li>
                <img src={casino} alt="casino" />
                Live casino
              </li>
            </a>

            <a
              href="/"
              className={`${styles.main__navBtn} ${styles.main__promotions}`}
            >
              <li>
                <img src={promotions} alt="promotions" />
                Promotions
              </li>
            </a>

            <a
              href="/"
              className={`${styles.main__navBtn} ${styles.main__tournaments}`}
            >
              <li>
                <img src={tournaments} alt="tournaments" />
                Tournaments
              </li>
            </a>
          </ul>
        </nav>
      </main>

      <Slider />
    </div>
  );
};
