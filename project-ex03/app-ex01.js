/**
 * heeyomi-math.js npm 모듈 테스트(모듈 패키지 : 원격 레지스트리)
 * 
 * npm i heeyomi-math
 * 명령으로 설치 후, 테스트 할 것
 */
 const hMath = require('../heeyomi-math/heeyomi-math'); //require 옛날 방식 , import는 es6 방식

 console.log(hMath.sum(1,2,3,4));
 console.log(hMath.max(-10,100,-33,29));
 console.log(hMath.min(-10,100,-33,29));