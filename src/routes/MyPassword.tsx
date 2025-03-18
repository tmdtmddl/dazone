import React, { useCallback, useRef, useState, useTransition } from "react";
import { auth } from "../lib/firebase";
import { Form, TextInput, TextInputRef } from "../ui";

const MyPassword = (user: User) => {
  const [isPending, startTransition] = useTransition();
  const [password, setPassword] = useState("");
  const pwref = useRef<TextInputRef>(null);
  const newref = useRef<TextInputRef>(null);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const onChangePassword = useCallback(
    () =>
      startTransition(async () => {
        try {
          if (!user) {
            return alert("로그인하지 않았습니다.");
          }
          const res = await auth.signInWithEmailAndPassword(
            user.email,
            password
          );
          if (!res.user) {
            return alert("로그인하지 않았습니다.");
          }
        } catch (error: any) {
          return alert(error.message);
        }
      }),
    [password, user.email]
  );
  return (
    <div>
      {isPasswordCorrect ? (
        <Form onSubmit={onChangePassword}>
          <TextInput
            type="password"
            value={password}
            id="pw"
            label="현재비밀번호"
            onChangeText={setPassword}
            ref={pwref}
            placeholder="*********"
          />
        </Form>
      ) : (
        <Form onSubmit={onChangePassword}>
          <TextInput
            type="password"
            value={password}
            id="pw"
            label="비밀번호변경"
            onChangeText={setPassword}
            ref={pwref}
            placeholder="*********"
          />
        </Form>
      )}
    </div>
  );
};

export default MyPassword;
