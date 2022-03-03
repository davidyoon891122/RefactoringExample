// ASIS
manager = aPerson.department.manager;

// TOBE
manager = aPerson.manager

class Person {
    get manager() { return this.department.manager; }
}

// 예시 사람과 사람이 속한 부서
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
    get department() { return this._department; }
    set department(arg) { this._department = arg; }
}

class Department {
    get chargeCode() { return this._chargeCode; }
    set chargeCode(arg) { this._chargeCode = arg; }
    get manager() { return this._manager; }
    set manager(arg) { this._manager = arg; }
}

// 클라이언트애서 어떤 사람이 속한 부서의 관리자를 알고 싶으면 부서 객체로부터 정보를 얻어야 한다.
// 클라이언트
manager = aPerson.department.manager

// Step 1 클라이언트가 부서 클래스를 볼수 없게 숨기고, 대신 사람 클래스에 간단한 위임 메소드를 만든다
class Person {
    get manager() {
        return this._department.manager;
    }
}

// Step 2 클라이언트 수정

manager = aPerson.manager;

// 사람 클래스의 department 접근자 삭제

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
    set department(arg) { this._department = arg; }
}