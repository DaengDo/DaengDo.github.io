---
classes: wide 
title: "[CodeSignal] Arcade-7" 
excerpt: "" 

categories: 
  - CodingTest
tags: 
  - [CodeSignal]

toc: true
toc_sticky: true 
show_date: true
read_time: false

date: 2021-12-15
last_modified_at: 2021-12-16
---

# Task

정수로 이뤄진 배열이 주어졌을 때,<BR> 0개 or 1개의 숫자를 제외해서 증가하는 수열이면 true,<BR> 2개 이상을 제외해야하면 false를 출력하는 함수 작성

>Example

For sequence = [1, 3, 2, 1], the output should be<BR>
solution(sequence) = false.

For sequence = [1, 3, 2], the output should be<BR>
solution(sequence) = true.

<BR><BR><BR>

# My Solution

디버깅하면서 거의 하드코딩이나 다름없이 노가다했음.<BR>
오전 1시가 넘어가서 너무 졸려서 머리가 안돌아가는데<BR>하루 1문제 룰(나와의 약속) 때문에 강제로 디버깅하면서 풀었다.<BR>

더 좋은 풀이는 내일(21/12/16) 적용해야겠다.


```js
function solution(sequence) {
  let bad = 0;
  
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      ++bad;
      if (bad == 2) {
        return false;
      }
      if (sequence[i] < sequence[i + 2]) {
        sequence.splice(i + 1, 1);
        --i;
      } else if (sequence[i] >= sequence[i + 2]) {
        sequence.splice(i, 1);
        --i;
      } else if (!sequence[i + 2]) {
        return true;
      }
    }
    if (sequence[i] <= sequence[i-1]){return false}
  }
  return true;
}
```