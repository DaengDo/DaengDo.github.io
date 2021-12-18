---
classes: wide 
title: "[CodeSignal] Arcade-6" 
excerpt: "" 

categories: 
  - CodingTest
tags: 
  - [CodeSignal]

toc: false
toc_sticky: true 
show_date: true
read_time: false

date: 2021-12-13
last_modified_at: 2021-12-14
---

Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

>Example

For statues = [6, 2, 3, 8], the output should be<BR>
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

정수로 이뤄진 배열 주어짐,<BR>배열 요소를 숫자 크기대로 정렬했을 때<BR>정수가 연속적이기 위해 필요한 요소의 갯수를 구하셈<BR>
이를태면 [0, 1, 5] 면 연속적이기 위해 2, 3, 4 가 필요하니<BR> 총 3개 필요함

```js
function solution(statues) {
    // [6, 2, 3, 8] -> 2, 8 -> 2 3 4 5 6 7 8 ->

    let maxValue,
        minValue = null;

    for (let i = 0; i < statues.length; i++) {
        if (maxValue == null || maxValue < statues[i]) {
        maxValue = statues[i];
        }
        if (minValue == null || minValue > statues[i]) {
        minValue = statues[i];
        }
    }
    // minValue 부터 증가연산하며 각 요소들이 배열에 있는지 확인하고
    // 없다면 그 요소들을 곱해준다.
    let arr = [];

    for (let j = minValue; j <= maxValue; j++) {
        // if (statues.find((item) => item == j)) continue; // this is not triggerd in 0, I don't know WHY....
        if(statues.includes(j)) continue;
        arr.push(j);
    }
    
    return arr.length;
}
```

문제는 풀었지만 문제가(?) 생겼다.
```js
if (statues.find((item) => item == j)) continue;
```
statues 배열에 0인 값의 요소가 있으면 디버그로 찍었을때 true 값이어도 이상하게 if 조건문 안쪽의 명령문을 실행하지 않는다.<BR>
`find()` 함수에 뭔가 문제가 있는것 같다. 이유는 모르겠다.<BR>
`includes()` 함수로 해결했으나 참 찝찝하다. 내일 선생님께 여쭤봐야겠다.

- `find()` 함수는 찾은 요소를 반환하기때문에 0을 반환할때는 falsey로 취급되어 false 값이 된 것이었다.