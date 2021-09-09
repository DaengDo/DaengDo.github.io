---
classes: wide # wide, medium, small 로 게시글의 구성 결정 
title: "[제목] 제목" # 제목을 큰 따옴표로 감싼다. title을 적어주지 않으면 .md 파일 이름으로 적어주었던 title 부분이 제목으로 업로드 된다.
excerpt: "" # 포스트 목록에서 보여지는 아래쪽 문구다.

categories: # 카테고리를 설정한다.
  - 카테고리
tags: # 카테고리는 sub url이 붙는 페이지가 있지만, 태그는 없다. 대괄호 안에서 콤마로 구분해준다.
  - [Blog, Jekyll, Github, Git]

toc: true # Table Of Contents. 포스트 해더들만 보여주는 목차를 사용할 것인지의 여부. true = 목차보임 , false = 목차 안보임
toc_sticky: true # true로 해주면 목차가 스크롤을 따라 움직인다.
show_date: true
read_time: false

date: 2021-00-00 # 글을 처음 작성한 날짜, yyyy-mm-dd 형식으로 작성한다.
last_modified_at: 2021-00-00 # 이 글을 수정한 날짜
# header: # 해더 이미지를 추가하면 opengraph 로 글이 링크 걸릴때 대표 이미지로 뜬다.
#   image: /assets/images/page-header-image.png
#   og_image: /assets/images/page-header-og-image.png
---

마크다운 형식의 포스트 시작점

#

warning text
{: .notice--warning}

primary text
{: .notice--primary}

small text
{: .small}

<br>

<img src="../../assets/images/{파일이름.확장자}" width, height>

<div class="notice--primary" markdown="1">
  내용
</div>



---

{: .notice--primary}

---


**참고 자료**

[제목](URL){:target="_blank"}