# Input

많이 사용하는 TextInput과 ref 조합을 커스텀 훅으로 만듬

외부에서도 TextInput 안을 조직할수 있도록 useImperativeHandle 훅을 사용함

기본 타입으로 한정적으로 몇 가지 값만 받아도록 설계하였으나 추후 확장성을 고려하여 props에 인풋 내용 받아올수 있도록 설계 변경

**onChangeText**

onChange라는 함수에 e.target.value를 전달하는 과정이 많이 중복되서 다른 이름의 함수를 만들어서 사용함.

# FORM

많은 form 태그를 사용할 것이 뻔한데 반복적으로 e.preventDefault 하기 귀찮아서 만듬

기본 스타일로 플렉스와 갭을 적용 해둠,

확장성을 고려하여서 props 전체를 받아오도록 설계

twMerge 사용해서 외부에서 Form을 쓸 때 클래스 적용할 수 있도록 함
