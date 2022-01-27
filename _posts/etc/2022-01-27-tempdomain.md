---
classes: wide
title: "hosts 파일 수정, ip 도메인 임의 변경"
excerpt: ""

categories:
  - Scrap # 카테고리 골라
tags:
  - [잡담, 메모]

toc: true
toc_sticky: true
show_date: true
read_time: false

date: 2022-01-27
last_modified_at: 2022-01-27 # 수정한 날짜
---

윈도우의 `hosts` 파일을 수정해서 네트워크 상의 호스트 이름을 ip 주소로 변환할 수 있다.

해당 방법을 사용해서 도메인 서버 등록 없이 SSL 인증을 붙인 후 https 접속을 할 수 있다.(대신 해당 ip로 접속 가능한 환경이어야겠지!)

- `c\windows\System32\drivers\etc\hosts`
- 추가 예시
  - `127.0.0.1       localhost`
  - `125.7.235.115		sample.com`
