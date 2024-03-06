import { useState } from "react";
import styles from "./Deposit.module.scss";
import { Bonus } from "./bonus/Bonus";
import welcomeBonusSrc from "src/assets/images/welcome-bonus.png";
import welcomeBonusBgSrc from "src/assets/bg/red-bonus.svg";
import firstBonusSrc from "src/assets/images/first-bonus.png";
import firstBonusBgSrc from "src/assets/bg/purple-bonus.svg";
import noneBonusSrc from "src/assets/images/no-bonus.png";
import noneBonusBgSrc from "src/assets/bg/blue-bonus.svg";
import type { IBonus, TBonus } from "./bonus.types";

const bonusesIds: Exclude<TBonus, null>[] = ["welcome", "first", "none"];

const bonuses: Record<Exclude<TBonus, null>, IBonus> = {
  welcome: {
    id: "welcome",
    imgSrc: welcomeBonusSrc,
    bgSrc: welcomeBonusBgSrc,
    label: (
      <div>
        Welcome bonus
        <div className="highlighted">100% up to €500 +120 FreeSpins</div>
      </div>
    ),
  },
  first: {
    id: "first",
    imgSrc: firstBonusSrc,
    bgSrc: firstBonusBgSrc,
    label: (
      <div>
        First Deposit Bonus
        <div className="highlighted">100% up to €500 +120 FreeSpins</div>
      </div>
    ),
  },
  none: {
    id: "none",
    imgSrc: noneBonusSrc,
    bgSrc: noneBonusBgSrc,
    label: (
      <div>
        No Bonus
        <div className="highlighted">I do not want a Welcome bonus</div>
      </div>
    ),
  },
};

export const Deposit = () => {
  const [bonus, setBonus] = useState<TBonus>("welcome");

  const onChangeBonus = (value: TBonus) => setBonus(value);

  return (
    <div className={styles.deposit}>
      <div className={styles.deposit__bg} />

      <form className={styles.deposit__content}>
        <h2 className={styles.deposit__title}>Deposit and play</h2>

        {bonus === null ? (
          <div className={styles.deposit__bonuses}>
            {bonusesIds.map((b) => (
              <Bonus
                key={bonuses[b].id}
                {...bonuses[b]}
                onClick={() => onChangeBonus(b)}
              />
            ))}
          </div>
        ) : (
          <>
            <Bonus
              {...bonuses[bonus]}
              onClick={() => onChangeBonus(null)}
              checked
            />

            <div className={styles.deposit__selectors}>
              <select name="country" className={styles.deposit__select}>
                <option value="">Argentine Peso</option>
                <option value="">Australian Dollar</option>
                <option value="">Baht</option>
                <option value="">Brazillian Real</option>
                <option value="">Bulgarian Lev</option>
              </select>

              <select name="currency" className={styles.deposit__select}>
                <option value="">Argentine Peso</option>
                <option value="">Australian Dollar</option>
                <option value="">Baht</option>
                <option value="">Brazillian Real</option>
                <option value="">Bulgarian Lev</option>
              </select>
            </div>

            <button type="submit" className={styles.deposit__submit}>
              Start with your 100% bonus
            </button>
          </>
        )}
      </form>
    </div>
  );
};
