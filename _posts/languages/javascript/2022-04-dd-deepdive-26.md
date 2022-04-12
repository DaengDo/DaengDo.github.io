---
classes: wide
title: "[DeepDive] chapter 26. ES6 함수의 추가 기능"
excerpt: "" 
categories:
  - JavaScript
tags:
  - [JS, Books]

toc: true
toc_sticky: true
show_date: true
read_time: false

date: 2022-04-12
last_modified_at: 2022-04-12
---

ES6 이전의 함수는 callable, constructor 그리고 this 바인딩에 혼란이 있었다.

ES6 에서는 함수를 사용 목적에 맞게 일반 함수, 메서드, 화살표 함수로 구분한다.

## 메서드

JS에서 메서드는 (객체에) 축약 표현으로 정의된 함수만을 의미한다.

```js
const me = {
  name : "DaengDo",
}

const obj = {
  __proto__: me,
  isHungry: false,
  // printName은 메서드이다.
  printName() {
    return console.log(super.name);
  },
  // printIsHungry에 바인딩된 함수는 일반 함수다.
  printIsHungry: function () {
    return console.log(this.isHungry);
  },
};

obj.printName(); // DaengDo

new obj.printIsHungry();
new obj.printName(); // TypeError: ~ is not a constructor
```

- 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 `[[HomeObject]]`를 갖는다.
  - `[[HomeObject]]`를 사용해서 수퍼 클래스의 메서드를 참조할 수 있기 때문에 메서드는 `super` 키워드를 지원한다.
- 메서드는 내부 슬롯 `[[constructor]]`가 없기 때문에 생성자 함수로 호출할 수 없다.
