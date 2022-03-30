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