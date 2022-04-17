---
classes: wide
title: "일렉트론에서 import 문 사용하기"
excerpt: ""

categories:
  - Electron
tags:
  - [Desktop]

toc: true 
toc_sticky: true
show_date: true
read_time: false

date: 2022-04-18
last_modified_at: 2022-04-18
---

타입스크립트 + 리액트 사용 중인 상황에서 일렉트론 메인 프로세스에서도 `import`문을 사용해서 코드를 작성하고 싶었는데 `electron .` 명령어로 실행시키면 `cannot use import statement` 에러가 뜨면서 `import`문을 사용할 수 없었던 문제점이 있었다.

마침 일렉트론 팀의 [타입 스크립트 보일러 플레이트](https://github.com/electron/electron-quick-start-typescript){:target="_blank"}가 있어 참고해보았다.

메인 프로세스를 TS 컴파일러로 컴파일하고 생성된 JS 파일을 `electron .` 하고 있었다.(아래처럼 씀)<BR>
`main.ts` -> (컴파일) -> `main.js` -> `main.js`를 실행

나는 `nodemon` 패키지로 메인 프로세스의 코드(`main.ts`)가 변경되면 바로 일렉트론을 재실행 시켜주는 작업 흐름이 마음에 드는데 컴파일 결과물(`main.js`)을 실행하면 코드 변경점이 바로 반영이 안되서 재실행이 안된다.

`main.ts` 를 변경할 때 일렉트론도 재실행 시켜주면서 `import`문도 쓰고싶지만 일렉트론 팀 조차 방법이 없어보인다.

일렉트론 디스코드 커뮤니티에 들어가보니 이미 앞의 선배들이 이슈를 생성해두었다.
- https://github.com/electron/electron/issues/21457

`nodemon` 을 적용하려면..<BR>
`main.ts` 변경점 저장 -> 컴파일 -> 새로운 `main.js` 생성 -> 변경된 `main.js`를 `nodemon`이 감지
<BR>이런 흐름으로 가야할 것 같은데 이걸 어떻게 package.json의 스크립트로 실행시킬지 모르겠다.

내가 찾은 선에서 일렉트론에서 `import` 문을 쓰고 싶으면 타입스크립트로 컴파일해서 js로 만드는 방법밖에는 없는 것 같다. (이마저도 `nodemon` 적용은 힘들듯..)