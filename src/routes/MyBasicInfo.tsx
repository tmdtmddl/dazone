import { useCallback, useMemo, useRef, useState, useTransition } from "react";

import { Form, TextInput, TextInputRef } from "../ui";
import { db, FBCollection } from "../lib/firebase";

const MyBasicInfo = (user: User) => {
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user?.address ?? "");
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [idAddressEditing, setIdAddressEditing] = useState(false);

  const nameRef = useRef<TextInputRef>(null);
  const addressRef = useRef<TextInputRef>(null);

  const isNameDiff = useMemo(() => {
    if (name.length === 0) {
      return false;
    }
    if (name === user.name) {
      return false;
    }
  }, [name, user.name]);
  const isAddrDiff = useMemo(() => {
    if (address.length === 0) {
      return true;
    }
  }, [user.address, address]);

  const [isPending, startTransition] = useTransition();
  const ref = useMemo(
    () => db.collection(FBCollection.USERS).doc(user?.uid),
    [user]
  );
  const onChangeName = useCallback(
    () =>
      startTransition(async () => {
        try {
          if (name.length === 0) {
            return alert("이름입력이되지않았습니다.");
          }
          await ref.update({ name });
          alert("이름이 수정되었습니다.");
          setIsNameEditing(false);
        } catch (error: any) {
          alert(error.message);
        }
      }),
    [ref, name]
  );

  const onChangeAddress = useCallback(
    () =>
      startTransition(async () => {
        if (address.length === 0) {
          return alert("주소가 입력되지않았습니다.");
        }
      }),
    []
  );

  return (
    <div className="p-2">
      <h1>이메일: {user?.email}</h1>
      {isNameEditing && (
        <Form>
          <div>
            <TextInput
              id="name"
              label="이름"
              onChangeText={setName}
              ref={nameRef}
              value={name}
              placeholder={user.name}
            />
          </div>
          <div>
            <button>취소</button>
            <button>저장</button>
          </div>
        </Form>
      )}
      <p>이름: {user?.name}</p>

      <p>주소: {user?.address}</p>

      <button onClick={() => alert("uid copied")}>
        uid: {user?.uid ?? ""}
      </button>
      <button>{address ?? "주소를 입력해주세요."}</button>
      <Form>
        <div>
          <TextInput
            ref={addressRef}
            id="address"
            label="주소"
            onChangeText={setAddress}
            value={address}
            placeholder="내가살던고향은?"
          />
        </div>
        <div>
          <button onClick={() => setAddress(user?.address ?? "")}>
            초기화
          </button>
          <button>저장</button>
        </div>
      </Form>
    </div>
  );
};
export default MyBasicInfo;
