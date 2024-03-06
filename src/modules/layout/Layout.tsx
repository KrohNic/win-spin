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

        <main className={styles.layout__main}></main>
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
