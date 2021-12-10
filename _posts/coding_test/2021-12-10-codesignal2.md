---
classes: wide 
title: "[CodeSignal] Arcade-2" 
excerpt: "" 

categories: 
  - CodingTest
tags: 
  - [CodeSignal]

toc: false
toc_sticky: true 
show_date: true
read_time: false

date: 2021-12-10
last_modified_at: 2021-12-10
---

특정 연도 입력하면 해당 세기 출력하는 함수 작성하기

>Example

For year = 1905, the output should be

solution(year) = 20;

For year = 1700, the output should be

solution(year) = 17.


```js
function solution(year) {
    // 1~100 -> 1c
    // 101~200 -> 2c
    const century = (((year - 1) / 100) + 1);
    
    return Math.floor(century);
}
```

- `Math.floor` : 소숫점 버림, 정수 반환
- `Math.ceil` : 소숫점 올림, 정수 반환
- `Math.round` : 소숫점 반올림, 정수 반환