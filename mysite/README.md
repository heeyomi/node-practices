# MySite on Node(Express)

## project manifest 파일(package.json) 생성
```bash
$ npm init -y
```

## 설치 패키지
```bash
$ npm init -y<br>
$ npm i express<br>
$ npm i ejs<br>
$ npm i -D nodemon
```

## script in package.json
```JSON
"scripts" : {
    "start" :"node index.js",
    "debug" : "nodemon index.js"
},
```

## project structure
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- /node-modules
    |--- /config
    |--- /public
    |--- /routes
    |--- /controllers
    |--- /models
    |--- /views
           |--- /main
           |--- /user
           |--- /guestbook
           |--- /board
           |--- /gallery
           |--- /admin
</pre>