/**
 * heeyomi-math.js 파일 모듈 테스트
 */

const hMath = require('../heeyomi-math/heeyomi-math'); //require 옛날 방식 , import는 es6 방식

console.log(hMath.sum(1,2,3,4));
console.log(hMath.max(-10,100,-33,29));
console.log(hMath.min(-10,100,-33,29));