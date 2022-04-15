// ASIS
function tenPercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.mutiply(1.1);
}

function fivePercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.mutiply(1.05);
}
// TOBE
function raise(aPerson, factor) {
    aPerson.salary = aPerson.salary.mutiply(1 + factor);
}

// 예시
// ASIS
function baseCharge(usage) {
    if (usage < 0) return usd(0)
    const amount = bottomBand(usage) * 0.03
                    + middleBand(usage) * 0.05
                    + topBadn(usage) * 0.07
    return usd(amount)
}

function bottomBand(usage) {
    return Math.min(usage, 100);
}

function middleBand(usage) {
    return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBadn(usage) {
    return usage > 200 ? usage - 200 : 0;
}
// Step 1 함수들 중 하나를 골라 매개변수를 추가한다. 범위를 다루는 로직에서는 대개 중간에 해당하는 함수로 시작하는 것이 좋다.
// middelBand()에 매개변수를 추가
function baseCharge(usage) {
    if (usage < 0) return usd(0)
    const amount = bottomBand(usage) * 0.03
                    + withinBand(usage) * 0.05 // 대체
                    + topBadn(usage) * 0.07
    return usd(amount)
}

function withinBand(usage, bottom, top) {  // 추가
    return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function bottomBand(usage) {
    return Math.min(usage, 100);
}

function middleBand(usage) {
    return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBadn(usage) {
    return usage > 200 ? usage - 200 : 0;
}
// Step 2 매개변수로 값 대체
function withinBand(usage, bottom, top) {  
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

// Step 3 하한 호출부 새로운 함수로 대체
function baseCharge(usage) {
    if (usage < 0) return usd(0)
    const amount = withinBand(usage, 0, 100) * 0.03
                    + withinBand(usage, 100, 200) * 0.05 // 대체
                    + topBadn(usage) * 0.07
    return usd(amount)
}

function withinBand(usage, bottom, top) {  // 추가
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function topBadn(usage) {
    return usage > 200 ? usage - 200 : 0;
}
// Step 4 상한 호출부 새로운 함수로 대체
function baseCharge(usage) {
    if (usage < 0) return usd(0)
    const amount = withinBand(usage, 0, 100) * 0.03
                    + withinBand(usage, 100, 200) * 0.05 // 대체
                    + withinBand(usage, 200, Infinity) * 0.07
    return usd(amount)
}

function withinBand(usage, bottom, top) {  // 추가
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
}