import logo from "src/assets/logo.svg";
import SearchIco from "src/assets/icons/lens.svg?react";
import MenuIco from "src/assets/icons/menu.svg?react";

import styles from "./Layout.module.scss";
import { Slider } from "../slider/Slider";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__bg}>
        <header className={styles.layout__header}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>

          <button type="button" className={styles.layout__searchBtn}>
            Search
            <SearchIco />
          </button>
        </header>

        <main className={styles.layout__main}>
          <div className={styles.layout__page}></div>

          <nav>
            <ul className={styles.layout__nav}>
              <a
                href="/"
                className={`${styles.layout__navBtn} ${styles.layout__slots}`}
              >
                <li>
                  <img src="src/assets/icons/slots.svg" alt="slots" />
                  Game slots
                </li>
              </a>

              <a
                href="/"
                className={`${styles.layout__navBtn} ${styles.layout__casino}`}
              >
                <li>
                  <img src="src/assets/icons/casino.svg" alt="casino" />
                  Live casino
                </li>
              </a>

              <a
                href="/"
                className={`${styles.layout__navBtn} ${styles.layout__promotions}`}
              >
                <li>
                  <img src="src/assets/icons/promotions.svg" alt="promotions" />
                  Promotions
                </li>
              </a>

              <a
                href="/"
                className={`${styles.layout__navBtn} ${styles.layout__tournaments}`}
              >
                <li>
                  <img
                    src="src/assets/icons/tournaments.svg"
                    alt="tournaments"
                  />
                  Tournaments
                </li>
              </a>
            </ul>
          </nav>
        </main>
      </div>

      <Slider />

      <footer className={styles.layout__footer}>
        <button type="button" className={styles.layout__signin}>
          Sign in
        </button>

        <button type="button" className={styles.layout__menuBtn}>
          Menu
          <div className={styles.layout__menuCircle}>
            <MenuIco />
          </div>
        </button>

        <button type="button" className={styles.layout__signup}>
          Sign up
        </button>
      </footer>
    </div>
  );
};
