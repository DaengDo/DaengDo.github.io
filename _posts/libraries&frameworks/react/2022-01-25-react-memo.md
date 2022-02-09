---
classes: wide
title: "그냥 생각난 개념 메모"
excerpt: ""

categories:
  - React
tags:
  - [Frontend]

toc: true 
toc_sticky: true
show_date: true
read_time: false

date: 2022-01-25
last_modified_at: 2022-01-25
---

정리 나중에

- props는 객체로만
- default props는 `Component.defaultProps = {객체}`
- 컴포넌트 태그 사이에 넣은 값 조회는 props.children
- 리엑트에서 이벤트 다룰 때 `on이벤트이름 = {실행하고싶은함수}`
- useRef
  - 리엑트에서 돔 요소 접근
  - 컴포넌트 안에서 조회 및 수정할 수 있는 변수 관리
- key 안적을 때 경고 메시지 출력하는 이유
  - 배열 업데이트될 때 효율적으로 렌더링하기 위해서
- 리렌더링 되는 조건
  - state 변경이 있을 때
    - 해당 state를 사용하는 컴포넌트들 중 가장 최상위 컴포넌트에 선언
    - 객체 타입의 state는 최대한 분할하여 선언(사용하지 않는 다른 프로퍼티의 값이 업데이트 될 때에 리렌더링 일어나는 것 방지)
  - props가 업데이트 됐을 때
  - 부모 컴포넌트가 렌더링 될 때
