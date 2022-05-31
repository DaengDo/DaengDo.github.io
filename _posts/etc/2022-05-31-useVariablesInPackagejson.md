---
classes: wide
title: "package.json에서 변수 사용하기 (with 환경 변수)"
excerpt: ""

categories:
  - Scrap # 카테고리 골라
tags:
  - [메모]

toc: true
toc_sticky: true
show_date: true
read_time: false

date: 2022-05-31
last_modified_at: 2022-05-31 # 수정한 날짜
---

아래 예시의 package.json 파일이 있다고 가정, 변수 적용하는 방법

```json
{
  "name": "foo",
  "config": { "port": "3000" }
}
```

# 1. package.json 내 변수 사용

package.json 자체에 변수를 할당하고 사용하는 방법이다.<BR>
OS 별 명령어는 다음과 같다.

- `Windows`의 경우
  - `%npm_package_name%` -> foo 가 할당된다.
  - `%npm_package_config_port%` -> 3000이 할당된다.
- `Linux / MAC`의 경우
  - `&npm_package_name` 혹은<BR>`&[npm_package_name%]` -> foo 가 할당된다.
  - `&npm_package_config_port` 혹은<BR>`&[npm_package_config_port%]` -> 3000이 할당된다.
- JS 파일 내에서의 사용
  ```js
  import packageJson from "./package.json"

  console.log(`현재 포트: ${packageJson.config.port}`);
  // 현재 포트: 3000
  ```

<BR>

# 2. 환경 변수 등록하기

## 2-1. dotenv (.env 파일) 

`npm i dotenv`, `yarn add dotenv`

[`dotenv`](https://www.npmjs.com/package/dotenv){:target="_blank"} 패키지를 사용한다. 

`.env` 파일을 생성하여 환경 변수를 등록할 수 있다.<BR>문자열 값만 등록이 가능하다.

```
PORT="3000"
FOO="BAR"
```
.env 파일을 위와 같이 생성하면 환경 변수로 활용이 가능하다.

```js
require('dotenv').config()  // commonJS
import 'dotenv/config';     // es6

console.log(process.env.FOO); // BAR
```
- js 파일에서 환경 변수를 불러오는 모습이다.

```
$ node -r dotenv/config your_script.js
```
- 명령줄로 해당 옵션을 주면 your_script.js를 preload로 환경 변수 적용아 된다.

<BR>

## 2-2. cross-env (명령줄)

모든 OS에서 동일하게 환경 변수를 적용하기 위해 사용하는 패키지

`npm i cross-env`, `yarn add cross-env`

[cross-env](https://www.npmjs.com/package/cross-env){:target="_blank"}

```json
{
  "scripts": {
    "build": "cross-env FIRST_ENV=one SECOND_ENV=two node ./my-program"
  }
}
```

**참고 자료**

https://stackoverflow.com/questions/43705195/how-can-i-use-variables-in-package-json<BR>
http://www.marcusoft.net/2015/08/npm-scripting-configs-and-arguments.html#npm-configuration<BR>
[`dotenv`](https://www.npmjs.com/package/dotenv){:target="_blank"}<BR>
[cross-env](https://www.npmjs.com/package/cross-env){:target="_blank"}<BR>