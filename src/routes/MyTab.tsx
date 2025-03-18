import React from "react";
import { AUTH, MY } from "../contextApi";
import { twMerge } from "tailwind-merge";

const targets: MY.Target[] = ["기본정보", "비밀번호변경", "환경설정"];
const MyTab = () => {
  const { target, changeTarget } = MY.store();

  return (
    <aside className="border-r border-border dark:border-darkBorder">
      <ul className="">
        {targets.map((item) => (
          <li key={item}>
            <button
              onClick={() => changeTarget(item)}
              className={twMerge(
                target === item && "text-theme",
                "hover:shadow-none items-start w-full"
              )}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default MyTab;
