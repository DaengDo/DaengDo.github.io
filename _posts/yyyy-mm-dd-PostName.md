---
title: "[제목] 제목" # 제목을 큰 따옴표로 감싼다. title을 적어주지 않으면 .md 파일 이름으로 적어주었던 title 부분이 제목으로 업로드 된다.
excerpt: "포스트 아래 문구" # 포스트 목록에서 보여지는 아래쪽 문구다.

categories: # 카테고리를 설정한다.
  - 카테고리
tags: # 카테고리는 sub url이 붙는 페이지가 있지만, 태그는 없다. 대괄호 안에서 콤마로 구분해준다.
  - [Blog, Jekyll, Github, Git]

toc: true # Table Of Contents. 포스트 해더들만 보여주는 목차를 사용할 것인지의 여부. true = 목차보임 , false = 목차 안보임
toc_sticky: true # true로 해주면 목차가 스크롤을 따라 움직인다.

date: 2021-00-00 # 글을 처음 작성한 날짜, yyyy-mm-dd 형식으로 작성한다.
last_modified_at: 2021-00-00 # 이 글을 수정한 날짜
---

마크다운 형식의 포스트 시작점

#

<br>

<img src="이미지 url" width="가로 크기" height="세로 크기">

<div class="notice--primary" markdown="1">
Notice
</div>

혹은

문단의 바로 다음줄에 {: .notice}만 붙여 준다.
{: .notice}
