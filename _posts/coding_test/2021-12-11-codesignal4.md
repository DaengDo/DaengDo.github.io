---
classes: wide 
title: "[CodeSignal] Arcade-4" 
excerpt: "" 

categories: 
  - CodingTest
tags: 
  - [CodeSignal]

toc: false
toc_sticky: true 
show_date: true
read_time: false

date: 2021-12-11
last_modified_at: 2021-12-12
---

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.<BR>인접한 배열 요소중 제일 큰 곱의 숫자 출력하는 함수 작성

>Example

For `inputArray = [3, 6, -2, -5, 7, 3]`, the output should be<br>`solution(inputArray) = 21`.

7 and 3 produce the largest product.

```js
function solution(inputArray) {
    // inputArray = [3, 6, -2, -5, 7, 3];
    let result = null;
    
    for(let i=1; i<inputArray.length; i++){
        let value = inputArray[i] * inputArray[i-1];
        if(result == null || result < value){
            result = value;
        }
    }
    return result;
}
```

반복문을 돌려서 인접한 배열 중 곱이 제일 큰 값을 결과값 변수에 넣어주었다.