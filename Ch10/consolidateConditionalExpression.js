// ASIS
if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;

// TOBE
if (isNotEligibleForDisability()) return 0;

function isNotEligibleForDisability() {
    return ((anEmployee.seniority < 2) || (anEmployee.monthsDisabled > 12) || (anEmployee.isPartTime));
}

// 예시
// or 사용하기
// ASIS
function disabilityAmount(anEmployee) {
    if (anEmployee.seniority < 2) return 0;
    if (anEmployee.monthsDisabled > 12) return 0;
    if (anEmployee.isPartTime) return 0;
    // 장애 수당 계산
}

// Step 1 결과로 행하는 동작이 같으므로 이 조건들을 하나의 식으로 통합
function disabilityAmount(anEmployee) {
    if((anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)) return 0;
    if (anEmployee.isPartTime) return 0;
    // 장애 수당 계산
}

// Step 2 테스트한 후 다음 조건에도 적용
function disabilityAmount(anEmployee) {
    if((anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime)) return 0;
    // 장애 수당 계산
}

// Step 3 모든 조건을 통합했다면 최종 조건식을 함수로 추출
function disabilityAmount(anEmployee) {
    if (isNotEligibleForDisability) return 0;
    //장애 수당 계산

    function isNotEligibleForDisability() { //장애 수당 적용 여부 확인
        return ((anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime));
    }
}

// 예시 2
// and 사용하기
// ASIS
if (anEmployee.onVacation)
    if (anEmployee.seniority > 10)
        return 1;
return 0.5;

// Step 1
if ((anEmployee.onVacation) && (anEmployee.seniority > 10)) return 1;
    return 0.5