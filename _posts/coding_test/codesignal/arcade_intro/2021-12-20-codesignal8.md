---
classes: wide 
title: "[CodeSignal] Arcade-8" 
excerpt: "" 

categories: 
  - CodingTest
tags: 
  - [CodeSignal]

toc: false
toc_sticky: true 
show_date: true
read_time: false

date: 2021-12-20
last_modified_at: 2021-12-20
---

# Task
After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

// 행렬 탐색해서 열 위쪽으로 0이 없는 행렬 값들 총합 반환하셈

>Example

- 1)

```js
matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
```

the output should be

`solution(matrix) = 9`.

- 2)

```js
matrix = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]
```

the output should be

`solution(matrix) = 9`.

<BR><BR><BR>

# My Solution

```js
function solution(matrix) {
    
    let matrix_arr_length;
    let zero_index = [];
    let result = 0;
    
    for(let i = 0; i < matrix.length; ++i){
        for(let j = 0; j < matrix[i].length; ++j){
            result += matrix[i][j];
            if(matrix[i][j] == 0){
                zero_index.push(j);
            }
            if(zero_index.includes(j)){
                result -= matrix[i][j];
            }
        }
    }
    return result;
}
```

## Feedback

나는 행(`matrix[i]`)을 기준으로 연산을 시작했다. 그래서 if문이 떡칠이 되었지만,<BR>열을 기준으로 연산한다면 0이 나오는 순간 그 열을 지나치면 되므로 연산이 더 간단해진다.

```js
for (matrix열 반복문){
  for (matrix행 반복문){
    if(matrix값 === 0)break
    else (결과값에 matrix[i][j] 값 더하기)
  }
}
```