// ASIS
function base(aReading) { }
function taxableCharge(aReading) { }
function calulateBaseCharge(aReading) { }
// TOBE
class Reading {
    base() {}
    taxable() {}
    calulateBaseCharge() {}
}

// 예시 정부에서 차를 수돗물처럼 제공하는 예
reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

// 클라이언트 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// 클라이언트 2
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 클라이언트 3
const aReading = acquireReading();
const basicChargeAmount = calucateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// Step 1 레코드를 클래스로 변환하기 위해 레코드 캡슐화
class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() {return this._customer;}
    get quantity() {return this._quantity;}
    get month() {return this._month;}
    get year() {return this._year;}
}

// Step 2 calculateBaseCharge() 옮기기
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = calucateBaseCharge(aReading);

// Step 3 새로 만든 클래스로 calucateBaseCharge() 옮기기
class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() {return this._customer;}
    get quantity() {return this._quantity;}
    get month() {return this._month;}
    get year() {return this._year;}

    get calculateBaseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }
}

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.calculateBaseCharge;

// Step 4 함수 이름 변경
class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() {return this._customer;}
    get quantity() {return this._quantity;}
    get month() {return this._month;}
    get year() {return this._year;}

    get baseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }
}

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;

// Step 5 클라이언트 2 세금 계산하는 클라이언트 인라인
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));

// Step 6 세금을 부과할 소비량을 계산하는 코드를 함수로 추출
class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() {return this._customer;}
    get quantity() {return this._quantity;}
    get month() {return this._month;}
    get year() {return this._year;}

    get baseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }
    get taxableCharge() {
        return Math.max(0, this.baseCharge - taxThreshold(this.year))
    }
}

// Step 7 클라이언트 3 수정
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = aReading.taxableCharge;