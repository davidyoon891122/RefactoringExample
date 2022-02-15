// ASIS
let a = height * width;

// TOBE
let area = height * width

// 예시 변수 이름 변경
// ASIS
let hpHd = "untitled";

result += `<h1>${hpHd}</h1>`;

tpHd = obj['articleTitle'];

// TOBE
// Step 1 캡슐화
result += `<h1>${title()}</h1>`;
setTitle(obj['articleTitle']);

function title() { return tpHd; }; 
function setTitle(arg) { tpHd = arg; }

// Step 2 변수이름 변경
let _title = "untitled"

function title() { return _title; }; 
function setTitle(arg) { _title = arg; }

// 예시 상수 이름 변경
// ASIS
const cpyNm = "애크미 구스베리";

// TOBE
const companyName = "애크미 구스베리";
const cpyNm = companyName;