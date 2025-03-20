# 파이어베이스

    - 서버만들기 어렵거나 귀찮을 때 프론트에서 다 하려고 만듬

    - 백,프론트 상의 필요없이 프론트에서 다 짜면 됨

1. 영구성 부여를 위한 자료를 데이터베이스에 저장

   MySQL, PosgerQL, LiteSQL, SQ(sequel)씨쿠얼 -> Table 베이스의 Relational RDB column + row
   백엔드( 프론트엔드에서 사용 불가) -> 서버 내용을 안전하게 보관하기 위함

   java Spring Boot, RastApi, deno, C#, .NET

   firebase / mongoDB -> NoSQL => 배열 + 객체 형태로 저장
   node js + express js 서버

   RESTfull API =>api call

2. 인증 과정에서 비번관리를 대신 해줌

3. 저장공간

   이미지, 영상, 기타 등등의 파일을 저장 함 용량이 커서 짱박아둘 곳이 필요함 -> 파이어베이스에서 5GB 대여해줌 개꿀

## 데이터베이스 firestore다루기

1. READ 읽기

```javascript

snapshot => database 요청을 하는 순간을 찰칵 찍어서 보여줌

onSnapshot()


snap => snap으로 데이터 가공 처리

Listen -> Listener를 만드는 과정
+ useEffect 쓰면 실시간으로 감지 가능, useState로 한번 받아오는 것만 해두면 수정, 삭제, 추가할때 리액트에서는 신경 안써도 됨

// 단점: 실시간으로 감지하고 있으면 서버 비용이 늘어남

데이터 가져오는 함수 만들기
API 처럼 쓰려고 하는 거임 + react query 조합 나쁘지 않음


const snap = await db.collection(컬랙션이름).get()
// 배열의 형태로 저장되는 자료
const data = snap.docs.map(doc => ({...doc.data()})) // 특정 데이터 하나만 가져오기 객체의 형태로 가져옴
const snap = await db.collection(컬랙션이름).doc(객체아이디).get()

const data = snap.data( )

```

2. Create 쓰기 추가

```javascript
// 문자열을 저장하고 싶다? -> 객체로 만들어서 저장
await db.collection(컬랙션이름).add(객체);
//  컬렉션 안에 들어갈 아이템 (객체)를 문서라고 부름
.add 하면 문서 아이디 안만들어도 됨 자동 생성 해줌 -> 아이디를 만들 필요 ㄴㄴ

snap.docs.map(doc => ({...doc.data(), id: doc.id}))

// 특정 데이터 하나만 가져오기 객체의 형태로 가져옴
await db.collection(컬랙션이름).doc(객체아이디).set(객체);
// 내가 임의로 정한 아이디를 씀. 어떤 문서인지를 정확하게 짚어주는 거임
바꿔치기임.덮어쓰기
doc(id).set(새로운 값)

id => 새로운 값

```

3. Update 수정하기

```javascript
// 수정하는 아이템의 아이디가 필수임. 랜덤한 것을 수정할 수 없기 때문
await db.collection(컬랙션이름).doc(객체아이디).set(새로운값);
// 새로운 값으로 덮어씀
await db.collection(컬랙션이름).doc(객체아이디).update(새로운값);

//  새로운값만 적용해줌

await db.collection(컬랙션이름).doc(객체아이디).update({ 수정대상: 수정값 });
//  없는 값이면 추가 해줌
// 수정대상 국한적으로 수정해줌
```

4. DELETE 삭제

```javascript
// 삭제하는 아이템의 아이디가 필수임. 랜덤한 것을 삭제할 수 없기 때문
await db.collection(컬랙션이름).doc(객체아이디).delete();
```

MERN
MongoDB + Express + React + Node
mongoose js library

PERN
PostgreSQL + Express + React + Node
prisma js library

DB + NextJs
React + Server

Supabase + MongoDb + Firebase + Redis + Next

Next (RRD 설치필요XX) SSR
Server. DB + front

RN
Ios ANDRPID api => Nextjs

REACT js

- Electron 데스크탑 프로그램 javascript -> React도 가능

## 인증 Auth 옷뜨 오쓰 (Authentication) 오뗀티케이션

비밀번호 관리가 귀찮아서 다른 곳에 맡김
3rd Party Auth라고 부름 OAuth

firebase 제 3자 인증업체 -> 제 4제에게 인증을 한 번 더 요청할 뿐

1. 유저 감지하기

useEffect + auth.onAuthStateChanged를 사용해서 유저에 uid를 받아오는 방식을 취함
uid로 파이어스토어에 있는 특정 user를 가져오면됨

```javascript

onAuthStateChanged(
    firebaseUser => {
        if(firebaseUser) =. {
            fetchUser(firebaseUser.uid)
        }
    }
)

const fetchUser = async (uid: string) => {
    const snpa = await db.collection(유저컬렉션).doc(uid).get()
    if(!snap){
        return no-user
    }

    const user = snap.data()
    if(!user){
        return no-user
    }
    return user
}

```

2. 회원가입

인증의 회원가입기능을 통해서 회원가입 후 회원정보는 별도로 데이터베이스에 저장함

```javascript
// 로그인
auth.signInWithEmailAndPassword(); // 비슷한 이름찾기

// 회원가입
auth.createUserWithEmailAndPassword(); // 비슷한 이름찾기

//비번 변경
if (auth.currentUser) {
  await auth.currentUser.updatePassword(새로운비번);
}

// 회원 탈퇴
if (auth.currentUser) {
  await auth.currentUser.delete();
  await db.ref.delete();

  // 회원탈퇴를 결심하고 진행하지만 1주일 뒤에 돌아올 수 있음
  // 정보를ㄹ 바로 삭제하지 않고 회원탈퇴 후 30ㅇ일또는 일정 기간 동안 자룔를 보관하고 있다가
  //  기간내에 돌아오면 누구누구님 돌아오셨군요. 회원정보는 이러이러한데 일치하신가요? 라고 물어볼수 있음

  const snap = await ref.get();
  const 유저정보 = snap.data();
  await db.collection(삭제된유저컬렉션).doc(auth.currentUser.uid).set(유저정보); // CREATE
  // 위에서 할것들 다하고 아래코드 실행

  await ref.delete();
}
```

### fireStorage 5GB 무료

5GB까지 무료, 그이상은 과금 됨
과금이 되야 먹고살기 때문에 신용카드 정보 입력해야 사용 할 수 있음
Spark 요금제에서 Blaze 요금제로 이동해야만함

Blaze요금제
**무료요금제 용량 차고 넘침**

한글기준 1글자의 용량 = 3bytes ex)가=3바이트 ,가나=6바이트
기본 이미지 사이즈 =1 Mb = 105만 bytes = 35만개의 글자와 동일

너무 크고 항상 불러오는 데이터가 아닌 사진,영상들을 따로 모아두는 곳

```javascript
const storageRef = store.ref(주소값);
주소값 = 유저아이디 + 폴더이름 + 아이템아이디;
// uid/folder/itemId
// uid/profile/profile_img

import { updloadBytes, getDownloadURL } from "firebase/storage";

await uploadBytes(storageRef, 이미지 / 영상 / 파일);

const url = await getDonwnloadURL(storageRef);

await db.collection(파일컬렉션).doc(아이템아이디).set({ url });

// url을 깜빡했을 떄 ?? 찾기가 어려우 ㅁ그래서 꼭 저장하는 규칙을 정확하게 세우거나 db에 저장하기
const ref = storage.ref(유저아이디 / 폴더 / 아이템아이디) ??
//! 귀찮음 그래서 무조건 저장할 때 많은 사항들을 고려해서 설계하기!

files => for (const item of items) {
    const path = `${uid}/products/${pid}ung${index + 1}`
    index ++
}
//uid/products/pid/img1
//uid/products/pid/img2
//uid/products/pid/img3
//uid/products/pid/img4
```
