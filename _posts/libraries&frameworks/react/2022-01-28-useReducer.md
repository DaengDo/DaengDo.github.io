---
classes: wide
title: "[Hooks] useReducer"
excerpt: ""

categories:
  - React
tags:
  - [Frontend, Hooks]

toc: true 
toc_sticky: true
show_date: true
read_time: false

date: 2022-01-28
last_modified_at: 2022-01-28
---

reducer는 현재 상태와 액션 객체를 파리미터로 받아와서 새로운 상태를 반환해주는 함수다.

```js
import { useReducer } from 'react';

const [state, dispatch] = useReducer(reducer, intialState, init);
```

- `state`는 앞으로 컴포넌트에서 사용 할 수 있는 상태다.
- `dispatch`는 액션을 발생시키는 함수다. dispatch 함수는 다음과 같다. `dispatch({ type: 'ADD_TODO'})`
- `reducer` 와 `intialState` 는 문자 그대로 리듀서와 초기 상태이다.



**참고 자료**

https://ko.reactjs.org/docs/hooks-reference.html#usereducer