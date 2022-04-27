// ASIS
class Party {

}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super();
        this._id = id;
        this._name = name;
        this._monthlyCost = monthlyCost;
    }
}

// TOBE

class Party {
    constructor(name) {
        this._name = name;
    }
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name);
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
}

// 예시
// ASIS

class Party {}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super();
        this._id = id;
        this._name = name;
        this._monthlyCost = monthlyCost;
    }
}

class Department extends Party {
    constructor(name, staff) {
        super();
        this._name = name;
        this._staff = staff;
    }
}

// 예시 1
// Step 1 공통 코드 name을 Employee에서 super 아래로 옮긴다.
class Party {}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super();
        this._name = name;
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
}

class Department extends Party {
    constructor(name, staff) {
        super();
        this._name = name;
        this._staff = staff;
    }
}

// Step 2 테스트 후 이 공통 코드를 슈퍼 클래스로 옮긴다.
class Party {
    constructor(name) {
        this._name = name;
    }
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name);
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
}

class Department extends Party {
    constructor(name, staff) {
        super(name);
        this._staff = staff;
    }
}

// 예시 2 공통 코드가 나중에 올 때
// ASIS
class Employee {
    constructor(name) {
        this._name = name
    }
    get isPrivileged() {

    }

    assignCar() {

    }
}

class Manager extends Employee {
    constructor(name, grade) {
        super(name);
        this._grade = grade;
        if (this.isPrivileged) this.assignCar(); // 모든 서브클래스가 수행한다.
    }

    get isPrivileged() {
        return this._grade > 4;
    }
}

// Step 1 공통 코드를 함수로 추출
class Manager extends Employee {
    constructor(name, grade) {
        super(name);
        this._grade = grade;
        this.finishConstruction();
    }

    finishConstruction() {
        if (this.isPrivileged) this.assignCar()
    }
}
// Step 2 추출한 메서드를 슈퍼 클래스로 옮긴다.
class Employee {
    constructor(name) {
        this._name = name
    }

    get isPrivileged() {
    }
    
    assignCar() {
    }

    finishConstruction() {
        if (this.isPrivileged) this.assignCar()
    }
}