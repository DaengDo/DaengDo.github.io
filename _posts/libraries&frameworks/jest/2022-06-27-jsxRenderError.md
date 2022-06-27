---
classes: medium # wide, medium, small 로 게시글의 구성 결정 
title: "[Jest] Functions are not valid as a React child." 
excerpt: ""

categories:
  - Jest
tags:
  - [error]

toc: true 
toc_sticky: true
show_date: true
read_time: false

date: 2021-06-27
last_modified_at: 2021-06-27
# header: # 해더 이미지를 추가하면 opengraph 로 글이 링크 걸릴때 대표 이미지로 뜬다.
#   image: /assets/images/page-header-image.png
#   og_image: /assets/images/page-header-og-image.png
---

테스트 작성 도중 해당 에러를 맞닥뜨렸다.

---

Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.

{: .notice--primary}

---

테스트가 의도대로 동작하지 않고 해당 에러가 생겼다.

리엑트 함수로 유효하지 않다는게 무슨 의미일까?? 곰곰히 생각하며 코드를 다시 차분히 살펴보니 (대략 예시)

```js
import { render } from "@testing-library/react";

import App from "./App";

describe("App Component", ()=> {
  const render = () => render(App);
  // const render = () => render(<App />);
  // 위와 같이 jsx를 랜더해줘야하는데 실수스
})
```

App 컴포넌트를 jsx로 렌더해주고 있지 않았었다 😨

`App` 을 `<App />` 으로 변경해주고 다시 테스트를 돌려보니 의도대로 작동했다.

그 후 다시 에러 메시지를 살펴보니

Warning: Functions are not valid as a React child.
*This may happen if you return a Component instead of <Component /> from render.*
Or maybe you meant to call this function rather than return it.

`<Component />`를 `Component`로 렌더할 때 종종 일어나는 에러라고 친절히 예시까지 들어주고 있었다.

이제보니 에러 메시지도 3줄 요약이네 ㅋㅋㅋ