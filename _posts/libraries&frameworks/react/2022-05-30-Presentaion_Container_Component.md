---
classes: medium
title: "Presentaional & Container Components"
excerpt: ""

categories:
  - React
tags:
  - []

toc: true 
toc_sticky: true
show_date: true
read_time: false

date: 2022-05-30
last_modified_at: 2022-05-30
---

예전 리덕스 공식 문서를 보면 리액트에 리덕스를 적용할 때 컴포넌트를 `Presentaional Component` 와 `Container Componnet` 로 구분하는 패턴을 권장했다.

이게 뭔지 좀 알아봤다.

<BR>

## Presentational Component

- 어떻게 보여지는 지를 책임진다. (DOM 마크업과 스타일 담당)
- props와 콜백으로 데이터를 받아와 UI를 구현한다. (데이터 처리 능력 없음)
- 데이터를 불러오거나 변경하는 작업은 `Presentational Component`에서 하지 않는다.
- 상태(state)는 UI 상태를 관리하기 위해서만 갖게된다.
- 어플리케이션의 나머지 부분에 대해 아무런 의존성을 가지지 않는다. (Redux와 관련 없음)

<br>

## Container Component

- 어떻게 동작해야 할지를 책임진다. (동작 로직)
- UI 데이터를 props로 `Presentational Component`에 전달한다.
- 상태(state)를 저장하고 다른 `Container Component`와 `Presentatinal Component`에 제공한다.

<BR>

## 그래서 장점이...👀?

- 관심사의 분리가 쉽다.<BR>해당 방식으로 코드 작성시 UI 랜더 영역과 데이터 영역을 분리하기 용이하다.
  - 기본적으로 `Presentational Component`가 UI를 담당하므로 앱의 로직을 변경하지 않고도 디자인 변경에 따른 UI 변경이 쉽다.
- 재사용성이 쉽다.<BR>여러 다른 상태하에 동일한 `Presentational Component`를 재사용할 수 있다.

<BR>

## 단점은요...🤔?

(님들은 이제 읽은게 헛수고가 되었습니다😑)

- 해당 패턴은 클래스형 컴포넌트를 사용할 때 유용하다.
  - hooks 를 활용한 함수형 컴포넌트를 사용한다면 `useSelector`를 사용해 직접적으로 store에 접근하는 것이 권장된다. 왜냐하면 주어진 상태가 변경될 때 렌더링해야 하는 구성 요소가 더 적기 때문이다.
  - 만약 A container 에서 프롭스로 B, C, D presentational component로 데이터를 내려주는 형태라면 A의 상태가 변경될 때 B, C, D가 모조리 재랜더링 되지만 각각 B, C, D 컴포넌트가 따로 store를 구독하고 있다면 다른 컴포넌트의 랜더링에 영향을 주지 않기 때문이다.
  - 댄 아브라모브 또한 이제(2019년 기준) 이 패턴을 권장하지 않는다고 한다.
    - 출처: [https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0){:target="_blank"}
  - [리덕스 공식 문서의 스타일 가이드](https://redux.js.org/style-guide/#use-the-react-redux-hooks-api){:target="_blank"}
    - 대충 요약: `connect` 사용할 때는 HOC로 컴포넌트를 감싸서 이 패턴이 괜찮았'었'음

<BR>

## 내 생각

과거 리덕스 공식 문서에 적혀있었지만 현재는 사라지게 되어 왜 사라졌는지 궁금해져서 찾아보게 되었다.<BR>자주 사용하는 패키지의 공식 문서를 다 읽었다고 지나치면 안된다는 교훈을 얻었다.<BR>인쇄물이 아니라 업데이트가 바로바로 반영이 되는 점이 참 마음에 든다.<BR>(자주 봐야한다는 단점이 있지만😥)


**참고 자료**

[Redux Style Guide](https://redux.js.org/style-guide/){:target="_blank"}<BR>
[https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0){:target="_blank"}<BR>
[https://blog.naver.com/PostView.nhn?blogId=backsajang420&logNo=221368885149&categoryNo=77&parentCategoryNo=0](https://blog.naver.com/PostView.nhn?blogId=backsajang420&logNo=221368885149&categoryNo=77&parentCategoryNo=0){:target="_blank"}<BR>
[https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/redux-tutorial/04-container-and-presentational/container-and-presentational-kr.html](https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/redux-tutorial/04-container-and-presentational/container-and-presentational-kr.html){:target="_blank"}<BR>
