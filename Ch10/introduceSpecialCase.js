// ASIS
if (aCustomer === "미확인 고객") customerName = '거주자';
// TOBE
class UnknownCustomer {
    get name() { return '거주자'; }
}

// 예시
// 전력 회사는 전력이 필요한 현장에 인프라를 설치해 서비스를 제공한다.
class Site {
    get customer() { return this._customer; }
}

class Customer {
    get name() { return this._name; } // 고객 이름
    get bilingPlan() { return this._billingPlan; } // 요금제
    set bilingPlan(arg) { this._billingPlan = arg } 
    get paymentHistory() { return this._paymentHistory; } // 납부 이력
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
if (aCustomer !== '미확인 고객') aCustomer.bilingPlan = newPlan;

// 클라이언트 4
const weeksDelinquent = (aCustomer === '미확인 고객') ?
0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;

// 미확인 고객을 처리하는 클라이언트가 여러개 발견, 그 대부분을 동일한 방식으로 처리
// 고객 이름으로는 거주자를 사용했고, 기본 요금제(billingPlan)을 청구했고, 연체(delinquent) 기간은 0주(week)로 분류
// Step 1 미확인 고객인지를 나타내는 메서드를 고객 클래스에 추가
class Customer {
    get name() { return this._name; } 
    get bilingPlan() { return this._billingPlan; } 
    set bilingPlan(arg) { this._billingPlan = arg } 
    get paymentHistory() { return this._paymentHistory; }

    get isUnknown() { return false; }
}
// Step 2 미확인 고객 전용 클래스 생성
// 자바스크립트의 서브클래스 규칙과 동적 타이핑 능력 때문에 서브 클래스로 만들지 않았음
class UnknownCustomer {
    get isUnknown() { return true; }
}
// Step 3 미확인 고객을 기대하는 곳 모두에 특이 케이스 객체(UnknownCustomer)를 반환하도록하고 값이 미확인 고객인지를 검사하는 곳 모두에서 isUnknown() 메서드 호출
// Customer 클래스를 수정하여 미확인 고객 문자열 대신 UnknownCustomer 객체를 반환하게 한다면, 클라이언트를 각각에서 미확인 고객인지를 확인하는 코드 모두를 isUnknown() 호출로 바꾸는 작업을 한 번에 해야만 한다.
// 여러 곳에서 똑같이 수정해야만 하는 코드를 별로 함수로 추출하여 한데로 모으자
function isUnknown(arg) {
    if (!((arg instanceof Customer) || (arg === '미확인 고객'))) 
        throw new Error(`잘못된 값과 비교: <${arg}>`);
    return (arg === '미확인 고객');
}

// Step 4 isUnknown 함수 적용
// 클라이언트 1

let customerName;
if (isUnknown(aCustomer)) customerName = '거주자'; // 적용
else customerName = aCustomer.name;

// 클라이언트 2
const plan = (isUnknown(aCustomer)) ?  // 적용
registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
if (!(isUnknown(aCustomer))) aCustomer.bilingPlan = newPlan; // 적용

// 클라이언트 4
const weeksDelinquent = (isUnknown(aCustomer)) ?    // 적용
0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;

// Step 5 특이 케이스 일 때 Site 클래스가 UnknownCustomer 객체를 반환하도록 수정
class Site {
    get customer() {
        return (this._customer === '미확인 고객') ? new UnknownCustomer() : this._customer;
    }
}

// Step 6 isUnknown() 함ㅅ를 수정하여 고객 객체의 속성을 사용하도록 수정
function isUnknown(arg) {
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
        throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg.isUnknown;
}
// Step 7 동일하게 사용하는 거주자를 클래스로 묶기에 적용
class UnknownCustomer {
    get isUnknown() { return true; }

    get name() { return '거주자' };
}

//클라이언트 1
let customerName = aCustomer.name; // 조건절 지워 버리고 함수로 대체


// Step 8 요금제 속성도 클래스 메서드로 전환
class UnknownCustomer {
    get isUnknown() { return true; }

    get name() { return '거주자' };
    get billingPlan() { return registry.billingPlan.basic; }
    set bilingPlan(arg) { /* 무시한다 */ }
}
// ASIS
// 클라이언트 2
const plan = (isUnknown(aCustomer)) ?  // 적용
registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
if (!(isUnknown(aCustomer))) aCustomer.bilingPlan = newPlan; // 적용

// TOBE
// 클라이언트(읽는 경우)
const plan = aCustomer.bilingPlan;

// 클라이언트(쓰는 경우)
aCustomer.bilingPlan = newPlan

// Step 9
// 특이 케이스 값 객체는 항상 불변이어야 한다.
// 특이 케이스가 다른 객체를 반환해야 한다면 그 객체 역시 특이 케이스여야 하는 것이 일반적이다. NullPaymentHistory를 만든다

class UnknownCustomer {
    get paymentHistory() { return new NullPaymentHistory(); }
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() { return 0; }
}

// 클라이언트 4
// ASIS
const weeksDelinquent = (isUnknown(aCustomer)) ?    // 적용
0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;

//TOBE
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

// Step 10 튀는 클라이언트 확인
// 원래의 특이 케이스 검사 코드 유지를 해야한다. Customer에 선언된 메서드를 사용하도록 수정
// ASIS
const name = !isUnknown(aCustomer) ? aCustomer.name : '미확인 거주자';
// TOBE
const name = aCustomer.isUnknown ? '미확인 거주자' : aCustomer.name;



