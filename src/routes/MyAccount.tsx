import { AUTH } from "../contextApi/context";
import AuthPage from "./Auth.page";
import { MY } from "../contextApi";
import MyMain from "./MyMain";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import MyTab from "./MyTab";
import MyBasicInfo from "./MyBasicInfo";
import MyPassword from "./MyPassword";

const MyAccount = (user: User) => {
  const { target } = MY.store();
  const content = useSearchParams()[0].get("content");

  // const [target, setTarget] = useState("");
  return !user ? (
    <AuthPage />
  ) : (
    <div className="flex " style={{ height: "calc(100vh - 61px" }}>
      {content}
      <MyTab />

      <main>
        {
          {
            기본정보: <MyBasicInfo {...user} />,
            비밀번호변경: <MyPassword {...user} />,
          }[target]
        }
      </main>
    </div>
  );
};

export default MyAccount;
