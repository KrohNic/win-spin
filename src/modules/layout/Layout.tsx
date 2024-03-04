import logo from "@assets/logo.svg";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </header>
    </>
  );
};
