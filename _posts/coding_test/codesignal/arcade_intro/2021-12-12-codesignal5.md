---
classes: wide 
title: "[CodeSignal] Arcade-5" 
excerpt: "" 

categories: 
  - CodingTest
tags: 
  - [CodeSignal]

toc: false
toc_sticky: true 
show_date: true
read_time: false

date: 2021-12-12
last_modified_at: 2021-12-13
---

Below we will define an `n`-interesting polygon. Your task is to find the area of a polygon for a given `n`.

A `1`-interesting polygon is just a square with a side of length `1`. An `n`-interesting polygon is obtained by taking the `n - 1`-interesting polygon and appending `1`-interesting polygons to its rim, side by side. You can see the `1`-, `2`-, `3`- and `4`-interesting polygons in the picture below.

흥미로운 n다각형의 넓이를 구하셈

>Example

- For `n = 2`, the output should be<BR>
`solution(n) = 5`;
For `n = 3`, the output should be<BR>
`solution(n) = 13`.

#### my solutions

```js
function solution(n) {
    // 0 4 8 12 16 -> 즉 4n 만큼 증가함
    // n = 1 : 1, 
    // n = 2 : 1 + 4*1
    // n = 3 : 1 + 4*1 + 4*2
    // n = 4 : 1 + 4*1 + 4*2 + 4*3
    
    /* 첫번째로 짠 것 */
    
    // let result = 1;
    // if(n == 0)return undefined;
    
    // for(let i = 1; i <= n; i++){
    //     if(i == 1) continue;
    //     result += 4 * (i - 1);
    // }
    
    // return result;
    
    /* 두번째 재귀로 짠 것 */
    let result = 0;

    if (n == 1) {
        result = 1;
    } else {
        result = solution(n - 1) + 4 * (n - 1);
    }
    return result;
}
```

`n * n + (n-1)(n-1)`<BR>
즉, `2n^2 + 2n + 1` 로 포현할 수 있지만 실제 서비스에서는 매 케이스마다 연산을 하는 것보다 재귀 값들을 DB에 넣어두는 것이 유용할 것 같아 재귀 함수로 짜보았다.

그런데 크롬으로 테스트를 돌려보니 1만건을 넘기면 스택 메모리가 꽉차서 더 이상 계산이 되지 않았다 ㅡㅡ;;

비슷한 상황이라면 재귀 값들을 데이터베이스에 저장해두겠지?