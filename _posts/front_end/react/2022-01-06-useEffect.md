---
classes: wide
title: "[Hooks] useEffect"
excerpt: ""

categories:
  - React
tags:
  - [Frontend, Hooks]

toc: true 
toc_sticky: true
show_date: true
read_time: false

date: 2022-01-06
last_modified_at: 2022-01-06
---

# 기본 형태
```js
import react, { useEffect } from 'react'

useEffect(didUpdate)
```
- 명령형 또는 어떤 effect를 발생하는 함수를 인자로 받음
- component가 `mount`, `unmount`, `update` 될 때 특정 작업을 처리할 수 있음


4가지 형태

## 1. mount, unmount, update 될 때
```js
useEffect(() => {
  console.log("항상 랜더링됨")
})
```
- 두 번째 파라미터(배열)를 사용하지 않을때 가능
- 컴포넌트가 리랜더링 될 때마다 호출이 됨
  - 리엑트는 부모 컴포넌트가 리랜더링되면

## 2. mount 될 때 최초 1회만
```js
useEffect(() => {
  console.log("mount될 때 1번만 ")
},[])
```
- 빈 배열 값으로 설정해놓음

## 3. update 될 때
```js
useEffect(() => {
  console.log("")
},[something])
```
- `something` 값이 변경될 때 

## 4. 반환값이 있는 경우 (return)
```js
useEffect(() => {
  console.log("")
  return () => {
    console.log('cleanUp func');
  };
},[])
```
- mount 될 때
- 컴포넌트가 사라질 때 cleanup 함수 호출


**참고 자료**

https://react.vlpt.us/basic/16-useEffect.html<br>
https://ko.reactjs.org/docs/hooks-reference.html#useeffect<br>
https://xiubindev.tistory.com/100