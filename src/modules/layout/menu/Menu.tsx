import SearchIco from "src/assets/icons/lens.svg?react";
import GamesIco from "src/assets/icons/games.svg?react";
import PromotionsIco from "src/assets/icons/promotions-menu.svg?react";
import TournamentIco from "src/assets/icons/tournaments-menu.svg?react";
import DealersIco from "src/assets/icons/dealers.svg?react";
import LotteryIco from "src/assets/icons/lottery.svg?react";
import FameIco from "src/assets/icons/fame.svg?react";
import VipIco from "src/assets/icons/vip.svg?react";
import PaymentIco from "src/assets/icons/payment.svg?react";
import SupportIco from "src/assets/icons/suppotr.svg?react";
import styles from "./Menu.module.scss";
import { MenuItem } from "./menu-item/MenuItem";
import { ReactNode } from "react";

const items: { label: string; icon: ReactNode }[] = [
  {
    label: "Games",
    icon: <GamesIco />,
  },
  {
    label: "Promotions",
    icon: <PromotionsIco />,
  },
  {
    label: "Tournaments",
    icon: <TournamentIco />,
  },
  {
    label: "Live dealers",
    icon: <DealersIco />,
  },
  {
    label: "Lottery",
    icon: <LotteryIco />,
  },
  {
    label: "Hall of fame",
    icon: <FameIco />,
  },
  {
    label: "VIP",
    icon: <VipIco />,
  },
  {
    label: "Payment",
    icon: <PaymentIco />,
  },
  {
    label: "Support",
    icon: <SupportIco />,
  },
];

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__actions}>
        <button type="button" className={styles.menu__signup}>
          Register
        </button>

        <button type="button" className={styles.menu__signin}>
          Log in
        </button>
      </div>

      <div className={styles.menu__search}>
        <div className={styles.menu__searchIco}>
          <SearchIco />
        </div>

        <input
          type="search"
          placeholder="Game name or provider"
          className={styles.menu__searchInput}
        />
      </div>

      <div className={styles.menu__items}>
        {items.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};
