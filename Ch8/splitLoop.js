// ASIS
let averageAge = 0;
let totalSarary = 0;
for (const p of people) {
    averageAge += p.age;
    totalSarary += p.salary;
}

averageAge = averageAge / people.length;

// TOBE
let totalSarary = 0;
for (const p of people) {
    totalSarary += p.salary;
}

let averageAge = 0;
for (const p of people) {
    averageAge += p.age;
}

averageAge = averageAge / people.length;

// 예시
// 전체 급여와 가장 어린 나이를 계산하는 코드
// ASIS
let youngest = people[0] ? people[0].age : Infinity;
let totalSarary = 0;
for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSarary += p.salary;
}

return `최연수 : ${youngest}, 총 급여: ${totalSarary}`;

// TOBE
// Step 1 반복문 복제
let youngest = people[0] ? people[0].age : Infinity;
let totalSarary = 0;
for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSarary += p.salary;
}

for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSarary += p.salary;
}

return `최연수 : ${youngest}, 총 급여: ${totalSarary}`;
// Step 부수효과 제거

let youngest = people[0] ? people[0].age : Infinity;
let totalSarary = 0;
for (const p of people) {
    totalSarary += p.salary;
}

for (const p of people) {
    if (p.age < youngest) youngest = p.age; 
}

return `최연수 : ${youngest}, 총 급여: ${totalSarary}`;

// 더 가다듬기
// Step 1 문장 슬라이드하기

let totalSarary = 0;
for (const p of people) {
    totalSarary += p.salary;
}

let youngest = people[0] ? people[0].age : Infinity; // 이동
for (const p of people) {
    if (p.age < youngest) youngest = p.age; 
}

return `최연수 : ${youngest}, 총 급여: ${totalSarary}`;

// Step 2 각 반복문을 함수로 추출
return `최연수 : ${youngestAge()}, 총 급여: ${totalSarary()}`;

function totalSarary() {
    let totalSarary = 0;
    for (const p of people) {
        totalSarary += p.salary;
    }
    return totalSarary;
}

function yongestAge() {
    let youngest = people[0] ? people[0].age : Infinity; // 이동
    for (const p of people) {
        if (p.age < youngest) youngest = p.age; 
    }
    return youngest;
}

// Step 3 파이프라인 바꾸기와 알고리즘 교체하기 적용
return `최연수 : ${youngestAge()}, 총 급여: ${totalSarary()}`;

function totalSarary() {
    return people.reduce((total, p) => total + p.salary, 0);
}

function yongestAge() {
    return Math.min(...people.map(p => p.age));
}