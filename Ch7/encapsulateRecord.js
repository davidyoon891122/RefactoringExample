// ASIS
organization = {name: "애크미 구스베리", country: "GB"};

// TOBE
class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    get name() { return this._name; }
    set nmae(arg) { this._name = arg; }
    get country() { return this._country; }
    set country(arg) { this._country = arg; }
}

// 예시 
// ASIS
const organization = {name: "애크미 구스베리", country: "GB"};

result += `<h1>${organization.name}</h1>`; // 읽기 예
organization.name = "newName" //쓰기 예

// Step 1 상수 캡슐화
function getRawDataOfOrganization() {
    return organization;
}

result += `<h1>${getRawDataOfOrganization().name}</h1>`; // 읽기 예
getRawDataOfOrganization().name = "newName" //쓰기 예

// Step 2 클래스 생성
class Organization {
    constructor(data) {
        this._data = data;
    }
}

const organization = new Organization({name: "애크미 구스베리", country: "GB"});
function getRadDataOfOrganization() {
    return organization._data;
}
function getOrganization() {
    return organization;
}

// Step 3 세터 생성
class Organization {
    constructor(data) {
        this._data = data;
    }

    set name(aString) { this._data = aString; }
}

getOrganization().name = "newName";

// Step 4 게터 생성

class Organization {
    constructor(data) {
        this._data = data;
    }

    set name(aString) { this._data = aString; }
    get name() { return this._data.name; }
}

result += `<h1>${getOrganization().name}</h1>`;

// Step 5 임시 함수 제거


const organization = new Organization({name: "애크미 구스베리", country: "GB"});
function getRadDataOfOrganization() { // 제거 
    return organization._data;
}
function getOrganization() {
    return organization;
}

// Step 6 data 필드를 객체안에 펼쳐놓기

class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    set name(aString) { this._data = aString; }
    get name() { return this._data.name; }
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}

// 예시 2 중첩된 레코드 캡슐화하기
const customerData = {
    "1920": {
        name: "마틴 파울러",
        id: "1920",
        usages: {
            "2016": {
                "1": 50,
                "2": 55,
                // 나머지 달(month)은 생략
            },
            "2015": {
                "1": 70,
                "2": 63,
                // 나머지 달은 생략
            },
        },
    "38673": {
        name: "닐 포드",
        id: "38673",
        // 다른 고객 정보도 같은 형식으로 저장한다.
    },
}
}

customerData[cutomer].usages[year][month] = amount; // 쓰기 예

function compareUsage(customerID, laterYear, month) { // 읽기 예
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}

// Step 1 캡슐화
function getRawDataOfCustomers() { return customerData; }
function setRawDataOfCustomers(arg) { customerData = arg; }

getRawDataOfCustomers()[customerID].usages[year][month] = amount; // 쓰기 예

function compareUsage(cutomerID, laterYear, month) { // 읽기 예
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}

// Step 2 클래스 생성

class CustomerData {
    constructor(data) {
        this._data = data;
    }
}
const customerData = new CustomerData()
function getCustomerData(){ return customerData; }
function getRawDataOfCustomers() { return getCustomerData(); }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg); }

// Step 3 겟함수 추가

class CustomerData {
    constructor(data) {
        this._data = data;
    }
    get rawData() {
        return _.cloneDeep(this._data); // 깊은 복사하여 반환
    }
}

const customerData = new CustomerData()
function getCustomerData(){ return customerData; }
function getRawDataOfCustomers() { return customerData.rawData; }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg); }

// Step 4 방법 1) 읽는 코드를 모두 독립 함수로 추출하고 클래스로 옮기기
class CustomerData {
    constructor(data) {
        this._data = data;
    }
    get rawData() {
        return _.cloneDeep(this._data); // 깊은 복사하여 반환
    }
    usage(customerID, year, month) {
        return this._data[customerID].usages[year][month];
    }
}

function compareUsage(customerID, laterYear, month) {
    const later = getCustomerData().usage(customerID, laterYear, month);
    const earlier = getCustomerData().usage(customerID, later - 1, month);
    return {laterAmount: later, change: later - earlier};
}

// Step 4 방법 2) 실제 데이터를 제공
// 데이터 구조가 클수록 복제 비용이 커져서 성능이 느려진다는 단점이 있다.
class CustomerData {
    constructor(data) {
        this._data = data;
    }
    get rawData() {
        return _.cloneDeep(this._data); // 깊은 복사하여 반환
    }
}

function compareUsage(customerID, laterYear, month) {
    const later = getCustomerData().rawData[customerID].usages[laterYear][month];
    const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}