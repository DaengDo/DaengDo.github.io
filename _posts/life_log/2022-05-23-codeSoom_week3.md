---
classes: medium
title: "3주 차 회고"
excerpt: ""
categories:
  - LifeLog
tags:
  - [코드숨]

toc: true
toc_sticky: true # true로 해주면 목차가 스크롤을 따라 움직인다.
show_date: true
read_time: false

date: 2022-05-23
last_modified_at: 2022-05-23
# header: # 해더 이미지를 추가하면 opengraph 로 글이 링크 걸릴때 대표 이미지로 뜬다.
#   image: /assets/images/page-header-image.png
#   og_image: /assets/images/page-header-og-image.png
---

# 3주 차, TDD

이번 3주 차 과정으로 프론트엔드에서의 테스트 코드에 대해 알아보았다. BDD 패턴을 적용해 Given When Then 의 문장을 완성시켜가며 TDD의 red green refector 사이클을 돌려보았다.

- https://johngrib.github.io/wiki/junit5-nested/#describe---context---it-%ED%8C%A8%ED%84%B4
  - BDD 작성에 매우 큰 도움을 받았다.

BDD가 제시하는 Describe Context It 시나리오를 작성은 꽤 재미있었고 충분히 납득되었지만, 테스팅 도구가 익숙치 않아 진행이 매우 더뎠다.


```js
// 이런 패턴으로 작성했다.
  describe('테스트 대상', () => {
    context('상황 또는 조건', () => {
      it('테스트 대상의 행동', () => {
        // ...
      })
    })
  })  
  ```

사용한 테스팅 도구들은 다음과 같다.

- `jest`: 페북이 만들고 배포한 자바스크립트 생태계의 테스팅 프레임워크이다.
- `@types/jest`: jest의 타입을 잡아준다. (타입스크립트를 사용하지 않더라도)편리한 자동완성을 위해 사용했다.
- `jest-plugin-context`
  - BDD의 Describe Context It 패턴을 코드로 명시하기 위해 사용한다.<BR>jest 에서는 `context` 를 지원하지 않아 context 대신 describe를 적어야하는데 해당 모듈을 사용하면 describe를 context로 적을 수 있게 해줘서 `describe-context-it` 패턴을 코드에 명시할 수 있게 된다.<BR>아래와 같이 `jest.config.js`에 명시해줘야 한다.
  ```js
  module.exports = {
    // ...
    setupFilesAfterEnv: [
      'jest-plugin-context/setup',
    ],
    // ...
  }
  ```
- `@testing-library/jest-dom`: jest의 부족한 mature 를 보강하기 위한 라이브러리이다. dom 테스팅을 위한 좀 더 명확한 커스텀 매처들을 지원한다.
- `@testing-library/react`: 테스트를 위한 리액트 컴포넌트 랜더 함수를 제공한다. 덕분에 브라우저에서 랜더링하는 실제 HTML 마크업의 모습이 어떤지에 대해서 테스트하기 용이하다.
- `babel-jest`: jset를 node 환경에서 이용하였는데, 지원되지 않는 문법을 테스트 코드에서 작성하기 위해 사용했다.

테스팅 코드 작성에 애를 조금 먹었다. 원하는 테스트에 대한 문장은 적어도 코드로 변환하는 것이 쉽지 않았다.<BR>도구가 손에 익숙해질 때 까지 꾸준히 이용해야겠다.

# 근데 이번주는 좀 쉬었다 -_-

커피를 잘못 마셔서 수면 패턴이 망가지기도 했고 퇴근 후 의욕이 없어 거의 일주일을 flex(?) 해버렸다.<BR>
회사 일을 좀 열심히 할 필요가 있었는데...퇴근하니 녹초가 되어 더 이상 집중할 여력이 남아있지 않았다.<BR>
분명 체력이 부족해서다...😐 분명 운동을 한창 열심히 할 때는 이렇지 않았다. 코로나 이후로 키워놓은 신체지구력이 다 날아가버렸다 ㅠㅠㅠ

운동 다시 꾸준히 해야됨!!!!!