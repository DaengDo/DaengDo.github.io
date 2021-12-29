---
classes: wide
title: "localtunnel"
excerpt: ""
categories:
  - Preset
tags:
  - [Preset, Nodepakage]
toc: true
toc_sticky: true
show_date: true
read_time: false
date: 2021-12-30
last_modified_at: 2021-12-30 # 수정한 날짜
---

localhost 외부 공개 용

오픈소스로 운영되서 가끔 서버 내려가기도 함(상업용 아님)

- `npm install -g localtunnel`
- `lt --port {포트번호}`
  - {포트번호} 의 포트를 공개
- `lt --port {포트번호} -subdomain {도메인이름}`
  - 포트번호열고 원하는 {도메인이름}으로 도메인 설정