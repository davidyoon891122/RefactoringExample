// ASIS
class Person {
    get genderCode() { return "X"; }
}

class Male extends Person {
    get genderCode() { return "M"; }
}

class Female extends Person {
    get genderCode() { return "F"; }
}

// TOBE

class Person {
    get genderCode() {
        return this._genderCode;
    }
}


// 예시
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() { return this._name; }
    get genderCode() { return "X"; }
}

class Male extends Person {
    get genderCode() { return "M"; }
}

class Female extends Person {
    get genderCode() { return "F"; }
}

// 서브클래스가 하는 일이 이게 다라면 존재할 이유가 없다

// 클라이언트
const numberOfMales = people.filter(p => p instanceof Male).length;

// Step 1 생성자를 팩터리 함수로 바꾸기
function createPerson(name) {
    return new Person(name);
}
function createMale(name) {
    return new Male(name);
}
function createFemale(name) {
    return new Female(name);
}

// Step 2 성별 코드를 사용하는 곳에서 직접 생성
function loadFromInput(data) {
    const result = [];
    data.forEach(aRecord => {
        let p;
        switch(aRecord.gender) {
            case 'M': p = new Male(aRecord.name); break;
            case 'F': p = new Female(aRecord.name); break;
            default: p = new Person(aRecord.name);
        }
        result.push(p);
    });
    return result
}

// Step 3 생성할 클래스를 선택하는 로직을 함수로 추출하고 그 함수를 팩터리 함수로 만들기
function creatPerson(aRecord) {
    let p;
    switch(aRecord.gender) {
        case 'M': p = new Male(aRecord.name); break;
        case 'F': p = new Female(aRecord.name); break;
        default: p = new Person(aRecord.name);
    }
    return p;
}
function loadFromInput(data) {
    const result = [];
    data.forEach(aRecord => {
        result.push(creatPerson(aRecord));
    });
    return result
}

// Step 4 두 함수를 정리 createPerson()에서 변수 p를 인라인
function creatPerson(aRecord) {
    switch(aRecord.gender) {
        case 'M': return new Male(aRecord.name); 
        case 'F': return new Female(aRecord.name); 
        default: return new Person(aRecord.name);
    }
}

// Step 5 loadFromInput() 의 반복문을 파이프라인으로 변경
function loadFromInput(data) {
    return data.map(aRecord => creatPerson(aRecord));
}

// Step 6 클라이언트의 타입 검사 코들(instanceof)를 함수로 추출
// 클라이언트
const numberOfMales = people.filter(p => isMale(p)).length;

function isMale(aPerson) {
    return aPerson instanceof Male;
}

// Step 7 추출한 함수를 Person 클래스로 옮기기
class Person {
    get isMale() { return this instanceof Male; }
}

const numberOfMales = people.filter(p => p.isMale).length;

// Step 8 서브클래스들의 차이를 나타낼 필드를 추가, 성별 정보는 Person 클래스 외부에서 정해 전달하는 방식이니 생성자에서 매개변수로 받아 설정
class Person {
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode || "X";
    }

    get genderCode() { return this._genderCode; }
}

// Step 9 남성인 경우의 로직을 슈퍼클래스로 옮긴다.
function createPerson(aRecord) {
    switch(aRecord.gender) {
        case 'M': return new Person(aRecord.name, "M");
        case 'F': return new Female(aRecord.name);
        default: return new Person(aRecord.name);
    }
}

class Person {
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode || "X";
    }

    get genderCode() { return this._genderCode; }
    get isMale() { return "M" === this._genderCode; }
}

// Step 10 테스트 후 남성 클래스 제거 후 여성 클래스도 같은 작업 반복
function createPerson(aRecord) {
    switch(aRecord.gender) {
        case 'M': return new Person(aRecord.name, "M");
        case 'F': return new Person(aRecord.name, "F");
        default: return new Person(aRecord.name);
    }
}

// Step 11 코드 일관성을 위해 디폴트에도 성별 코드 건네도록 설정
function createPerson(aRecord) {
    switch(aRecord.gender) {
        case 'M': return new Person(aRecord.name, "M");
        case 'F': return new Person(aRecord.name, "F");
        default: return new Person(aRecord.name, "X");
    }
}

class Person {
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode
    }
}