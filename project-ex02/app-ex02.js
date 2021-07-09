/**
 * heeyomi-math.js npm 모듈 테스트(모듈 패키지 : 로컬 배포)
 * npm i ../heeyomi-math
 * 명령으로 설치 후, 테스트 할 것
 */
const hMath = require('heeyomi-math');

console.log(hMath.sum(1,2,3,4));
console.log(hMath.max(-10,100,-33,29));
console.log(hMath.min(-10,100,-33,29));