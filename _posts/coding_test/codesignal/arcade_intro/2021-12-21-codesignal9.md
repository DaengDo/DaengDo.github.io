---
classes: wide 
title: "[CodeSignal] Arcade-9" 
excerpt: "" 

categories: 
  - CodingTest
tags: 
  - [CodeSignal]

toc: true
toc_sticky: true 
show_date: true
read_time: false

date: 2021-12-21
last_modified_at: 2021-12-21
---

# Task

Given an array of strings, return another array containing all of its longest strings.

- Guaranteed constraints:<BR>
1 ≤ inputArray.length ≤ 10,<BR>
1 ≤ inputArray[i].length ≤ 10.

>Example

For `inputArray = ["aba", "aa", "ad", "vcd", "aba"]`, the output should be<BR>
`solution(inputArray) = ["aba", "vcd", "aba"]`.

<BR><BR><BR>

# My Solution

```js
function solution(inputArray) {
    let charLength = 0;
    
    for(let i = 0; i < inputArray.length; ++i){
        if(inputArray[i].length > charLength){
            charLength = inputArray[i].length;
        }
    }
    
    return inputArray.filter((item) => item.length === charLength);
}
```

## Feedback

```js
function solution(inputArray) {
    let maxCharLength = Math.max(...inputArray.map(item => item.length));
    
    return inputArray.filter((item) => item.length === maxCharLength);
}
```

`Math.max` 와 `...`(spread operator) 사용법을 상기함.

특히 스프레드 연산자를 빼먹을 시 `map` 메서드로 배열이 반환되므로 `Math.max`가 `NaN`을 반환하게 된다.