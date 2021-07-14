1. 패키지(package)
  - 완전한 애플리케이션 ex) devtools(nodeamon, babel, webpack...)
  - 코드 샘플, 프로젝트에서 사용하는 모듈(라이브러리)
2. 의존성(Dependency)
  - 개발하고 있는 프로젝트(패키지, 애플리케이션)에서 설치하고 사용하고 있는 다른 패키지<br>
    1\) 일반 의존성 : 개발하고 있는 애플리케이션에서 사용하는 패키지로 배포에 꼭 필요함<br>
        $ npm i ...<br>
    2\) 개발 의존성 : 개발에 필요하거나 도움이 되는 패키지(dev tool) 패키지에 포함 안되어 있다.<br>
         $ npm i -D ...
3. 패키지 설치 방식<br>
    1\) 전역(global) 설치 : 여러 프로젝트에서 공통으로 사용하는 도구들 설치<br>
       $ npm i -g ... <br>
    2\) 전역(project local) 설치 : 특정 프로젝트에만 종속적인 도구나 라이브러리<br>
       $ npm i ...

## 패키지 설치
[project-ex01] $ npm i ejs          (local install, general dependency)<br>
[project-ex01] $ npm i -D nodeamon  (local install, development Dependency)<br>
[project-ex01] $ npm i -g gulp      (global install)<br>


## 패키지 삭제
[project-ex01] $ npm un ejs      (local install 삭제) <br>
[project-ex01] $ npm un -g gulp  (global install 삭제) <br>

## Node(JavaScript) project (Application, Package) 생성
1. 프로젝트 디렉토리를 생성          (mkdir) <br>
2. 프로젝트 디렉토리로 이동          (cd) <br>
3. [project-ex01] $ npm init -y    (프로젝트 매니페스트 파일(package.js) 생성, 프로젝트 초기화 )

<hr>

## 모듈
1. 코어모듈(fs, os, ... node에서 제공해주는 모듈)<br>
2. 파일모듈 : 파일의 경로로 불러와서 모듈안의 객체, 함수, 클래스를 사용한다.<br>
3. npm모듈 : npm을 통해서 node_modules에 설치해서 사용하는 모듈<br>
   패키지 설치 방법 : 1. 로컬 배포<Br>
                         2. 원격 배포
<hr>

## npmjs.com npm registry에 패키지 배포

  1. 사용자 등록<br>
   $ npm adduser<Br>
     Username : heeyomi<br>
     Password :<br>
     Email : yhg9508@gmail.com<br>
     Logged....<br>
2. 업로드<br>
[heeyomi] $ npm publish

<hr>

맨바닥에서 웹 애플리케이션 만들어보기<br>
helloweb-ex01<br>
app01. based on http : core module<br>
app02. based on (http, fs) : core module<br>
app03. based on (connect, serve-static) : npm package(module)<br>
app04. based on (connect, serve-static, connect-route) : npm package(module)<br>

helloweb-ex02 based on express : npm package(module)<br>
[helloweb-ex02] npm init -y<br>

[helloweb-ex02] npm i express<br>
[helloweb-ex02] npm i ejs<br>
[helloweb-ex02] npm i -D nodemon<br>

package.json 스크립트 수정<br>

```javaSctipt
"scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js"
  },
```

[helloweb-ex02] npm start (운용시)<br>
[helloweb-ex02] npm run debug (개발시... Live Update)<br>

[helloweb-ex02] mkdir public <br>
[helloweb-ex02] mkdir views <br>
[helloweb-ex02] mkdir routes <br>
[helloweb-ex02] mkdir controllers <br>
[helloweb-ex02] mkdir models <br>

<hr>
eamillist01 (model based mysql) - 기본 sql 기반<br>
emaillist02 (model based sequalizer) - ORM<br>

[helloweb-ex02] npm init -y<br>

[helloweb-ex02] npm i express<br>
[helloweb-ex02] npm i ejs<br>
[helloweb-ex02] npm i mysql<br>
[helloweb-ex02] npm i -D nodemon<br>

package.json 스크립트 수정<br>

```javaSctipt
"scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js"
  },
```

[emaillist01] npm start (운용시)<br>
[emaillist01] npm run debug (개발시... Live Update)<br>

[emaillist01] mkdir public <br>
[emaillist01] mkdir views <br>
[emaillist01] mkdir routes <br>
[emaillist01] mkdir controllers <br>
[emaillist01] mkdir models <br>

<hr>
guestbook01 (model based mysql) - 기본 sql 기반<br>
guestbook02 (model based sequalizer) - ORM<br>

[guestbook01] npm init -y<br>

[guestbook01] npm i express<br>
[guestbook01] npm i ejs<br>
[guestbook01] npm i mysql<br>
[guestbook01] npm i -D nodemon<br>

package.json 스크립트 수정<br>

```javaSctipt
"scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js"
  },
```

[guestbook01] npm start (운용시)<br>
[guestbook01] npm run debug (개발시... Live Update)<br>

[guestbook01] mkdir public <br>
[guestbook01] mkdir views <br>
[guestbook01] mkdir routes <br>
[guestbook01] mkdir controllers <br>
[guestbook01] mkdir models <br>