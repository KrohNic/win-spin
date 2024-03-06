import styles from "./Bonus.module.scss";
import { IBonus } from "../bonus.types";
import triangleSrc from "src/assets/icons/triangle.svg";

interface IBonusProps extends IBonus {
  checked?: boolean;
  onClick: () => void;
}

export const Bonus = ({
  id,
  checked = false,
  label,
  imgSrc,
  bgSrc,
  onClick,
}: IBonusProps) => {
  return (
    <label
      className={styles.bonus}
      style={{ backgroundImage: `url("${bgSrc}")` }}
      onClick={onClick}
    >
      <div className={styles.bonus__cardContent}>
        <img src={imgSrc} alt="bonus image" />

        {label}
      </div>

      <input type="radio" name="bonus" id={id} defaultChecked={checked} />

      {checked ? (
        <div className={styles.bonus__checked}>
          <div className={styles.line} />

          <img
            width={12}
            src={triangleSrc}
            alt="select icon"
            className={styles.arrow}
          />
        </div>
      ) : (
        <div className={styles.cardRadio}></div>
      )}
    </label>
  );
};
