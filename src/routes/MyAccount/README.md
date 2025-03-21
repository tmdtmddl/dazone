# 나의정보 페이지

zustand로 target을 관리 합니다.
조건부 렌더링으로 보여줄 모습을 다르게 할 수 있습니다.

환경설정 창 등으로 사용할 수 있습니다.

## 기본정보

1. 이름을 변경할 수 있습니다.

   이름을 선택했을 때만 인풋창이 나오고 포커스를 해줍니다. 취소하게 되면 원래 이름으로 돌아오고 저장을 할 때 원래 이름으로 돌아오고 저장을 할 때 원래 이름과 달라졌을 때만 작동 합니다.변경이 이루어지면 즉시 반영됩니다.

2. 주소도 변경할 수 있습니다.

   주소 값이 없을 때는 입력하라는 문구가 나오고 클릭 햇을 때 입력창이 나옵니다. 하지만 주소값은 없어도 문제가 안되기 때문에 값을 입력하기 시작하고 이전값과 다를 때에만 저장 버튼이 나오도록 구현했습니다.

## 비밀번호 변경

최근에 로그인 하지 않았다면 그 사이 사용자가 변경되었을 수도 있기 때문에 비밀번호와 같은 민감한 정보는 변경전에 한 번 더 로그인을 하도록 합니다.

현재 비밀번호를 입력하는 순간 저장된 유저 이메일을 가져와서 비밀번호와 맞는지 조회를 하면서 새로운 비번을 입력할 때는 다시 한 번 더 로그인 하는 귀찮은 과정을 생력했습니다.

## 상품 등록

아마존에 물건을 팔고 싶다면 이곳에서 상품의 이름,설명, 가격, 재고, 이미지를 첨부하여 등록하면 됩니다.

**상품이미지**

파일 업로드의 커스텀 스타일링의 한계로 인해 인풋창을 안보이게 하고 그 아래에 다른 태그를 써서 스타일링을 했습니다. 인풋창을 사라지게 하면 드래그 앤 드랍 기능이 사용되지 않아서 위의 방법을 채택했습니다.

여러개의 파일을 올릴 수 있도록 multiple 속성을 추가했고 이미지 파일들을 업로드 할 때 files 라고 하는 상태를 만들어서 관리했습니다.

files를 맵으로 뿌려서 시각적 재미 요소를 더했습니다. 첨부된 이미지를 클릭시에 files 에서 삭제되도록 구현했습니다.

상품을 등록 시 이미지들을 저장소에 업로드하고 url을 가져온 뒤 데이터베이스테 저장했습니다.

상품을 저장할 때 uid를 넣어서 본인의 아이템 인것을 알게 했습니다.

## 나의상품

위에 상기한 것처럼 uid값과 동일한 데이터를 가져오기 위해 where쿼리문을 사용했습니다. where(키워드,'==',값)

삭제 버튼을 구현한다면 해당 아이템의 id로 삭제하면 될 것 같습니다. 삭제할 때 이미지 파일도 삭제해줘야 하기 때문에 imgs에 있는 url을 이용하여 삭제할 예정입니다.
