// ASIS
class Person {
    get officeAreaCode() { return this._officeAreaCode; }
    get officeNumber() { return this._officeNumber; }
}

// TOBE

class Person {
    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    get officeNumber() { return this._telephoneNumber.number; }
}

class TelephoneNumber {
    get areaCode() { return this._areaCode; }
    get number() { return this._number; }
}

// 예시
// ASIS
class Person {
    constructor() {

    }
    get name() { return this._name; }
    set name(arg) { this._name = arg; }
    get telephoneNumber() { return `(${this.officeAreaCode}) ${this.officeNumber}`; }
    get officeAreaCode() { return this._officeAreaCode; }
    set officeAreaCode(arg) { this._officeAreaCode = arg; }
    get officeNumber() { return this._officeNumber; }
    set officenumber(arg) { this._officeNumber = arg; }
}

// Step 1 새로운 클래스 생성
class TelephoneNumber {

}

// Step 2 Person 클래스의 인스턴스를 생성할 때 전화번호 인스턴스도 함께 생성
class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }
}

class TelephoneNumber {
    get officeAreaCode() { return this._officeAreaCode; }
    set officeAreaCode(arg) { this._areaCode = arg; }
}

// Step 3 필드들을 하나씩 새 클래스에 옮긴다
class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode() { return this._telephoneNumber.officeAreaCode; }
    set officeAreaCode(arg) { this._telephoneNumber.officeAreaCode = arg; }
}

// Step 4 다음 필드로 이동
class TelephoneNumber {
    get officeAreaCode() { return this._officeAreaCode; }
    set officeAreaCode(arg) { this._areaCode = arg; }
    get officeNumber() { return this._officeNumber; }
    set officeNumber(arg) { this._officeNumber = arg; }
}

class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode() { return this._telephoneNumber.officeAreaCode; }
    set officeAreaCode(arg) { this._telephoneNumber.officeAreaCode = arg; }
    get officeNumber() { return this._telephoneNumber.officeNumber; }
    set officeNumber() { this._telephoneNumber.officeNumber = arg}
}

// Step 5 telephoneNumber() 메서드 이동
class TelephoneNumber {
    get officeAreaCode() { return this._officeAreaCode; }
    set officeAreaCode(arg) { this._areaCode = arg; }
    get officeNumber() { return this._officeNumber; }
    set officeNumber(arg) { this._officeNumber = arg; }
    get telephoneNumber() { return `(${this.officeAreaCode}) ${this.officeNumber}`; }
}

class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode() { return this._telephoneNumber.officeAreaCode; }
    set officeAreaCode(arg) { this._telephoneNumber.officeAreaCode = arg; }
    get officeNumber() { return this._telephoneNumber.officeNumber; }
    set officeNumber() { this._telephoneNumber.officeNumber = arg}
    get telephoneNumber() { this._telephoneNumber.telephoneNumber;}
}

// Step 6 변수명 정리
class TelephoneNumber {
    get areaCode() { return this._officeAreaCode; }
    set areaCode(arg) { this._areaCode = arg; }
    get number() { return this._officeNumber; }
    set number(arg) { this._officeNumber = arg; }
    toString() { return `(${this.officeAreaCode}) ${this.officeNumber}`; }
}

class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg; }
    get officeNumber() { return this._telephoneNumber.number; }
    set officeNumber() { this._telephoneNumber.number = arg}
    get telephoneNumber() { this._telephoneNumber.toString();}
}