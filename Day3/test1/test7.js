//모듈을 추출합니다.
var url = require('url');

//모듈을 사용합니다.
var parseObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B425023466');
console.log(parseObject);