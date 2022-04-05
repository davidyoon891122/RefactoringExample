// 예시 2
// 객체 리터럴 이용하기
class Site {
    get customer { return this._customer; }
}

class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
}

// 클라이언트 1
const aCustomer = site.customer;

let customerName;
if (aCustomer === '미확인 고객') customerName = '거주자';
else customerName = aCustomer.name;

// 클라이언트 2
const plan = (aCustomer === '미확인 고객') ?
    registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = (aCsutomer === '미확인 고객') ?
    0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;

// Step 1 고객에 isUnknown() 속성을 추가하고, 이 필드를 포함하는 특이 케이스 객체를 생성한다.
class Customer {
    get isUnknown() { return false; }
}

function createUnknownCustomer() {
    return {
        isUnknown: true,
    };
}

// Step 2 특이 케이스 조건 검사 부분을 함수로 추출
function isUnknown(arg) {
    return (arg ==='미확인 고객');
}

// 클라이언트 1
let customerName;
if (isUnknown(aCustomer)) customerName = '거주자';
else customerName = aCustomer.name;

// 클라이언트 2
const plan = (isUnknown(aCustomer)) ?
    registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = isUnknown(aCustomer) ?
    0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;

// Step 3 조건을 검사하는 코드와 Site 클래스에서 이 특이 케이스를 이용하도록 수정
class Site {
    get customer() {
        return (this._customer === '미확인 고객') ? createUnknownCustomer() : this._customer;
    }
}

function isUnknown(arg) {
    return arg.isUnknown;
}

// Step 4 각각의 표준 응답을 적절한 리터럴 값을 ㅗ대체한다
function createUnknownCustomer() {
    return {
        isUnknown: true,
        name: '거주자',
    };
}

// 클라이언트 1
const customerName = aCustomer.name;

// 요금제
function createUnknownCustomer() {
    return {
        isUnknown: true,
        name: '거주자',
        billingPlan: registry.billingPlans.basic,
    };
}

// 클라이언트 2
const plan = aCustomer.billingPlan;

// 납부 이력이 없다는 정보는 중첩 리터럴로 생성
function createUnknownCustomer() {
    return {
        isUnknown: true,
        name: '거주자',
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        },
    };
}

// 클라이언트 3
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

