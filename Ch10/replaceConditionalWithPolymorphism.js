// ASIS
switch (bird.type) {
    case '유럽 제비':
        return '보통이다'
    case '아프리카 제비':
        return (bird.numberOfCoconuts > 2) ? "지쳤다" : "보통이다"
    case '노르웨이 파랑 앵무':
        return (bird.voltage > 100) ? "그을렸다" : "예쁘다"
    default:
        return "알 수 없다"
}

// TOBE
class EuropeanSwallow {
    get plumage() {
        return "보통이다"
    }
}

class AfricanSwallow {
    get plumage() {
        return (bird.numberOfCoconuts > 2) ? "지쳤다" : "보통이다"
    }
}

class NorwegianBlueParrot {
    get plumage() {
        return (bird.voltage > 100) ? "그을렸다" : "예쁘다"
    }
}

// 예시
// ASIS
function plumages(birds) {
    return new Map(birds.map(b => [b.name, plumage(b)]));
} 

function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
} 

function plumage(bird) { // 깃털 상태
    switch(bird.type) {
        case '유럽 제비':
            return '보통이다'
        case '아프리카 제비':
            return (bird.numberOfCoconuts > 2) ? "지쳤다" : "보통이다"
        case '노르웨이 파랑 앵무':
            return (bird.voltage > 100) ? "그을렸다" : "예쁘다"
        default:
            return "알 수 없다"
    }
}

function airSpeedVelocity(bird) { // 비행 속도
    switch(bird.type) {
        case '유럽 제비':
            return 35
        case '아프리카 제비':
            return 40 - 2 * bird.numberOfCoconuts
        case '노르웨이 파랑 앵무':
            return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
        default:
            return null;
    }
}

// TOBE
// Step 1 airSpeedVelocity 와 plumage를 Bird라는 클래스로 묶기
function plumage(bird) {
    return new Bird(bird).plumage
}

function airSpeedVelocity(bird) {
    return new Bird(bird).airSpeedVelocity;
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage() { // 깃털 상태
        switch(this.type) {
            case '유럽 제비':
                return '보통이다'
            case '아프리카 제비':
                return (bird.numberOfCoconuts > 2) ? "지쳤다" : "보통이다"
            case '노르웨이 파랑 앵무':
                return (bird.voltage > 100) ? "그을렸다" : "예쁘다"
            default:
                return "알 수 없다"
    }
}

    get airSpeedVelocity() { // 비행 속도
        switch(this.type) {
            case '유럽 제비':
                return 35
            case '아프리카 제비':
                return 40 - 2 * bird.numberOfCoconuts
            case '노르웨이 파랑 앵무':
                return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
            default:
                return null;
    }
}

// Step 2 종별 서브 클래스 생성

function plumage(bird) {
    return createBird(bird).plumage
}

function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity
}

function createBird(bird) {
    switch (bird.type) {
        case '유럽 제비':
            return new EuropeanSwallow(bird);
        case '아프리카 제비':
            return new AfricanSwallow(bird);
        case '노르웨이 파랑 앵무':
            return new NorwegianBlueParrot(bird);
        default:
            return new Bird(bird);
    }
}

class EuropeanSwallow extends Bird {

}

class AfricanSwallow extends Bird {

}

class NorwegianBlueParrot extends Bird {

}

// Step 3 switch 문의 절 하나를 선택해 해당 서브클래스에서 오버라이드
class EuropeanSwallow extends Bird {
    get plumage() {
        return "보통이다"
    }
}

class Bird {
    get plumage() {
        switch(this.type) {
            case '유럽 제비':
                throw "오류 발생";
            case '아프리카 제비':
                return (this.numberOfCoconuts > 2) ? "지쳤다" : "보통이다"
            case '노르웨이 파랑 앵무':
                return (this.voltage > 100) ? "그을렸다" : "예쁘다";
            default:
                return "알 수 없다";
        }
    }
}

// Step 4 조건절 처리
class AfricanSwallow extends Bird {
    get plumage() {
        return (this.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";
    }
}

class NorwegianBlueParrot extends Bird {
    get plumage() {
        return (this.voltage > 100) ? "그을렸다": " 예쁘다";
    }
}

// Step 5 슈퍼클래스의 메서드는 기본 동작만 남긴다
class Bird{
    get plumage() {
        return "알 수 없다";
    }
}

// Step 6 똑같은 과정을 airSpeedVelocity()에도 수행한다.
function plumages(birds) {
    return new Map(birds
        .map(b => createBird(b))
        .map(bird => [bird.name, bird.plumage]));
}

function speeds(birds) {
    return new Map(birds
        .map(b => createBird(b))
        .map(bird => [bird.name, bird.airSpeedVelocity]));
}

function createBird(bird) {
    switch (bird.type) {
        case '유럽 제비':
                return new EuropeanSwallow(bird);
        case '아프리카 제비':
            return new AfricanSwallow(bird);
        case '노르웨이 파랑 앵무':
            return new NorwegianBlueParrot(bird);
        default:
            return Bird(bird);
    }
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }
    
    get plumage() {
        return "알 수 없다"
    }

    get airSpeedVelocity() {
        return null
    }
}

class EuropeanSwallow extends Bird {
    get plumage() {
        return "보통이다"
    }

    get airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallow extends Bird {
    get plumage() {
        return (this.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";
    }
    get airSpeedVelocity() {
        return 40 - 2 * this.numberOfCoconuts;
    }
}

class NorwegianBlueParrot extends Bird {
    get plumage() {
        return (this.voltage > 100) ? "그을렸다" : "예쁘다";
    }
    get airSpeedVelocity() {
        return (this.isNailed) ? 0 : 10 + this.voltage / 10;
    }
}

// Bird는 없어도 되면 없어도 된다 자바스크립트에서는 타입 계층 구조 없이도 다형성을 표현할 수 있다.
// 객체가 적절한 이름의 메서드만 구현하고 있다면 아무 문제없이 같은 타입으로 취급하기 때문 (이를 덕 타이핑duck typing) 

// 예시 2 
// 변형 동작을 다형성으로 표현하기
// 신용 평가 기관에서 선박의 항해 투자 등급을 계산하는 코드
// 평가기관은 위험요소와 잠재 수익에 영향을 주는 다양한 요인을 기초로 향해 등급을 A와 B로 나눈다
// 위험요소로는 항해 경로의 자연조건과 선장의 항해 이력을 고려한다
// ASIS
function rating(voyage, history) // 투자 등급
{
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRist(voyage, history);
    if (vpf * 3 > (vr + chr * 2)) return "A";
    else return "B";
}

function voyageRisk(voyage) { // 향해 경로 위험요소
    let result = 1;
    if (voyage.length > 4) result += 2;
    if (voyage.length > 8) result += voyage.length - 8;
    if(["중국", "동인도"].includes(voyage.zone)) result += 4;
    return Math.max(result, 0);
}

function captainHistoryRist(voyage, history) { // 선장의 향해 이력 위험요소
    let result = 1;
    if (history.length < 5) result += 4;
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone == "중국" && hasChina(history)) result -= 2;
    return Math.max(result, 0);
}

function hasChina(history) { // 중국을 경유하는가?
    return history.some(v => "중국" === v.zone);
}

function voyageProfitFactor(voyage, history) { //수익 요인
    let result = 2;
    if (voyage.zone === "중국") result += 1;
    if (voyage.zone === "동인도") result += 1;
    if (voyage.zone === "중국" && hasChina(history)) {
        result += 3;
        if (history.length > 10) result += 1;
        if (voyage.length > 12) result += 1;
        if (voyage.length > 18) result -= 1;
    }
    else {
        if (history.length > 8) result += 1;
        if (voyage.length > 14) result -= 1;
    }
    return result;
}
// voyageRisk() 와 captainHistoryRisk() 함수의 점수는 위험요소에, voyageProfitFactor() 점수는 잠재 수익에 반영된다.
// rating() 함수는 두 값을 종합하여 요청한 항해의 최종 등급을 계산한다.
// 호출하는 코드
const voyage = {zone: "서인도", length: 10};
const history = [
    {zone: "동인도", profit: 5},
    {zone: "서인도", profit: 15},
    {zone: "중국", profit: -2},
    {zone: "서아프리카", profit: 7},
];

const myRating = rating(voyage, history);

// Step 1 여러 함수를 클래스로 묶기
function rating(voyage, history) {
    return new rating(voyage, history).value;
}

class Rating {
    constructor(voyage, history) {
        this.voyage = voyage;
        this.history = history;
    }

    get value() {
        const vpf = this.voyageProfitFactor;
        const vr = this.voyageRisk;
        const chr = this.captainHistoryRist;
        if (vpf * 3 > (vr + chr * 2)) return "A";
        else return "B";
    }

    get voyageRisk() {
        let result = 1;
        if (this.voyage.length > 4) result += 2;
        if (this.voyage.length > 8) result += this.voyage.length - 8;
        if(["중국", "동인도"].includes(this.voyage.zone)) result += 4;
        return Math.max(result, 0);
    }

    get captainHistoryRist() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        if (this.voyage.zone == "중국" && this.hasChina(history)) result -= 2;
        return Math.max(result, 0);
    }

    get voyageProfitFactor() {
        let result = 2;
        if (this.voyage.zone === "중국") result += 1;
        if (this.voyage.zone === "동인도") result += 1;
        if (this.voyage.zone === "중국" && this.hasChina(history)) {
            result += 3;
            if (this.history.length > 10) result += 1;
            if (this.voyage.length > 12) result += 1;
            if (this.voyage.length > 18) result -= 1;
        }
        else {
            if (this.history.length > 8) result += 1;
            if (this.voyage.length > 14) result -= 1;
        }
        return result;
    }

    get hasChinaHistory() {
        return this.history.some(v => "중국" === v.zone);
    }
}

// Step 2  변형 동작을 담을 빈 서브 클래스 만들기
class ExperienceChinaRating extends Rating {

}
// 변형 클래스 반환하는 팩터리 함수 만들기
function createRating(voyage, history) {
    if (voyage.zone === "중국" && history.some(v => "중국" === v.zone))
        return new ExperienceChinaRating(voyage, history);
    else return new Rating(voyage, history);
}

// Step 3 생성자를 호출하는 코드를 팩터리 함수로 수정
function rating(voyage, history) {
    return createRating(voyage, history).value
}

// Step 4 서브 클래스로 captainHistoryRisk() 옮기기
class Rating {
    get captainHistoryRist() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        if (this.voyage.zone == "중국" && this.hasChinaHistory(history)) result -= 2;
        return Math.max(result, 0);
    }
}

// Step 5 서브 클래스에서 메서드 오버라이딩
class ExperienceChinaRating extends Rating { //서브 클래스에서 오버라이딩을 처리
    get captainHistoryRist() {
        const result = super.captainHistoryRist - 2;
        return Math.max(result, 0);
    }
}

class Rating {
    get captainHistoryRist() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        //제거
        return Math.max(result, 0);
    }
}

// Step 6 voyageProfitFactor() 옮기기
// 조건부 블록 전체를 함수로 추출
class Rating {
    get captainHistoryRist() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        //제거
        return Math.max(result, 0);
    }

    get voyageProfitFactor() {
        let result = 2;
        if (this.voyage.zone === "중국") result += 1;
        if (this.voyage.zone === "동인도") result += 1;
        result += this.voyageAndHistoryLengthFactor; // 조건부 자체를 함수로 추출
        return result;
    }

    get voyageAndHistoryLengthFactor() { // 추출한 함수
        let result = 0;

        if (this.voyage.zone === "중국" && this.hasChinaHistory(history)) {
            result += 3;
            if (this.history.length > 10) result += 1;
            if (this.voyage.length > 12) result += 1;
            if (this.voyage.length > 18) result -= 1;
        }
        else {
            if (this.history.length > 8) result += 1;
            if (this.voyage.length > 14) result -= 1;
        }
        return result;
    }
}
// Step 7 전체 클래스 
class Rating {
    get captainHistoryRist() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        //제거
        return Math.max(result, 0);
    }

    get voyageProfitFactor() {
        let result = 2;
        if (this.voyage.zone === "중국") result += 1;
        if (this.voyage.zone === "동인도") result += 1;
        result += this.voyageAndHistoryLengthFactor; // 조건부 자체를 함수로 추출
        return result;
    }

    get voyageAndHistoryLengthFactor() { 
        let result = 0;
        if (this.history.length > 8) result += 1;
        if (this.voyage.length > 14) result -= 1;
        return result;
    }
}

class ExperienceChinaRating extends Rating {
    get voyageAndHistoryLengthFactor() { // 서브 클래스에 로직 분리
        let result = 0;
        result += 3;
        if (this.history.length > 10) result += 1;
        if (this.voyage.length > 12) result += 1;
        if (this.voyage.length > 18) result -= 1;
        return result;
    }

    get captainHistoryRist() {
        const result = super.captainHistoryRist - 2;
        return Math.max(result, 0);
    }
}

// 더 가다듬기
// 변형 동작은 슈퍼클래스와의 차이를 표현해야 하는 서브클래스에서만 신경 쓰면 된다.
// And 라는 이름의 두 가지 일을 하는 함수에서 이력 길이를 수정하는 부분을 함수로 추출
// Step 1
class Rating {
    get captainHistoryRist() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        //제거
        return Math.max(result, 0);
    }

    get voyageProfitFactor() {
        let result = 2;
        if (this.voyage.zone === "중국") result += 1;
        if (this.voyage.zone === "동인도") result += 1;
        result += this.voyageAndHistoryLengthFactor; 
        return result;
    }

    get voyageAndHistoryLengthFactor() {
        let result = 0;
        result += this.historyLengthFactor; // 길이 수정하는 부분 함수로 추출
        if (this.voyage.length > 14) result -= 1;
        return result;
    }

    get historyLengthFactor() { // 함수로 추출
        return (this.history.length > 0) ? 1 : 0;
    }
}

class ExperienceChinaRating extends Rating {
    get voyageAndHistoryLengthFactor() {
        let result = 0;
        result += 3;
        result += this.historyLengthFactor; // 서브 함수에서도 동일하게 리팩터링 함수로 추출
        if (this.voyage.length > 12) result += 1;
        if (this.voyage.length > 18) result -= 1;
        return result;
    }

    get historyLengthFactor() { // 서브 클래스에서도 빼내줌
        return (this.history.length > 10) ? 1 : 0;
    }

    get captainHistoryRist() {
        const result = super.captainHistoryRist - 2;
        return Math.max(result, 0);
    }
}
// Step 2 슈퍼 클래스에서 문장을 호출한 곳으로 옮기기 적용
class Rating {
    get captainHistoryRist() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        //제거
        return Math.max(result, 0);
    }

    get voyageProfitFactor() {
        let result = 2;
        if (this.voyage.zone === "중국") result += 1;
        if (this.voyage.zone === "동인도") result += 1;
        result += this.historyLengthFactor; // voyageAndHistoryLengthFactor에서 옮겨짐 
        result += this.voyageAndHistoryLengthFactor; 
        return result;
    } 

    get voyageAndHistoryLengthFactor() {
        let result = 0;
        // 제거 
        if (this.voyage.length > 14) result -= 1;
        return result;
    }

    get historyLengthFactor() { // 함수로 추출
        return (this.history.length > 0) ? 1 : 0;
    }
}

class ExperienceChinaRating extends Rating {
    get voyageAndHistoryLengthFactor() {
        let result = 0;
        result += 3;
        // 제거 
        if (this.voyage.length > 12) result += 1;
        if (this.voyage.length > 18) result -= 1;
        return result;
    }

    get historyLengthFactor() { // 서브 클래스에서도 빼내줌
        return (this.history.length > 10) ? 1 : 0;
    }

    get captainHistoryRist() {
        const result = super.captainHistoryRist - 2;
        return Math.max(result, 0);
    }
}
// Step 3 함수 이름 변경
class Rating {
    get captainHistoryRist() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        //제거
        return Math.max(result, 0);
    }

    get voyageProfitFactor() {
        let result = 2;
        if (this.voyage.zone === "중국") result += 1;
        if (this.voyage.zone === "동인도") result += 1;
        result += this.historyLengthFactor; 
        result += this.voyageLengthFactor; // 함수 이름 변경
        return result;
    } 

    get voyageLengthFactor() { // 함수 이름 변경
        return (this.voyage.length > 14) ? -1 : 0; // 삼항 연산자로 간소화
    }

    get historyLengthFactor() {
        return (this.history.length > 0) ? 1 : 0;
    }
}

class ExperienceChinaRating extends Rating {
    get voyageLengthFactor() {
        let result = 0;
        result += 3;
        if (this.voyage.length > 12) result += 1;
        if (this.voyage.length > 18) result -= 1;
        return result;
    }

    get historyLengthFactor() { 
        return (this.history.length > 10) ? 1 : 0;
    }

    get captainHistoryRist() {
        const result = super.captainHistoryRist - 2;
        return Math.max(result, 0);
    }
}
// Step 4 항해 거리 요인 계산할 때 3점을 더하는 로직 전체 결과를 계산하는 쪽으로 이동
class Rating {
    get captainHistoryRist() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        //제거
        return Math.max(result, 0);
    }

    get voyageProfitFactor() {
        let result = 2;
        if (this.voyage.zone === "중국") result += 1;
        if (this.voyage.zone === "동인도") result += 1;
        result += this.historyLengthFactor; 
        result += this.voyageLengthFactor; // 함수 이름 변경
        return result;
    } 

    get voyageLengthFactor() { // 함수 이름 변경
        return (this.voyage.length > 14) ? -1 : 0; // 삼항 연산자로 간소화
    }

    get historyLengthFactor() {
        return (this.history.length > 0) ? 1 : 0;
    }
}

class ExperienceChinaRating extends Rating {
    get voyageProfitFactor() {
        return super.voyageProfitFactor + 3; // 이동
    }
    get voyageLengthFactor() {
        let result = 0;
        // 제거
        if (this.voyage.length > 12) result += 1;
        if (this.voyage.length > 18) result -= 1;
        return result;
    }

    get historyLengthFactor() { 
        return (this.history.length > 10) ? 1 : 0;
    }

    get captainHistoryRist() {
        const result = super.captainHistoryRist - 2;
        return Math.max(result, 0);
    }
}

// TOBE
class Rating {
    constructor(voyage, history) {
        this.voyage = voyage;
        this.history = history;
    }

    get value() {
        const vpf = this.voyageProfitFactor;
        const vr = this.voyageRisk;
        const chr = this.captainHistoryRist;
        if (vpf * 3 > (vr + chr * 2)) return "A";
        else return "B";
    }

    get voyageRisk() {
        let result = 1;
        if (this.voyage.length > 4) result += 2;
        if (this.voyage.length > 8) result += this.voyage.length - 8;
        if(["중국", "동인도"].includes(this.voyage.zone)) result += 4;
        return Math.max(result, 0);
    }

    get captainHistoryRist() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        return Math.max(result, 0);
    }

    get voyageProfitFactor() {
        let result = 2;
        if (this.voyage.zone === "중국") result += 1;
        if (this.voyage.zone === "동인도") result += 1;
        result += this.historyLengthFactor; 
        result += this.voyageLengthFactor; // 함수 이름 변경
        return result;
    } 

    get voyageLengthFactor() { // 함수 이름 변경
        return (this.voyage.length > 14) ? -1 : 0; // 삼항 연산자로 간소화
    }

    get historyLengthFactor() {
        return (this.history.length > 0) ? 1 : 0;
    }
}
// 중국 항해 경험 클래스는 기본 클래스와의 차이만 담고 있다.
class ExperienceChinaRating extends Rating {
    get voyageProfitFactor() {
        return super.voyageProfitFactor + 3; // 이동
    }
    get voyageLengthFactor() {
        let result = 0;
        // 제거
        if (this.voyage.length > 12) result += 1;
        if (this.voyage.length > 18) result -= 1;
        return result;
    }

    get historyLengthFactor() { 
        return (this.history.length > 10) ? 1 : 0;
    }

    get captainHistoryRist() {
        const result = super.captainHistoryRist - 2;
        return Math.max(result, 0);
    }
}
