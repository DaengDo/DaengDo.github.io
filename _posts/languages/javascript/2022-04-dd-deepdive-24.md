---
classes: wide
title: "[DeepDive] chapter 24. 클로저"
excerpt: "" 
categories:
  - JavaScript
tags:
  - [JS, Books]

toc: true
toc_sticky: true
show_date: true
read_time: false

date: 2022-04-03
last_modified_at: 2022-04-03
---

# 클로저 기본

클로저는 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어에서 사용되는 특성으로 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

중첩 함수가 외부 함수보다 더 오래 유지되는 경우, 생명 주기가 완료된 외부 함수의 변수를 참조할 수 있다. 이러한 중첩 함수를 클로저라고 한다.

자바스크립트는 함수 객체의 내부 슬롯 `[[Environment]]`에 자신의 상위 스코프가 저장(참조)되기 때문에 가비지 콜렉팅이 되지 않는 것이다.

```js
const x = 1;

function outer() {
  console.dir(outer);
  const x = 10;
  const inner = () => {
    console.log(x);
    console.dir(inner);
  };
  return inner;
}

const innerFunc = outer();
innerFunc();
```

`inner` 의 외부 함수인 `outer` 함수의 생명주기가 return 문을 만나 종료되었지만, `inner` 함수의 내부 슬롯인 `[[Environment]]` 에 outer 스코프가 참조되고 있기 때문에 변수 x가 계속해서 존재하게 된다.

그렇다고 모든 중첩 함수가 클로저는 아니다. 상위 스코프의 식별자를 참조하지 않는 중첩 함수는 클로저라고 부르지 않는다.

중첩 함수가 외부 함수의 식별자를 참조하고 있으며, 외부 함수보다 중첩 함수의 생명주기가 길 때 해당 중첩 함수를 클로저라고 부르는 것이 일반적이다.

<BR>

# 클로저 활용

클로저는 상태를 안전하게 변경하고 유지하기 위해 사용된다.

```js
let num = 0;

function increase () {
  return num++
}
```
해당 카운터가 올바르게 작동하려면 다음 조건이 보장되어야 한다.
- 카운터에 사용하고 있는 `num` 변수는 `increase`함수가 호출되기 전까지 변경되지 않고 유지되어야 한다.<BR>따라서 `num` 변수는 오로지 `increase` 함수만이 변경할 수 있어야 한다.

```js

```