---
classes: wide
title: "webpack"
excerpt: ""
categories:
  - Preset
tags:
  - [Preset, Webpack]
toc: true
toc_sticky: true
show_date: true
read_time: false
date: 2022-03-22
last_modified_at: 2022-03-22 # 수정한 날짜
---

# config

## 커멘드 라인 명령어로 하는 법

- `npm install -D webpack webpack-cli`
  - webpack 설치
- `npx webpack --entry {entry 파일 위치} --output {output 파일 위치}`
  - entry 파일과 output 파일 지정해주기
  - `--output` 명령어가 먹히지 않는다면 `--output-path` 사용
  - Set 'mode' option to 'development' or 'production' 에러 출력되면 `mode` 추가해주기
    - `-mode development` 혹은 `-mode production`

## 파일로 설정하는 법

- webpack 설정 파일을 만들고 `npx webpack --config {설정파일}`
  - 만약 파일이름을 `webpack.config.js` 로 설정했다면 `npx webpack` 만 입력해도 작동한다.

# errors
- 만약 커멘드 라인에서 `webpack` 명령어가 먹히지 않는다면...
  - `npm install -g webpack`, `npm install -g webpack-cli`
    - 글로벌로 설치해도 안된다면 `npm link webpack`, `npm link webpack-cli`

# mode
- development, production 모드를 구분

# Loaders
- 특정 양식 파일들을 번들링함

# plug-in
- 로더보다 더 다양한 작업들을 수행함

---

**🐿🐿**
{: .notice--primary}

---

**참고 자료**

https://www.youtube.com/playlist?list=PLuHgQVnccGMChcT9IKopFDoAIoTA-03DA