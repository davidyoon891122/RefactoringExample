// ASIS
let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);

// TOBE
const perimeter = 2 * (height + width);
console.log(perimeter)
const area = height * width;
console.log(area);

// 예시 1
// 해기스(haggis) 양의 내장으로 만든 스코틀랜드 음식이 다른 지역으로 전파된 거리를 구하는 코드
function distanceTravelled(scenario, time) {
    let result;
    let acc = scenario.primaryForce / scenario.mass // 가속도(a) = 힘(F) / 질량(m)
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * acc * primaryTime * primaryTime; // 전파된 거리
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) { // 두 번쨰 힘을 반영해 다시 계산
        let primaryVelocity = acc * scenario.delay;
        acc = (scenario.primaryForce + scenario.secondaryTime) / scenario.mass;
        result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
    }
    return result;
}
// Step 1 const로 새로운 이름의 변수이름을 선언
function distanceTravelled(scenario, time) {
    let result;
    const primaryAcceleration = scenario.primaryForce / scenario.mass // 가속도(a) = 힘(F) / 질량(m)
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) { // 두 번쨰 힘을 반영해 다시 계산
        let primaryVelocity = primaryAcceleration * scenario.delay;
        acc = (scenario.primaryForce + scenario.secondaryTime) / scenario.mass;
        result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
    }
    return result;
}
// Step 2 두 번째 변수를 const로 선언하고 새로운 이름으로 변수 할당
function distanceTravelled(scenario, time) {
    let result;
    const primaryAcceleration = scenario.primaryForce / scenario.mass // 가속도(a) = 힘(F) / 질량(m)
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) { // 두 번쨰 힘을 반영해 다시 계산
        let primaryVelocity = primaryAcceleration * scenario.delay;
        secondaryAcceleration = (scenario.primaryForce + scenario.secondaryTime) / scenario.mass;
        result += primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
    }
    return result;
}

// 예시 2 입력 매개변수의 값을 수정할 때
// ASIS
// 자바스크립트는 call-by-value라서 호출자에 영향을 주지않는다.
function discount(inputValue, quantity) {
    if (inputValue > 50) inputValue = inputValue - 2;
    if (quantity > 100) inputValue = inputValue -1;
    return inputValue
}
// Step 1 inputValue 쪼개기
function discount(originalInputValue, quantity) {
    let inputValue = originalInputValue;
    if (inputValue > 50) inputValue = inputValue - 2;
    if (quantity > 100) inputValue = inputValue - 1;
    return inputValue;
}

// Step 2 변수 이름 바꾸기
function discount(inputValue, quantity) {
    let result = inputValue;
    if (inputValue > 50) result = result - 2;
    if (quantity > 100) result = result - 1;
    return result;
}



