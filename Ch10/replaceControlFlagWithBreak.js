// ASIS
for (const p of people) {
    if(!found) {
        sendAlert();
        found = true;
    }
}
// TOBE
for (const p of people) {
    if(p === '조커'){
        sendAlert();
        break;
    }
}

// 예시
// ASIS
// 여기서 제어 플래그는 found이며, 제어 흐름을 변경하는 데 쓰인다.
let found = false;
for (const p of people) {
    if(!found) {
        if(p === '조커') {
            sendAlert();
            found = true;
        }
        if(p === '사루만'){
            sendAlert();
            found = true;
        }
    }
}

// Step 1 함수 추출하기를 활용해서 서루 밀접한 코드만 담은 함수를 뽑아내자
checkForMiscreants(people);

function checkForMiscreants(people) {
    let found = false;
    for (const p of people) {
        if(!found) {
            if(p === '조커') {
                sendAlert();
                found = true;
            }
            if(p === '사루만'){
                sendAlert();
                found = true;
            }
        }
    }
}
// Step 2플래그가 참이면 break나 return을 써서 함수에서 빠져나오면 된다. return을 사용해 보자
function checkForMiscreants(people) {
    let found = false;
    for (const p of people) {
        if(!found) {
            if(p === '조커') {
                sendAlert();
                return;
            }
            if(p === '사루만'){
                sendAlert();
                return;
            }
        }
    }
}
// Step 3 갱신 코드를 모두 제거했다면 제어 플래그를 참조하는 다른 코드도 모두 제거한다
function checkForMiscreants(people) {
    for (const p of people) {
        if(p === '조커') {
            sendAlert();
            return;
        }
        if(p === '사루만'){
            sendAlert();
            return;
        }
    }
    
}

// 더 가다듬기
// Step 1
function checkForMiscreants(people) {
    if(people.some(p => ["조커", "사루만"].includes(p))) sendAlert();
}

// Step 2
function checkForMiscreants(people) {
   ['조커', '사루만'].isDisjointWith(people)
}