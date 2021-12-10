---
classes: wide 
title: "[CodeSignal] Arcade-3" 
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

펠린드롬 검사하는 함수 작성

>Example

For inputString = "aabaa", the output should be

solution(inputString) = true;

For inputString = "abac", the output should be

solution(inputString) = false;

For inputString = "a", the output should be

solution(inputString) = true.

```js
function solution(inputString) {
    let reverseString = '';
    
    for(let i = inputString.length - 1; i >= 0; i--){
        reverseString += inputString[i];
    }
    
    if (reverseString == inputString){
        return true;
    } else {
        return false;
    }
}
```