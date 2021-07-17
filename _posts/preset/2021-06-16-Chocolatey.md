---
title: "Chocolatey" # 제목을 큰 따옴표로 감싼다. title을 적어주지 않으면 .md 파일 이름으로 적어주었던 title 부분이 제목으로 업로드 된다.
excerpt: "" # 포스트 목록에서 보여지는 아래쪽 문구다.

categories: # 카테고리를 설정한다.
  - Preset
tags: # 카테고리는 sub url이 붙는 페이지가 있지만, 태그는 없다. 대괄호 안에서 콤마로 구분해준다.
  - [Preset, Windows]

toc: true # Table Of Contents. 포스트 해더들만 보여주는 목차를 사용할 것인지의 여부. true = 목차보임 , false = 목차 안보임
toc_sticky: true # true로 해주면 목차가 스크롤을 따라 움직인다.

date: 2021-06-16 # 글을 처음 작성한 날짜, yyyy-mm-dd 형식으로 작성한다.
last_modified_at: 2021-07-18 # 이 글을 수정한 날짜
---

[https://chocolatey.org/](https://chocolatey.org/)
{: .notice}

### 1. 관리자 권한으로 powershell 실행

<img src="https://blog.kakaocdn.net/dn/FtKfj/btq7sVYN0ET/yY5N0CKUkJfYhM7aUTamak/img.png" width="가로 크기" height="세로 크기">

<br><br>

### 2. install 명령어 powershell 에 입력

<img src="https://blog.kakaocdn.net/dn/BL1Jm/btq7smI7Ytq/7OzgNgdKreK6lJOAF4zk6k/img.png" width="가로 크기" height="세로 크기">

- 프리웨어라 보안에 신경쓰라는 내용이 적혀있다. [관련 내용 참고](https://m.blog.naver.com/vanstraat/221732533202)

<img src="https://blog.kakaocdn.net/dn/D580a/btq7ntJIBSR/vtKOWEiFQgriEpq4loBIc1/img.png" width="가로 크기" height="세로 크기">

<br><br>

### 3. 설치 후 `choco -v` 커맨드로 설치 확인

- 이제 윈도우용 소프트웨어를 간단하게 CLI 환경에서 설치, 관리 할 수 있게 되었다.

<br><br>

ex) 크롬을 설치를 원할시, CLI 환경에서 'choco install googlechrome' 명령어 입력

<img src="https://blog.kakaocdn.net/dn/bq8UWh/btq7smh5zO8/XA9p09UsFk64YPF6a8ksSk/img.png" width="가로 크기" height="세로 크기">
