// import { useState } from "react";
// import useTextInput from "./ui/useTextInput";
// import useSelect from "./ui/useSelect";

// const App = () => {
//   const [props, setProps] = useState({
//     email: "asdfasdf@asdfas.com",
//     password: "123123",
//     purpose: "",
//   });

//   const Email = useTextInput();
//   const Password = useTextInput();
//   const Purpose = useSelect();

//   return (
//     <div>
//       <Email.Component
//         id="email"
//         onChange={(email) => setProps((prev) => ({ ...prev, email }))}
//         title="이메일"
//         value={props.email}
//         inputProps={{ type: "email" }}
//       />
//       <Password.Component
//         id="password"
//         onChange={(password) => setProps((prev) => ({ ...prev, password }))}
//         title="비밀번호"
//         value={props.password}
//         inputProps={{ type: "password" }}
//       />
//       <Purpose.Component
//         id="p"
//         onSelect={(p) => setProps((prev) => ({ ...prev, purpose: p }))}
//         options={["그냥", "재미", "공부", "직업"]}
//         placeholder="목적을 선택하세요."
//         title="가입목적"
//         value={props.purpose}
//       />

//       <button onClick={() => Email.focus()}>focus email</button>
//       <button onClick={() => Password.focus()}>focus password</button>
//       <button onClick={() => Purpose.show()}>focus purpose</button>
//     </div>
//   );
// };

// export default App;

// import {
//   useState,
//   useEffect,
//   useRef,
//   useCallback,
//   Ref,
//   useImperativeHandle,
//   Component,
//   ComponentRef,
// } from "react";

// const App = () => {
//   const [props, setProps] = useState({
//     vlaue1: "",
//     value2: "",
//   });
//   const ref = useRef<HTMLInputElement>(null);

//   const onSubmit = useCallback(() => {
//     console.log(ref.current?.value);
//     if (ref.current?.value.length === 0) {
//       alert("입력하세요.");
//       return ref.current?.focus();
//     }
//   }, []);
//   return (
//     <form
//       action=""
//       onSubmit={(e) => {
//         e.preventDefault();
//         onSubmit();
//       }}
//     >
//       <Input ref={ref} />
//       <Input ref={ref} />
//       <Input ref={ref} />
//       <Input ref={ref} />
//       <Input ref={ref} />
//       <button>checks</button>
//     </form>
//   );
// };

// export default App;

// const Input = ({ ref }: { ref: any }) => {
//   return <input type="text " ref={ref} />;
// };
// const useInput =()=>{

// }

// const Componen1 =({ref}:{ref:Ref<ComponentRef>})=>{
// const V1 = useInput ()
// const V2 = useInput ()
// const V3 = useInput ()
// const V4 = useInput ()
// }

// import React from "react";
// import { myFn, useS } from "./hooks";

// const App = () => {
//   const { value, setValue, message } = useS();
//   return (
//     <form action="">
//       <input type="text" />
//       <button>checks</button>
//     </form>
//   );
// };

// export default App;

// import { useState } from "react";
// import useMyInput, { Component } from "./sample/ui/useMyInput";

// const App = () => {
//   const [signup, setSignup] = useState({ email: "", password: "" });
//   const Email = useMyInput();
//   const Password = useMyInput();
//   return (
//     <form
//       action=""
//       onSubmit={(e) => e.preventDefault()}
//       className="flex gap-x-2"
//     >
//       <Email.Component
//         onChange={(email) => setSignup((prev) => ({ ...prev, email }))}
//         value={signup.email}
//       />
//       <Password.Component
//         onChange={(password) => setSignup((prev) => ({ ...prev, password }))}
//         value={signup.password}
//       />

//       <button className="bg-amber-300">추가</button>
//     </form>
//   );
// };

// export default App;
