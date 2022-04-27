// ASIS
class Employee {
    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    validateType(arg) {
        if (!["engineer", "manager", "salesperson"].includes(arg))
            throw new Error(`${arg}라는 직원 유형은 없습니다.`)
    }
    get type() { return this._type; }
    set type(arg) {this._type = arg;}

    get capitalizedType() {
        return this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase();
    }

    toString() {
        return `${this._name} (${this.capitalizedType})`;
    }
}

// TOBE
// Step 1 타입 코드를 객체로 바꾸기
class EmployeeType {
    constructor(aString) {
        this._value = aString;
    }

    toString() {
        return this._value;
    }
}

class Employee {
    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this.type = type;
    }

    validateType(arg) {
        if (!["engineer", "manager", "salesperson"].includes(arg))
            throw new Error(`${arg}라는 직원 유형은 없습니다.`)
    }
    get typeString() { return this._type.toString();}
    get type() { return this._type;}
    set type(arg) { this._type = new EmployeeType(arg);}

    get capitalizedType() {
        return this.typeString.charAt(0).toUpperCase() + this.typeString.substr(1).toLowerCase();
    }

    toString() {
        return `${this._name} (${this.capitalizedType})`
    }
}

// Step 2 직원 유형 리팩터링
class Employee {
    set type(arg) { this._type = Employee.createEmployeeType(arg);}
    static createEmployeeType(aString) {
        switch(aString) {
            case "engineer": return new Engineer();
            case "manager": return new Manager();
            case "salesperson": return new Salesperson();
            default: throw new Error(`${aString}라는 직원 유형은 없습니다.`)
        }
    }
}
class EmployeeType {

}

class Engineer extends EmployeeType {
    toString() { return "engineer";}
}

class Manager extends EmployeeType {
    toString() { return "manager";}
}

class Salesperson extends EmployeeType {
    toString() { return "salesperson";}
}
// 빈 EmployeeType을 제거할 수도 있지만 다양한 서브클래스 사이의 관계를 명확히 알려주는 클래스라면 그냥 두어도 괜찮다.
// 또한, 이 클래스는 다른 기능을 옮겨놓기에 편리한 장소이기도 하다.
// Step 3 capitalizedName 메소드를 옮겨보자
class Employee {
    toString() {
        return `${this._name} (${this.type.capitalizedName})`
    }
}

class EmployeeType {
    get capitalizedName() {
        return this.toString().charAt(0).toUpperCase() + this.toString().substr(1).toLowerCase();
    }
}