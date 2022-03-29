// ASIS
let customerOrigin = new Customer(customerData)

// TOBE
let customer = custumerRepository.get(customerData.id);

// 예시
// ASIS

class Order {
    constructor() {
        this._number = data.number;
        this._customer = new Customer(data.customer); // data.customer가 고객 ID임
        // 다른 데이터를 읽어 들인다.
    }
    
    get customer() { return this._customer; }
}

class Customer {
    constructor(id) {
        this._id = id;
    }

    get id() {
        return this._id; 
    }
}

// Step 1 저장소 객체(repository object) 사용
let _repositoryData;

export function initialize() {
    _repositoryData = {};
    _repositoryData.customers = new Map();
}

export function registerCustomer(id) {
    if (! _repositoryData.customer.has(id)) 
        _repositoryData.customers.set(id, new Customer(id));
    return findCustomer(id);
}

export function findCustomer(id) {
    return _repositoryData.customers.get(id);
}

// Step 2 Order 클래스 repository로 대체
class Order {
    constructor() {
        this._number = data.number;
        this._customer = registerCustomer(data.customer);
        // 다른 데이터를 읽어 들인다.
    }
    
    get customer() { return this._customer; }
}