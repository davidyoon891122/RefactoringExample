// ASIS
manager = aPerson.manager;

class Person {
    get manager() { return this.department.manager; }
}
// TOBE
manager = aPerson.department.manager;

// 예시
// 클라이언트 
manager = aPerson.manager;

class Person {
    get manager() { return this._department.manager; }
}

class Department {
    get manager() { return this._manager; }
}

// Step 1 위임 객체를 얻는 게터를 만들자
class Person {
    get manager() { return this._department.manager; }

    get department() {
        return this._department
    }
}

// 클라이언트
manager = aPerson.department.manager;

// Step 2 Person에 manager 메서드 삭제

class Person {
    get department() {
        return this._department
    }
}

// 클라이언트
manager = aPerson.department.manager;

