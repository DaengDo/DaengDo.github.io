---
classes: medium # wide, medium, small 로 게시글의 구성 결정 
title: "[Jest] form 에러" 
excerpt: ""

categories:
  - Jest
tags:
  - [error]

toc: true 
toc_sticky: true
show_date: true
read_time: false

date: 2022-06-08
last_modified_at: 2022-06-08
# header: # 해더 이미지를 추가하면 opengraph 로 글이 링크 걸릴때 대표 이미지로 뜬다.
#   image: /assets/images/page-header-image.png
#   og_image: /assets/images/page-header-og-image.png
---

form 태그의 submit 이벤트를 테스트 하는 도중 테스트는 통과 했으나 아래의 에러 문구가 떳다.

`Error: Not implemented: HTMLFormElement.prototype.submit`

`jest.fn()` 으로 모킹한 submit 이벤트 함수가 submit 양식 제출에 대한 구현이 이뤄지지 않아 일어나는 에러였다. [js dom 관련이슈 참조](https://github.com/jsdom/jsdom/issues/1937){:target="_blank"}

```js
// 예전 에러 유발 코드
const handleSubmit = jest.fn();

// 변경한 코드
const handleSubmit = jest.fn(event => event.preventDefault());
```

form의 기본 동작을 막아주면, form 제출에 대한 구현이 필요 없어져 해당 에러가 더 이상 발생하지 않는다.

**참고 자료**

[stack overflow 관련 글](https://stackoverflow.com/questions/62216232/error-not-implemented-htmlformelement-prototype-submit){:target="_blank"}<BR>
[js dom 관련이슈](https://github.com/jsdom/jsdom/issues/1937){:target="_blank"}
