import type { ReactNode } from "react";

export type TBonus = null | "welcome" | "none" | "first";

export interface IBonus {
  id: Exclude<TBonus, null>;
  imgSrc: string;
  bgSrc: string;
  label: ReactNode;
}
