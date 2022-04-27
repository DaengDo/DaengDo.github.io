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
last_modified_at: 2022-04-27
---

현재 일렉트론 어플리케이션에서 열린 브라우저 객체를 참조하기 위한 방법 메모

# Main Proces 에서 참조

- BrowserWindow.id 로 참조
- id 를 알고 있다면 BrowserWindow.fromId(id) 로 해당 윈도우 객체 참조 가능

# Renderer Process 에서 참조

- ipc 통신할 때 ipcMain 에서 신호를 준 renderer process 참조가능함
  - `event.sender.getOwnerBrowserWindow()`
  - `sender.id` 랑 `event.sender.getOwnerBrowserWindow().id` 가 다름; 이유는 아직 몰?루
- remote 모듈 사용하는 방법도 있으나 일렉트론 v12 부터 deprecated 되었으니 사용하기 애매함
  - `remote.getCurrentWindow().id`
- BrowserWindow.fromWebContents(event.sender).id
  - https://gist.github.com/malept/6670289ff76db1b675b0c347bc8c5d68#file-main-js-L65-L68

**참고 자료**
- https://stackoverflow.com/questions/43314039/how-to-close-electron-app-via-javascript
- https://github.com/electron/electron/issues/4790
- 일렉트론 커뮤니티 디스코드 서버 `custom id` 검색