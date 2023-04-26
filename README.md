# Playground
### 프로젝트 목차
1. [QUIZ](#quiz)
2. [마이월드](#마이월드-개발-기획서)
### 의존성 설치
전체 설치
```
$ npm run initialize
```
개별 설치
```
$ cd (원하는 폴더명)
$ npm i
```
## QUIZ

[![image](https://user-images.githubusercontent.com/87280835/226159817-35292084-6b36-4659-a174-594c80791c6d.png)](https://dashing-treacle-6f3a12.netlify.app/)

위 짤로 유명한 미국의 애니메이션 시트콤 Futurama 퀴즈게임입니다.

sample API를 이용하여 퀴즈 데이터를 가져왔습니다.

### 실행방법

```
$ npm run quiz
```

또는

```
$ cd quiz
$ npm start
```

### 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">

### 접속 사이트

netlify를 통해 배포하였습니다.

https://dashing-treacle-6f3a12.netlify.app/


## 마이월드 개발 기획서
### 배경
실생활에서 유용하게 자주 사용할 만한 페이지를 만들어 보고 싶었습니다.

### 목표
typescript, redux 숙련 및 개발 역량 강화

### 기능
바로가기, 파일 업로드, 배경화면 변경, Todo, 메모지, 시계, 날짜 등

### 기술 스택
언어 : Typescript

라이브러리 : React

스타일링 : SCSS

상태관리 : Redux, Redux-persist, redux-saga/redux-thunk(비동기 미들웨어)


배포 : Git-pages action, AWS amplify

개발환경 : Window11, VScode, node ver.18.15.0

### 디자인
모두에게 익숙한 윈도우 os 디자인으로 구현할 예정입니다.

<img src="https://velog.velcdn.com/images/1g2g/post/b9cec51f-991a-45d0-beee-3a26dc697c9e/image.png"/>
