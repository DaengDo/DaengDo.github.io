---
classes: wide
title: "[DeepDive] chapter 16 프로퍼티 어트리뷰트"
excerpt: "" 
categories:
  - JavaScript
tags:
  - [JS, Books]

toc: true
toc_sticky: true
show_date: true
read_time: false

date: 2022-03-01
last_modified_at: 2022-03-01
---

# 1. 내부 슬롯, 내부 메서드

- JS엔진 내부 로직을 명시하기 위한 pseudo property, pseudo method
- `[[]]` 이중대괄호로 감싸서 표현
- 간접적 접근
  - `[[Prototype]]` 내부 슬롯 접근 `__proto__`로 접근하는 예시가 많음<br> 그러나 해당 방식은 브라우저 호환성을 위해 남겨둔 deprecated 된 방식으로 `Object.getPrototypeOf()`를 권장<br>[MDN \_\_proto\_\_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)<br>[MDN getPrototypeOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
    ```js
    const obj = {};
    
    console.dir(obj);

    obj.__proto__;

    Object.getPrototypeOf(obj);
    ```
    [오브젝트 프로토타입](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes)

<br>

# 2. 프로퍼티 어트리뷰트, 프로퍼티 디스크립터

>JS 엔진은 프로퍼티를 생성할 때 프로퍼티 어트리뷰트를 기본 값으로 정의한다.

https://velog.io/@dbstjrwnekd/%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0-%EC%96%B4%ED%8A%B8%EB%A6%AC%EB%B7%B0%ED%8A%B8Property-Attribute

https://velog.io/@seeh_h/%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0-%EC%96%B4%ED%8A%B8%EB%A6%AC%EB%B7%B0%ED%8A%B8feat.-%EB%82%B4%EB%B6%80-%EC%8A%AC%EB%A1%AF%EA%B3%BC-%EB%82%B4%EB%B6%80-%EB%A9%94%EC%86%8C%EB%93%9C

https://dev-jango.tistory.com/2

https://tc39.es/ecma262/#sec-ordinary-and-exotic-objects-behaviours

https://ko.javascript.info/property-descriptors



```js



```
