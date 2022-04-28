// ASIS
function createEmployee(name, type) {
    return new Employee(name, type);
}

// TOBE
function createEmployee(name, type) {
    switch (type) {
        case "engineer": return new Engineer(name);
        case "salesperson": return new Salesperson(name);
        case "maanger": return new Manager(name);
    }
}

// 예시
// ASIS
class Employee {
    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    validateType(arg) {
        if (!["engineer", "manager", "salesperson"].includes(arg))
            throw new Error(`${arg}라는 직원 유형은 없습니다.'`);
    }
    toString() {
        return `${this._name} (${this._type})`
    }
}

// Step 1 코드 타입을 자가 캡슐화 한다.

class Employee {
    get type() { return this._type; }
    
    toString() {
        return  `${this._name} (${this.type})` // 게터 사용하여 type 가져옴
    }
}

// Step 2 타입 코드 중 하나 엔지니어를 서브클래싱한다 코드 게터를 오버라이드하여 적절한 리터럴 값을 반환하기만 하면 된다.
class Engineer extends Employee {
    get type() { return "engineer"; }
}

// Step 3 생성자를 팩터리 함수로 바꿔서 선택로직을 담을 별도 장소를 마련한다.
function createEmployee(name, type) {
    return new Employee(name, type);
}

// Step 4 새로 만들 서브클래스를 사용하기 위해 선택 로직을 팩터리에 추가한다.
function createEmployee(name, type) {
    switch (type) {
        case "engineer": return new Engineer(name, type)
    }
    return new Employee(name, type);
}

// Step 5 다른 타입도 서브클래스로 만든다.
class Salesperson extends Employee {
    get type() { return "slaesperson";}
}

class Manager extends Employee {
    get type() { return "manager"; }
}

function createEmployee(name, type) {
    switch (type) {
        case "engineer": return new Engineer(name, type);
        case "salesperson": return new Salesperson(name, type);
        case "manager": return new Manager(name, type);
    }
    return new Employee(name, type);
}

// Step 6 타입 코드 필드와 슈퍼클래스의 게터를 제거한다.
class Employee {
    constructor(name, type) {
        this.validateType(type);
        this._name = name;
    }
    
    toString() {
        return  `${this._name} (${this.type})`
    }
}

// Step 7 검증 로직도 제거한다. switch 문이 검증을 수행하기 떄문이다.
class Employee {
    constructor(name, type) {
        this._name = name;
    }
    
    toString() {
        return  `${this._name} (${this.type})`
    }
}

function createEmployee(name, type) {
    switch (type) {
        case "engineer": return new Engineer(name, type);
        case "salesperson": return new Salesperson(name, type);
        case "manager": return new Manager(name, type);
        default: throw new Error(`${type}라는 직원 유형은 없습니다.`)
    }
}

// Step 8 생성자에서 건네는 타입 코드 인수는 쓰이지 않으니 제거한다
class Employee {
    constructor(name) {
        this._name = name;
    }
    
    toString() {
        return  `${this._name} (${this.type})`
    }
}

function createEmployee(name, type) {
    switch (type) {
        case "engineer": return new Engineer(name);
        case "salesperson": return new Salesperson(name);
        case "manager": return new Manager(name);
        default: throw new Error(`${type}라는 직원 유형은 없습니다.`)
    }
}

// 서브클래스들에 타입 코드 게터(get type()) 여전히 남아 있다. 보통은 제거하고 싶겠지만, 이용하는 코드가 어딘가에 남아 있을 수 있다.
// 조건부 로직을 다형성으로 바꾸기와 메서드 내리기로 문제를 해결하자. 하나씩 해결하다 보면 타입 게터를 호출하는 코드가 모두 사라질 것이다.
