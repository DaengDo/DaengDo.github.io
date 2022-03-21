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
- JS의 모든 객체는 하나의 프로토타입을 갖고 이는 `[[Prototype]]` 이라는 내부 슬롯으로 참조할 수 있다.
  - `__proto__` 접근자 프로퍼티를 통해 ``[[Prototype]]``에 간접적으로 접근할 수 있다.

  ```js
  const obj = {};
  const parent = { x: 1 };
  
  obj.__proto__ = parent;

  console.log(obj.x); // 1
  ```
- `Object.prototype.__proto__` 접근자 프로퍼티를 통해 모든 객체의 상속이 구현되어 있다. `__proto__` 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 `Object.prototype`의 프로퍼티다.

  ```js
  const person = { name: 'Lee' };

  console.log(person.hasOwnProperty('__proto__')); // false

  console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

  console.log({}.__proto__ === Object.prototype); // true
  ```
- `__proto__` 접근자 프로퍼티를 사용하는 이유는 상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서이다.
- 직접 상속을 통해 `Object.prototype`을 상속받지 않는 객체를 생성할 수 있기 때문에 `__proto__` 를 항상 사용할 수 있는 것은 아니다.
  - 프로토타입의 참조를 취득하고 싶은 경우 `Object.getPrototypeOf`
  - 프로토타입을 교체하고 싶은 경우 `Object.setPrototypeOf` 메서드를 사용
- 함수 객체의 `prototype` 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
  ```js
  (function(){}).hasOwnProperty('prototype'); // true
  // 일반 객체는 prototype 프로퍼티를 소유하지 않음
  ({}).hasOwnProperty('prototype'); // false
  // non-constructor는 프로토타입을 생성하지 않음
  const Person = (name) => {
    this.name = name;
  };
  Person.hasOwnProperty('prototype'); // false
  ```
- 모든 프로토타입은 `constructor` 프로퍼티를 갖는다. 해당 프로퍼티는 자신을 참조하고 있는 생성자 함수를 기리킨다.
  ```js
  function Person(name) {
    this.name = name;
  }
  const me = new Person("DaengDo");

  console.log(me.constructor === Person); // true
  ```

<br>

# 4. 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

- `Object` 생성자 함수에 인수를 전달하지 않거나 `undefined` 또는 `null`을 인수로 전달하면  추상 연산 `OrdinaryObjectCreate` 를 호출해 `Object.prototype`을 프로토타입으로 갖는 빈 객체를 생성한다.

```js
const obj = {};

console.log(obj.constructor === Object); // true

const str = new Object("str");

console.log(str.constructor === Object); // false
```


<br>

# 5. 프로토타입의 생성 시점

- 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다.
  - `constructor`는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
```js
console.log(Person.prototype); // {constructor: f}
// 함수 선언문은 런타임 이전에 먼저 실행되므로...
function Person() {
  this.name = name;
}
```

- 빌트인 생성자 함수들은 전역 객체가 생성되는 시점에 생성된다.

<br>

# 6. 프로토타입 체인

# 7. 오버라이딩과 프로퍼티 섀도잉

# 8. 프로토타입의 교체

# 9. instanceof 연산자

# 10. 직접 상속

# 11. 정적 프로퍼티/메서드

# 12. 프로퍼티 존재 확인

# 13. 프로퍼티 열거