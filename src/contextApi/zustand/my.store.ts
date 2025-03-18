import { create } from "zustand";
export type Target = "기본정보" | "비밀번호변경" | "환경설정";
export interface Props {
  target: Target;
  changeTarget: PropsFunc<Target>;
}

export const store = create<Props>((set) => ({
  changeTarget: (newTarget) => set((prev) => ({ ...prev, target: newTarget })),
  target: "기본정보",
}));
