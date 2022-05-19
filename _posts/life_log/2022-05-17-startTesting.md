---
classes: medium
title: "테스트 코드"
excerpt: ""
categories:
  - LifeLog
tags:
  - [코드숨]

toc: true
toc_sticky: true # true로 해주면 목차가 스크롤을 따라 움직인다.
show_date: true
read_time: false

date: 2022-05-17
last_modified_at: 2022-05-20
# header: # 해더 이미지를 추가하면 opengraph 로 글이 링크 걸릴때 대표 이미지로 뜬다.
#   image: /assets/images/page-header-image.png
#   og_image: /assets/images/page-header-og-image.png
---

## jest

코드숨 3주 차 과제로 ui 영역에서 테스트 코드를 짜는 것에 대해 처음 접했다.<BR>
프론트엔드에서는 테스트하기 어렵고 잘 안한다는 얘기를 듣기만했는데 테스트 코드를 작성해서 통과하는 것을 보니 참 신기하다.

JS 생태계에서는 주로 jest 라는 라이브러리를 활용해 테스트를 작성하는 것 같다.(이하 관련 패키지 메모)

- `@types/jest`: 자동 완성과 티입스크립트를 위한 타입
- `babel-jset`: jest에서 ES6와 같은 문법을 사용하기 위해 바벨 사용
- `@testing-library/react`: react에서 jest로 가상돔을 테스트하게 도와줌(render를 제공해서 컴포넌트 테스트가 가능해진다.)
- `@testing-library/jest-dom`: jest의 mature를 확장시켜줌

다른 사람들의 코드를 살펴보는데 처음보는 `describe`, `context` 그리고 `it` 같은 메서드가 있었다. 그런데 import 하는 구문이 없어서 도대체 어느 라이브러리에서 갖고오는건지 왜 전역변수처럼 사용하는지 궁금했는데...

jest 문서에 따르면 test 파일에는 jest가 전역 변수로 모든 메서드와 객체를 불러오기 때문에 import 를 하지 않아도 된다고 한다.

> In your test files, Jest puts each of these methods and objects into the global environment. You don't have to require or import anything to use them.

BDD 테스트 코드 작성 패턴 중 하나인 `Describe`, `Context`, `It` 을 적용해야겠다.
- https://johngrib.github.io/wiki/junit5-nested/#describe---context---it-%ED%8C%A8%ED%84%B4
