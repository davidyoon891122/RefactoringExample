// ASIS
function base(aReading) {}
function taxableCharge(aReading) {}
// TOBE
function enrichReading(argReading) {
    const aReading = _.cloneDeep(argReading)
    aReading.baseCharge = base(aReading);
    aReading.taxableCharge = taxableCharge(aReading);
    return aReading;
}

// 예시
reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

// 클라이언트 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// 클라이언트 2
const aReading = acquireReading();
const base = (baseRage(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 클라이언트 3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// Step 1 입력 객체를 그대로 복사해 반환하는 변환 함수 만듬
function enrichReading(original) {
    const result = _.cloneDeep(original);
    return result
}
// Step 2 계산 로직에 측정값을 전달하기 전에 부가 정보를 덧붙이도록 수정한다
// 클라이언트 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    return result;   
}
// Step3 함수를 사용하던 클라이언트가 부가 정보를 담은 필드를 사용하도록 수정
// 클라이언트 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge

// enrichReading() 처럼 정보를 추가해 반환할 때 원본 측정값 레코드는 변경하지 않아야 한다. 이를 위한 테스트 코드를 작성한다.
// Step 4
it('check reading unchanged', function () {
    const baseReading = {customer: "ivan", quantity: 15, month: 5, year: 2017};
    const oracle = _.cloneDeep(baseReading);
    enrichReading(baseReading);
    assert.deepEqual(baseReading, oracle);
});
// 클라이언트 1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

// Step 5 세금 계산 
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));

function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
    return result;   
}
// Step 6 계산 코드를 변환 함수로 옮겨서 새로 만든 필드를 사용하여 원본 코드 수정
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;