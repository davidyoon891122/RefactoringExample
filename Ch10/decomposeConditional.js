// ASIS
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
// TOBE
if (summer())
    charge = summerCharge();
else 
    charge = regularCharge();

// 예시 여름철이면 할인율이 달라지는 서비스 요금 계산
// ASIS

if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;

// Step 1 조건 부분을 별도 함수로 추출
if (summer())
    charge = quantity * plan.summerRate;
else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;

function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)
}

// Step 2 조건을 만족했을 때의 로직도 함수로 추출
if (summer())
    charge = summerCharge()
else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;

function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)
}

function summerCharge() {
    return quantity * plan.summerRate;
}

// Step 3 마지막 else 절도 함수로 추출
if (summer())
    charge = summerCharge()
else
    charge = regualrCharge()

function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)
}

function summerCharge() {
    return quantity * plan.summerRate;
}

function regualrCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}

// Step 4 취향에 따라 조건문을 3항 연산자로 변경
charge = summer() ? summerCharge() : regualrCharge()

function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)
}

function summerCharge() {
    return quantity * plan.summerRate;
}

function regualrCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}



