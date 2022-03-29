// ASIS
class Product {
    applyDiscount(arg) { this._price.amount -= arg; }
}
// TOBE
class Product {
    applyDiscount(arg) {
        this._price = new Money(this._price - arg, this._price.currency);
    }
}

// 예시 
// ASIS
class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg; }
    get officeNumber() { return this._telephoneNumber.number; }
    set officeNumber(arg) { this._telephoneNumber.number = arg; }
}

class TelephoneNumber {
    get areaCode() { return this._areaCode; }
    set areaCode(arg) { this._areaCode = arg; }
    get number() { return this._number; }
    set number(arg) { this._number = arg; }
}
// Step 1 전화번호를 불변으로 만들기, 필드들의 세터들만 제거, 세터로 설정하던 두 필드를 생성자에서 입력받아 설정
class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg; }
    get officeNumber() { return this._telephoneNumber.number; }
    set officeNumber(arg) { this._telephoneNumber.number = arg; }
}

class TelephoneNumber {
    constructor(areaCode, number) { // 세터 제거를 위해 생성자에서 세팅
        this._areaCode = areaCode;
        this._number = number;
    }
    get areaCode() { return this._areaCode; }
    get number() { return this._number; }
}

// Step 2 Person에서 세터를 호출하는 쪽을 살펴서 전화번호를 매번 다시 입력하도록 변경
class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    set officeAreaCode(arg) { this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber); }
    get officeNumber() { return this._telephoneNumber.number; }
    set officeNumber(arg) { this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg); }
}

class TelephoneNumber {
    constructor(areaCode, number) { // 세터 제거를 위해 생성자에서 세팅
        this._areaCode = areaCode;
        this._number = number;
    }
    get areaCode() { return this._areaCode; }
    get number() { return this._number; }

    equals(other) {
        if (!(other instanceof TelephoneNumber)) return false;
        return this.areaCode === other.areaCode && this.number === other.number;
    }
}

