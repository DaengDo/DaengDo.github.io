---
classes: wide
title: "[Hooks] useCallback"
excerpt: ""

categories:
  - React
tags:
  - [Frontend, Hooks]

toc: true 
toc_sticky: true
show_date: true
read_time: false

date: 2022-01-26
last_modified_at: 2022-01-26
---

`useMemo`는 특정 값을 재사용하기 위해 사용하는 훅이고 `useCallback`은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용한다.

생각해보니 한번 만든 함수를 리렌더링 될 떄 마다 새로 사용하는 것을 알고있었는데도 최적화할 생각을 못했었다.

컴포넌트의 `props` 가 바뀌지 않으면 `virtual DOM` 에 새로 렌더링하는 것 조차 하지 않고 컴포넌트의 결과물을 재사용하는 최적화 작업을 하는데 꼭 필요한 과정이다.

첫 번째 파라미터에 들어가는 함수는 메모이제이션할 재사용 함수이고, 두 번째 파라미터에 들어가는 배열 값은 첫 번째 함수(콜백)안에서 참조되는 모든 값이다.

## 기본형태
```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

- 첫 번째 인수에 재사용할 함수를 넣는다.
- 두 번째 인수에는 콜백(첫 번째 인수에 넣은 함수) 안에서 참조되는 모든 값이 배열에 있어야 한다.
- `useCallback(fn, deps)은 useMemo(() => fn, deps)`와 같다.


**참고 자료**

https://react.vlpt.us/basic/18-useCallback.html<br>
https://ko.reactjs.org/docs/hooks-reference.html#usecallback