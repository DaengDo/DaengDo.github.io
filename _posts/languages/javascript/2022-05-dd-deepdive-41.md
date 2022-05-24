---
classes: wide
title: "[DeepDive] chapter 41. 타이머"
excerpt: "" 
categories:
  - JavaScript
tags:
  - [JS, Books]

toc: true
toc_sticky: true
show_date: true
read_time: false

date: 2022-05-24
last_modified_at: 2022-05-24
---

- 호출 스케줄링
  - 함수를 명시적으로 호출하지 않고 일정 시간이 경과된 이후 호출하는 것

- 타이머 함수
  - 타이머를 생성할 수 있는 `setTimeout`, `setInterval`와<BR>타이머를 제거할 수 있는 `clearTimeout`, `clearInterval`을 타이머 함수라고 한다.
  - 해당 함수들이 브라우저환경과 노드환경에서 사용이 가능해 빌트인 함수로 착각할 수 있으나 각각 환경에 구현이 된 호스트 객체이다.

- `setTimeout` / `clearTimeout`
  - 