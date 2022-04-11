// ASIS
function getTotalOutstandingAndSendBill() {
    const result = customer.invoices.reduce((total, each) => each.amount + total, 0);
    sendBill()
    return result;
}
// TOBE
function getTotalOutstandingAndSendBill() {
    return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
    emailGateway.send(formatBill(customer));
}

// 예시
// ASIS
function alertForMiscreant(people) {
    for(const p of people) {
        if(p === '조커') {
            setOffAlarms();
            return '조커'
        }
        if(p === '사루만') {
            setOffAlarms()
            return '사루만'
        }
    }
    return ''
}

// Step 1 함수를 복제하고 질의 목적에 맞는 이름 짓기
function findMiscreant(people) {
    for(const p of people) {
        if(p === '조커') {
            setOffAlarms();
            return '조커'
        }
        if(p === '사루만') {
            setOffAlarms()
            return '사루만'
        }
    }
    return ''
}
// Step 2 새 질의 함수에서 부수효과를 낳는 부분을 제거한다
function findMiscreant(people) {
    for(const p of people) {
        if(p === '조커') {
            return '조커'
        }
        if(p === '사루만') {
            return '사루만'
        }
    }
    return ''
}
// Step 3 원래 함수를 호출하는 곳을 찾아서 질의 함수로 바꾸고 원래의 변경 함수를 호출하는 코드를 바로 아래에 삽입
const found = findMiscreant(people)
alertForMiscreant(people)
// Step 4 원래의 변경 함수에서 질의 관련 코드를 없앤다.
function alertForMiscreant(people) {
    for(const p of people) {
        if(p === '조커') {
            setOffAlarms();
            return
        }
        if(p === '사루만') {
            setOffAlarms()
            return
        }
    }
    return
}
// 더 가다듬기
// 변경 함수에서 질의 함수를 사용하도록 수정
function alertForMiscreant(people) {
    if (findMiscreant(people) != '') setOffAlarms();
}