---
classes: wide 
title: "12/14 면접 손코딩" 
excerpt: "" 

categories: 
  - CodingTest
tags: 
  - [Interview]

toc: true
toc_sticky: true 
show_date: true
read_time: false

date: 2021-12-14
last_modified_at: 2021-12-15
---

지아이티아카데미(교육사업업체, edu 플랫폼 서비스)<BR>재미있게도 시니어 개발자분이 외국분이셨다.
{: .small}

# Task

Given an array of integers `nums` and an integer `target`,<BR> return indices of the two numbers such that they add up to `target`.

You may assume that each input would have <b>exactly one solution</b>,<BR> and you may not use the same element twice.

You can return the answer in any order.

>Example

1)<BR>
<b>Input :</b> nums = [2, 7, 11, 15], target = 9<BR>
<b>Output :</b> [0, 1]
<BR>
2)<BR>
<b>Input :</b> nums = [3, 2, 4], target = 6<BR>
<b>Output :</b> [1, 2]
<BR>
3)<BR>
<b>Input :</b> nums = [3, 3], target = 6<BR>
<b>Output :</b> [0, 1]
<BR>

Constraints:
- 2 <= `nums.length` <= 10^4
- -10^9 <= `nums[i]` <= 10^9
- -10^9 <= `target` <= 10^9

<BR><BR><BR>

# My solution

```js
function solution (nums, target){
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] == target){
        return [i, j];
      }
    }
  }
}
```

복잡도 n제곱을 안하기 위해서 for문 2개를 중첩하지 않고 방법이 있나 생각해봤는데, 생각이 안나서 이대로 제출하고 면접을 진행했었다.