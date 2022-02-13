// ASIS
let defaultOwner = {firstName: "마틴", lastName: "파울러"};

// TOBE
let defaultOwnerData = {firstName: "마틴", lastName: "파울러"};
export function defaultOwner() {return defaultOwnerData;}
export function setDefaultOwner(arg) {defaultOwnerData = arg;}

const owner1 = defaultOwner();
assert("파울러", owner1.lastName, "처음 값 확인");
const owner2 = defaultOwner();
owner2.lastName = "파슨스";
assert.equal("파슨스", owner1.lastName, "owner2를 변경한 후"); //성공할까? 
console.log(defaultOwner())

let defaultOwnerData = {firstName: "마틴", lastName: "파울러"};
//게터가 데이터의 복제본을 반환하도록 함수 수정
export function defaultOwner() {return Object.assign({},defaultOwnerData);}
export function setDefaultOwner(arg) {defaultOwnerData = arg;}

//레코드 캡슐화하기

class Person {
    constructor(data) {
        this._lastName = data.lastName;
        this._firstName = data.firstName;
    }

    get lastName() { return this._lastName; }
    get firstName() { return this._firstName; }
}