---
classes: wide
title: "[DeepDive] chapter 26. 배열"
excerpt: "" 
categories:
  - JavaScript
tags:
  - [JS, Books]

toc: true
toc_sticky: true
show_date: true
read_time: false

date: 2022-04-19
last_modified_at: 2022-04-19
---

## JS 배열

흔히 배열이라고 하면...

```c
#include <stdio.h>

int main()
{ 
  int numArr[5] = {1 ,2, 3, 4, 5}
}
```

이러한 하나의 데이터 타입으로 통일되고 메모리에 연속적으로 나열된 자료구조를 생각하겠지만

자바스크립트에서 배열은 그냥 배열like 인 객체다.

자바스크립트의 배열은 사실 프로퍼티의 값과 `length` 프로퍼티를 소유한 객체일 뿐이다.

다만 JS의 배열은 요소에 빠르게 접근하는 배열의 장점을 포기한 대신
요소를 삽입, 삭제하는 경우 일반적인 배열보다 빠르다는 장점이 있다.

<BR>

## 배열 생성 방법

- 리터럴
  ```js
  const arr = [1, 2, 3]
  ```

- Array 생성자 함수
  ```js
  


## 빈 배열 만들기

```js

let arr = [1, 2, 3];

// 1. 
arr = []

// 2.
arr.splice(0, arr.length);

// 3.
arr.length = 0;

// 4. 재사용
function remove(arr) {
  while(arr.length){
    arr.pop();
    // 혹은 arr.unshift();
  }
}

// 4-1. prototype
Array.prototype.remove = function() {
  this.splice(0, this.length);
}
```

성능은 빈 배열 할당하는 1번이나 


- 배열 생성 방법에 따른 분류
- 배열 요소 추가/갱신
  - 인덱스는 음이 아닌 정수로 표현되므로 해당 범위 밖의 인덱스를 추가하면 프로퍼티로 추가됨
  - get
- 배열 요소 삭제
  - `delete` 문 사용하면 희소배열 될 가능성 있으니 사용 비권장
- 배열 메서드
  - Array 빌트인 객체 정적 메서드
    - `Array.isArray`
  - 원본 배열 직접 변경하는 메서드
    - 
  - 새로운 배열 반환하는 메서드
    - 


    새로운 상태를 만드는 메서드
    사이드 이펙트를 생성하는 메서드

정적 메서드를 사용하는 것도 사이드 이펙트를 유발하는 건가??? 모르겠네
