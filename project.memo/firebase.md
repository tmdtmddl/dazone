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

snapshot=>database에 요청하는 순간을 찰칵 찍어서 보여줌

onSanpshot()

snap=>snap으로 데이터 가공 처리

Listen -> Listensr를 만드는 과정
+useEffect쓰면 실시간으로 감지 가능, useState로 한 번 받아오는 것만 해두면 수정, 삭제, 추가할때 리액트에서는 신경 안써도됨

//단점: 실시간으로 감지하고 있으면 서버비용이 늘어남

데이터 가져오는 함수 만들기
API처럼 스려고 하는 거임 + react query조합 나쁘지 않음
const snap = await db.collection(컬렉션이름).get() //배열의 형태로 저장되는 자료
const data = snap.docs.map(doc=>({...doc.data()}))

//특정 데이터 하나만 가져오기
const snap =await db.collection(컬렉션이름).doc(객체아이디).get()//객체임
const data =snap.data()
```

2. Create 쓰기 추가

```javascript
//문자열을 저장하고 싶다?->객체로 만들어서 저장
 await db.collection(컬렉션이름).add(객체)//배열의 형태로 저장되는 자료
 //컬렉션 안에 들어갈 아이템(객체)를 문서라고 불름
 .add 하면 문서 아이디 안만들어도 됨 자동 생셩 해줌 -> 아이디를 만들 필요 ㄴㄴ

 sanp.docs.map()


//특정 데이터 하나만 가져오기 객체의 형태로 가져옴
await db.collection(컬렉션이름).doc(객체아이디).set(객체) //객체임
//내가 임의로 정한 아이디를 씀. 어떤 문서인지를 정확하게 짚어주는거임
바꿔치기

```

3. Update 수정하기

```javascript
//수정하는 아이템의 아이디가필수임. 랜덤한 것을 수정할 수 없기 때문
await db.collection(컬렉션이름).doc(객체아이디).set(새로운값);
//새로운값으로 덮어씀
await db.collection(컬렉션이름).doc(객체아이디).update(새로운값);
//새로운값만 적용해줌
//없는 값이면 추가해줌

await db.collection(컬렉션이름).doc(객체아이디).update({ 수정대상: 수정값 });
//없는 대상이면 추가 해줌
//수정대상 국한적으로 수정해줌
```

4. DELETE 삭제

```javascript
//삭제할 아이템의 아이디가필수임. 랜덤한 것을 삭제할 수 없기 때문
await db.collection(컬렉션이름).doc(객체아이디).delete();
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
