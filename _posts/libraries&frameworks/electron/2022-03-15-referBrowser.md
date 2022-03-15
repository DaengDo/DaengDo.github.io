---
classes: wide
title: "BrowserWindow 객체 참조"
excerpt: ""

categories:
  - Electron
tags:
  - [Desktop]

toc: true 
toc_sticky: true
show_date: true
read_time: false

date: 2022-03-15
last_modified_at: 2022-03-15
---

현재 일렉트론 어플리케이션에서 열린 브라우저 객체를 참조하기 위한 방법 메모

# Main Proces 에서 참조

- BrowserWindow.id 로 참조
- id 를 알고 있다면 BrowserWindow.fromId(id) 로 해당 윈도우 객체 참조 가능

# Renderer Process 에서 참조

- ipc 통신할 때 ipcMain 에서 신호를 준 renderer process 참조가능함
  - `event.send.getOwnerBrowserWindow()`

**참고 자료**
