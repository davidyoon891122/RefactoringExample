// ASIS
function getPayAmount() {
    let result;
    if (isDead)
        result = deadAmount();
    else {
        if (isSeparated)
            retult = separatedAmount();
        else {
            if (isRetired)
                result = retiredAmount();
            else
                result = normalPayAmount();
        }
    }
    return result
}
// TOBE
function getPayAmount() {
    if (isDead) return deadAmount()
    if (isSeparated) return separatedAmount();
    if (isRetired) return retiredAmount();
    return normalPayAmount();
}


// 예시
// 직원 급열를 계산하는 코드
// ASIS
function payAmount(employee) {
    let result;
    if(employee.isSeparated) { // 퇴사한 직원인가 ?
        result = {amount: 0, reasonCode: "SEP" };
    }
    else {
        if (employee.isRetired) { // 은퇴한 직원인가 ?
            result = {amount: 0, reasonCode: "RET"};
        }
        else {
            //급여 계산 로직
            lorem.ipsum(dolor.sitAmet);
            consectetur(adipiscing).elit();
            sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
            ut.enim.ad(minim.veniam);
            result = someFinalComputation()
        }
    }
    return result;
} 

// Step 1 최상위 조건 부터 보호 구문으로 변경
function payAmount(employee) {
    let result;
    if (employee.isSeparated) return  {amount: 0, reasonCode: "SEP" };
    if (employee.isRetired) {
        return = {amount: 0, reasonCode: "RET"};
    }
    else {
         //급여 계산 로직
         lorem.ipsum(dolor.sitAmet);
         consectetur(adipiscing).elit();
         sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
         ut.enim.ad(minim.veniam);
         result = someFinalComputation()
    }
    return result;
} 

// Step 2  다음 조건으로 넘어간다
function payAmount(employee) {
    let result;
    if (employee.isSeparated) return  {amount: 0, reasonCode: "SEP" };
    if (employee.isRetired) return {amount: 0, reasonCode: "RET"};
    else {
         //급여 계산 로직
         lorem.ipsum(dolor.sitAmet);
         consectetur(adipiscing).elit();
         sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
         ut.enim.ad(minim.veniam);
         result = someFinalComputation()
    }
    return result;
} 
// Step 3 아무일도 하지 않는 result는 제거한다
function payAmount(employee) {
    if (employee.isSeparated) return  {amount: 0, reasonCode: "SEP" };
    if (employee.isRetired) return  {amount: 0, reasonCode: "RET"};
    //급여 계산 로직
    lorem.ipsum(dolor.sitAmet);
    consectetur(adipiscing).elit();
    sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    ut.enim.ad(minim.veniam);
    return someFinalComputation()
    
} 

// 예시 2 조건 반대로 만들기
function adjustedCapital(anInstrument) {
    let result = 0;
    if (anInstrument.capital > 0) {
        if ( anInstrument.interestRate > 0 && anInstrument.duration > 0) {
            result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
        }
    }
    return result;
}

// Step 1 첫 조건 보호구문으로 만든다.
function adjustedCapital(anInstrument) {
    let result = 0;
    if (anInstrument.capital <= 0) return result;
    if ( anInstrument.interestRate > 0 && anInstrument.duration > 0) {
        result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    }
    return result;
}
// Step 2 not 연산자(!) 추가
function adjustedCapital(anInstrument) {
    let result = 0;
    if (anInstrument.capital <= 0) return result;
    if (!(anInstrument.interestRate > 0 && anInstrument.duration > 0)) return result;
    result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    return result;
}

// Step 3 간소화 not 제거
function adjustedCapital(anInstrument) {
    let result = 0;
    if (anInstrument.capital <= 0) return result;
    if (anInstrument.interestRate <= 0 || anInstrument.duration <= 0) return result;
    result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    return result;
}

// Step 4 같은 결과를 내는 조건식 통합
function adjustedCapital(anInstrument) {
    let result = 0;
    if (anInstrument.capital <= 0 || anInstrument.interestRate <= 0 || anInstrument.duration <= 0) return result;
    result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    return result;
}
// Step 5 result 한 가지 일만 하도록 
function adjustedCapital(anInstrument) {
    if (anInstrument.capital <= 0 || anInstrument.interestRate <= 0 || anInstrument.duration <= 0) return 0;
    return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}