---
classes: wide
title: "[DeepDive] chapter 19.프로토타입"
excerpt: "" 
categories:
  - JavaScript
tags:
  - [JS, Books]

toc: true
toc_sticky: true
show_date: true
read_time: false

date: 2022-03-15
last_modified_at: 2022-03-15
---

> JS는 프로토타입 기반의 객체 지향 프로그래밍 언어다.

프로토타입을 활용해 객체 지향 프로그래밍을 할 수 있다.

# 1. 객체지향 프로그래밍

객체는 프로그램을 구성하는데 필요한 상태와 동작을 논리적인 단위로 묶은 자료구조이다. 객체의 상태 데이터를 프로퍼티, 동작을 메서드라고 부른다.

```js
const person = {
  // 프로퍼티
  name: 'DaengDo'
  // 메서드
  sayHi: function(){
    console.log("Hi");
  }
};
```
객체지향은 이런 여러 개의 독립적 단위(객체)의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다.

<BR>

# 2. 상속

상속
- 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용하는 것을 말한다.
- 상속을 사용해서 불필요한 중복을 제거한다.
- JS는 **프로토타입**을 기반으로 상속을 구현한다.

```js
// 생성자 함수 
function Circle(radius){
  this.radius = radius;
  this.getArea = function(){
    return Math.PI * this.radius ** 2
  }
}
// 생성자 함수로 생성한 인스턴스
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// 프로토타입으로 상속이 구현되었다.
console.log(circle1.getArea === circle2.getArea); // true
```

<BR>

# 3. 프로토타입 객체

프로토타입 객체?
- 프로토타입 이라고도 부르며 객체지향 프로그래밍의 객체 간 상속을 구현하기 위해 사용된다.
- JS의 모든 객체는 하나의 프로토타입을 갖고 이는 `[[prototype]]` 이라는 내부 슬롯으로 참조할 수 있다.

# 4. 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

# 5. 프로토타입의 생성 시점

# 6. 프로토타입 체인

# 7. 프로토타입 체인

# 8. 오버라이딩과 프로퍼티 섀도잉

# 9. 프로토타입의 교체

# 10. instanceof 연산자
1
# 11. 직접 상속

# 12. 정적 프로퍼티/메서드

# 13. 프로퍼티 존재 확인

# 14. 프로퍼티 열거