import { ReactNode } from "react";
import styles from "./MenuItem.module.scss";

interface IProps {
  label: string;
  icon?: ReactNode;
}

export const MenuItem = ({ label, icon }: IProps) => {
  return (
    <button type="button" className={styles.item}>
      <div className={styles.item__ico}>{icon}</div>

      {label}
    </button>
  );
};
