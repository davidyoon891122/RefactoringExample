// 변환 함수 이용하기
// 변환 단계를 추가하면 같은 아이디어를 레코드에도 적용할 수 있다
{
    name: '애크미 보스턴',
    location: 'Malden MA',
    customer: {
        name: '에크미 산업',
        billingPlan: 'plan-451',
        paymentHistory: {
            weeksDelinquentInLastYear: 7
        },

    }
}

// 고객이 알려지지 않은 경우
{
    name: '물류창고 15',
    location: 'malden MA',
    customer: '미확인 고객',
}

// 미확인 고객인지 검사하는 클라이언트
// 클라이언트 1
const site = acquireSiteData();
const aCustomer =site.customer;

let customerName;
if (aCustomer === '미확인 고객') customerName = '거주자';
else customerName = aCustomer.name;

// 클라이언트 2
const plan = (aCustomer === '미확인 고객') ?
    registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = (aCustomer === '미확인 고객') ?
    0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;

// Step 1 현장 데이터 구조를 변환 함수인 enrichSite()에 통과시키는 것이다.
// 이 함수는 특별한 작업 없이 깊은 복사 deep copy만 수행한다
// 본질은 같고 정보만 덧붙이는 함수의 이름에는 enrich, 형태가 변할 때는 transform을 사용한다 (저자)

// 클라이언트 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;

let customerName;
if (aCustomer === '미확인 고객') customerName = '거주자';
else customerName = aCustomer.name;

function enrichSite(inputSite) {
    return _.cloneDeep(inputSite);
}

// Step 2 알려지지 않은 고객인지 검사하는 로직을 함수로 추출
function isUnknown(aCustomer) {
    return aCustomer === '미확인 고객';
}

// 클라이언트 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;

let customerName;
if (isUnknown(aCustomer)) customerName = '거주자';
else customerName = aCustomer.name;

// 클라이언트 2
const plan = (isUnknown(aCustomer)) ?
    registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = (isUnknown(aCustomer)) ?
    0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;

// Step 3 고객 레코드에 isUnknown() 속성을 추가하여 현장 정보를 보강한다.
function enrichSite(aSite) {
    const result = _.cloneDeep(aSite);
    const UnknownCustomer = {
        isUnknown: true,
    };

    if (isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false;
    return result;
}

// Step 4 특이케이스 검사 시 새로운 속성을 이용하도록 수정
// 원래의 검사도 유지하여 원래의 rawSite든 보강 site든 상관없이 테스트가 동작하도록 해준다.

function isUnknown(aCustomer) {
    if (aCustomer === '미확인 고객') return true;
    else return aCustomer.isUnknown;
}

// Step 5 특이 케이스에 여러 함수를 변환 함수로 묶기를 적용, 이름 선택 부분을 enrichSite() 함수로 옮긴다
function enrichSite(aSite) {
    const result = this._cloneDeep(aStie);
    const unknownCustomer = {
        isUnknown: true,
        name: '거주자',
    };

    if (isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false;
    return result;
}

// 클라이언트 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;

const customerName = aCustomer.name;

// 요금제에 적용
function enrichSite(aSite) {
    const result = _.cloneDeep(aSite);
    const unknownCustomer = {
        isUnknown: true,
        name: '거주자',
        billingPlan: registry.billingPlans.basic,
    };

    if (isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false;
    return result;
}

// 클라이언트 2
const plan = aCustomer.billingPlan;

// 클라이언트 3

function enrichSite(aSite) {
    const result = _.cloneDeep(aSite);
    const unknownCustomer = {
        isUnknown: true,
        name: '거주자',
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        }
    };

    if (isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false;
    return result;
}

const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
