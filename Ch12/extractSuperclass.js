// ASIS
class Department {
    get totalAnnualCost() {

    }

    get name() {

    }
    get headCount() {

    }
}

class Employee {
    get annualCost() {

    }
    get name() {

    }
    get id() {

    }
}

// TOBE
class Party {
    get name() {

    }

    get annualCost() {

    }
}

class Department extends Party {
    get annualCast() {

    }

    get headCount() {

    }
}

class Employee extends Party {
    get annualCast() {

    }
    get id() {

    }
}

// 예시
// ASIS
class Employee {
    constructor(name, id, monthlyCost) {
        this._id = id
        this._name = name
        this._monthlyCost = monthlyCost
    }
    get monthlyCost() { return this._monthlyCost; } // 월간 비용
    get name() { return this._name; } // 이름
    get id() { return this._id; } 

    get annualCost() {  // 연간 비용
        return this.monthlyCost * 12
    }
}

class Department {
    constructor(name, staff) {
        this._name = name
        this._staff = staff
    }
    get staff() { return this._staff; }
    get name() { return this._name; } // 이름

    get totalMonthlyCost() { // 총 월간 비용
        return this.staff
        .map(e => e.monthlyCost)
        .reduce((sum, cost) => sum + cost)
    }
    get headCount() {
        return this.staff.length
    }
    get totalAnnualCost() { // 총 연간 비용
        return this.totalMonthlyCost * 12
    }
}

// TOBE
// Step 1 빈 슈퍼클래스를 만들고 두 클래스가 확장하도록 만든다.
class Party {}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        this._id = id
        this._name = name
        this._monthlyCost = monthlyCost
    }
    get monthlyCost() { return this._monthlyCost; } // 월간 비용
    get name() { return this._name; } // 이름
    get id() { return this._id; } 

    get annualCost() {  // 연간 비용
        return this.monthlyCost * 12
    }
}

class Department extends Party {
    constructor(name, staff) {
        this._name = name
        this._staff = staff
    }
    get staff() { return this._staff; }
    get name() { return this._name; } // 이름

    get totalMonthlyCost() { // 총 월간 비용
        return this.staff
        .map(e => e.monthlyCost)
        .reduce((sum, cost) => sum + cost)
    }
    get headCount() {
        return this.staff.length
    }
    get totalAnnualCost() { // 총 연간 비용
        return this.totalMonthlyCost * 12
    }
}

// Step 2 데이터부터 변경 생성자를 만져 이름 속성 올리기

class Party {
    constructor(name) {
        this._name = name
    }
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name)
        this._id = id
        this._monthlyCost = monthlyCost
    }
    get monthlyCost() { return this._monthlyCost; } // 월간 비용
    get name() { return this._name; } // 이름
    get id() { return this._id; } 

    get annualCost() {  // 연간 비용
        return this.monthlyCost * 12
    }
}

class Department extends Party {
    constructor(name, staff) {
        super(name)
        this._staff = staff
    }
    get staff() { return this._staff; }
    get name() { return this._name; } // 이름

    get totalMonthlyCost() { // 총 월간 비용
        return this.staff
        .map(e => e.monthlyCost)
        .reduce((sum, cost) => sum + cost)
    }
    get headCount() {
        return this.staff.length
    }
    get totalAnnualCost() { // 총 연간 비용
        return this.totalMonthlyCost * 12
    }
}
// Step 3 옮긴 데이터와 관련된 메서들을 옮긴다

class Party {
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name)
        this._id = id
        this._monthlyCost = monthlyCost
    }
    get monthlyCost() { return this._monthlyCost; } // 월간 비용
    get id() { return this._id; } 

    get annualCost() {  // 연간 비용
        return this.monthlyCost * 12
    }
}

class Department extends Party {
    constructor(name, staff) {
        super(name)
        this._staff = staff
    }
    get staff() { return this._staff; }

    get totalMonthlyCost() { // 총 월간 비용
        return this.staff
        .map(e => e.monthlyCost)
        .reduce((sum, cost) => sum + cost)
    }
    get headCount() {
        return this.staff.length
    }
    get totalAnnualCost() { // 총 연간 비용
        return this.totalMonthlyCost * 12
    }
}

// Step 4 동일한 의도를 가진 annualCost, totalAnnualCost를 함수 선언 바꾸기로 이름을 통일한다.
// 이름을 동일하게 맞추기 
class Party {
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name)
        this._id = id
        this._monthlyCost = monthlyCost
    }
    get monthlyCost() { return this._monthlyCost; } // 월간 비용
    get id() { return this._id; } 

    get annualCost() {  // 연간 비용
        return this.monthlyCost * 12
    }
}

class Department extends Party {
    constructor(name, staff) {
        super(name)
        this._staff = staff
    }
    get staff() { return this._staff; }

    get monthlyCost() { // 총 월간 비용, 이름 변경
        return this.staff
        .map(e => e.monthlyCost)
        .reduce((sum, cost) => sum + cost)
    }
    get headCount() {
        return this.staff.length
    }
    get annualCast() { // 총 연간 비용, 이름 통일 
        return this.monthlyCost * 12
    }
}

// Step 4-2 동일한 함수 올리기
class Party {
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name
    }

    get annualCast() { // 총 연간 비용, 이름 통일 
        return this.monthlyCost * 12
    }
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name)
        this._id = id
        this._monthlyCost = monthlyCost
    }
    get monthlyCost() { return this._monthlyCost; } // 월간 비용
    get id() { return this._id; } 
}

class Department extends Party {
    constructor(name, staff) {
        super(name)
        this._staff = staff
    }
    get staff() { return this._staff; }

    get monthlyCost() { // 총 월간 비용, 이름 변경
        return this.staff
        .map(e => e.monthlyCost)
        .reduce((sum, cost) => sum + cost)
    }
    get headCount() {
        return this.staff.length
    }
}

