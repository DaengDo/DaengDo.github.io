---
classes: wide
title: "Naming Convention (명명 규칙)"
excerpt: ""

categories:
  - Scrap # 카테고리 골라
tags:
  - [메모]

toc: true
toc_sticky: true
show_date: true
read_time: false

date: 2021-08-02
last_modified_at: 2021-08-12 # 수정한 날짜
---

> 컴퓨터 프로그래밍에서 명명 규칙을 사용하는 이유

- 현대 프로그래밍 언어는 변수 이름에 공백을 포함시키지 못한다.(만악의 근원)
- 소스 코드를 읽고 이해하는데 필요한 노력을 줄인다.
- 코드 검토가 구문 및 명명 표준보다 더 중요한 문제에 집중할 수 있도록 한다.
- 코드 품질 검토 도구가 구문 및 스타일 기본 설정 이외의 중요한 문제에 주로 보고를 집중할 수 있도록 한다.

<BR>

> 명명 규칙 사용으로 인한 이득

- 개발 팀 내에서 일관성을 얻을 수 있다.
- 오류 가능성을 최소화하면서 검색하고 교체할 수 있다.
- 모호함을 줄이고, 명확성을 높인다.
- 서로 다른 조직의 작업 결과물이 결합될 때 발생할 수 있는 "naming collisions"을 방지하는데 도움이 된다.<BR>(이름충돌 방지)
- 프로그램 소스 코드 및 모든 관련 문서를 제출해야 하는 프로젝트 인계에서 유용하다.
- 긴 시간 간격 후 코드를 재사용할때 빠르게 이해할 수 있다.
- 작업 결과물의 미적 및 전문적 외관이 향상된다. (ㅇㄱㄹㅇ)

<BR>

# 1. Camel case (카멜 표기법, 낙타 대문자)
_대문자가 튀어나온것이 낙타등 같다 하여 붙은 이름이다._

- 각 단어의 첫 문자를 대문자로 표기하고 붙여쓰되, 맨 처음 문자는 소문자로 표기하는 표기법이다.(lowerCamelCase)
- 아래의 파스칼 표기법과 명확히 하기 위해 Upper Camel Case와 lower Camel Case 라는 용어로 구분짓기도 한다.
- 예시 : backgroundColor, userName, iPhone

<BR>

# 2. Pascal case (파스칼 표기법)
_Pascal 프로그래밍 언어에 의해 대중화되어 붙은 이름이다._

- 첫 단어를 대문자로 시작하는 표기법이다.<BR>(UpperCamelCase와 같다.)
- 예시 : BackgroundColor, UserName, PowerPoint

<BR>

# 3. Snake case (스네이크 표기법), GNU coding standards
_언더바가 뱀 같다하여 붙은 이름이다._

- 단어를 밑줄문자(`_` , 언더바)로 구분하는 표기법이다.
- 예시 : background_color, user_name, my_first_project

<BR>

# 4. kebab-case (케밥 표기법)
_하이픈으로 연결한것이 케밥같다하여 붙은 이름이다._

- 이음줄(`-`, 하이픈)로 단어를 연결하는 표기법이다.
- 예시 : background-color, margin-top

<BR>

# 5. Hungarian notation (헝가리안 표기법)
_고안자인 찰스 시모니가 헝가리 사람이라 붙은 이름이다._

- 변수나 함수의 이름에 자료형을 명시하는 표기법이다.
- 자료형이 다양하고 이를 활용하는 프로그래머의 능력이 중요한 언어(C같은)에서 주로 쓰였으나,<BR>변수명의 자료형이 바뀌게 되면 모조리 수정해야하는 문제점이 있어 최근에는 비권장된다고 한다.
- 예시 ↓ <BR>strName (string)<BR>bBusy (boolean)<BR>nSize,iSize(integer) 등등

<BR>

## tips) Constant (상수) ???
- 상수를 표기할때 쓰인다.
- 모든 문자를 대문자로 사용하고 문자간의 구분은 `_`,언더바를 쓴다.
- 예시 : WAKEUP_TIME

<br><BR>

회사, 프로젝트 마다 다른 조합과 규칙을 사용하니 주의해서 봐야겠다!

// 21.08.11 추가

camel-case : 변수명, 함수명
pascal-case: 클래스명, 속성명, 생성자함수, 컴포넌트 이름
kebab-case: html 요소의 id/이름(html은 대소문자 구분이 없기 때문), style 속성명

---

**😎😎**
{: .notice--primary}

---

**참고 자료**

[위키피디아 : Naming Convention](https://en.wikipedia.org/wiki/Naming_convention_(programming)){:target="_blank"}<BR>
https://en.wikipedia.org/wiki/Camel_case <BR>
https://www.theserverside.com/definition/Pascal-case<BR>
[GNU coding style](https://www.gnu.org/prep/standards/html_node/Names.html#:~:text=In%20a%20GNU%20program%2C%20names,of%20abbreviations%20in%20symbol%20names.){:target="_blank"}
