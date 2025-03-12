# useImperativeHandle

1. ChildComponent 설계

```javascript
//자식컴포넌트
import { useImperativeHandle, Ref } from 'react'

interface ChildComponentProps {
    ...
}

export interface ChildRef {
    focus: () => void
    value: string;
    hello: () => void
}

function ChildComponent (props: ChildComponentProps, ref: Ref<ChildRef> ){
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus()
    value: 'child';
    hello: () => console.log('hello this is child')
    }))

    return (<input ref={inputRef} />)
}


-----------------------------------------------------

//부모컴포넌트
import { useRef} from 'react'
import { ChildRef } from './ChildComponent'


function ParentComponent (){
    const childRef = useRef<ChildRef>(null)

    const focusChildInput = () => childRef.current?.focus()

}
```

## custom Hook으로 input,select

1. rafce => return {}

2. 필요한 ref 선언하기

3. 컴포넌트등의 이름으로 리액트 컴포넌트를 바깥이 아닌 안에 선헝 위치:return{}위

4. 원하는 컴포넌트 만들기 필요한 프랍스드릴링은 별도로 만들어서 사용

5. 상단에 컴포넌트Props 만들면됨

6. return {ref,component,...변수,함수}
