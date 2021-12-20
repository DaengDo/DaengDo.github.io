---
classes: wide
title: "React-native 환경 설정"
excerpt: ""
categories:
  - Preset
tags:
  - [Preset, Win10, React-native]
toc: true
toc_sticky: true
show_date: true
read_time: false
date: 2021-12-19
last_modified_at: 2021-12-20 # 수정한 날짜
---

windows 10 기준
{: .small}

# 1. android studio 설치
- [android studio 홈페이지](https://developer.android.com/studio?hl=ko){:target="_blank"}
- 주의사항
  - windows 사용자 계정이 한글명이면 오류가 나거나 경로를 잘 못찾음
- cmos, bios, efi 환경 설정에서 `cpu가상화` 옵션 설정을 켜준다.
- amd cpu 에러
  - https://itmir.tistory.com/667
- 바이러스 백신 프로그램이 가상화 설정을 끄는 경우도 존재(종료 후 진행)

# 2. AVD manager 실행
- 안드로이드 스튜디오 실행 후 `More Actions` -> `AVD manager`
- 원하는 기기 선택 후 `System Image` 다운로드(안드10버전으로 진행)
- 원하는 설정 적용 후 Finish
- Actions의 `View Details` 클릭 후 Name과 Path 확인(픽셀2 진행시 Pixel_2_API_29 뜸)
  - ADB, Emulator 경로를 환경변수로 지정해야 함
    - `C:\Users\사용자계정\AppData\Local\Android\Sdk\platform-tools`
    - `C:\Users\사용자계정\AppData\Local\Android\Sdk\emulator`
      - 명령창에서 `adb`, `emulator` 명령어가 작동하는지 채크
  - ANDROID_SDK_ROOT 환경 변수 지정
    - `C:\Users\사용자계정\AppData\Local\Android\Sdk`
    - echo %ANDROID_SDK_ROOT%
- Actions의 재생버튼(Lanch this AVD in the emulator) 클릭 (혹은 아래의 방법)
- ADB 시작 (환경 변수 적용 후)
  - `adb kill-server`
  - `adb start-server`
  - `emulator -avd 폰api기종`
    - 나는 픽셀2로 진행함 `emulator -avd Pixel_2_API_29`


주말마다 RN 진행


---

**🐿🐿**
{: .notice--primary}

---

**참고 자료**
