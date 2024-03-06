import { ReactNode, useState } from "react";
import logo from "src/assets/logo.svg";
import SearchIco from "src/assets/icons/lens.svg?react";
import MenuIco from "src/assets/icons/menu.svg?react";
import notificationsSrc from "src/assets/icons/notifications.svg";
import localeSrc from "src/assets/icons/locale.svg";

import styles from "./Layout.module.scss";
import { Menu } from "./menu/Menu";

interface IProps {
  children: ReactNode;
}

export const Layout = ({ children }: IProps) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const toggleMenu = () => setIsMenu((v) => !v);

  return (
    <div className={`${styles.layout} ${isMenu ? styles.layout__menu : ""}`}>
      <header className={styles.layout__header}>
        <div className={styles.layout__logo}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>

          <button type="button" className={styles.layout__searchBtn}>
            Search
            <SearchIco />
          </button>
        </div>

        {isMenu && (
          <div className={styles.layout__statusBar}>
            <a href="/">
              <img src={notificationsSrc} alt="notifications" />
            </a>

            <button type="button" className={styles.layout__locale}>
              <img src={localeSrc} alt="locale" />
            </button>
          </div>
        )}
      </header>

      <div className={styles.layout__page}>{isMenu ? <Menu /> : children}</div>

      <footer className={styles.layout__footer}>
        <button type="button" className={styles.layout__signin}>
          Sign in
        </button>

        <button
          type="button"
          className={styles.layout__menuBtn}
          onClick={toggleMenu}
        >
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
