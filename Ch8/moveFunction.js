// ASIS
class Account {
    get overdraftCharge() {
        //...
    }
}

// TOBE
class AccounType {
    get overdraftCharge() {
        //...
    }
}

// 예시 중첩 함수를 최상위로 옮기기
// GPS 추적 기록의 총 거리를 계산하는 함수
// 중첩 함수인 calculateDistance()를 최상위로 옮겨서 추적 거리를 다른 정보와는 독립적으로 계산하고 싶다.
// ASIS
function trackSummary(points) {
    const totalTime =calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
        time: totalTime,
        distance: totalDistance,
        pace: pace
    };

    function calculateDistance() { // 총 거리 계산
        let result = 0;
        for (let i = 1; i < points.length; i++) {
            result += distance(points[i-1], points[i]);
        }
        return result;
    }

    function distance(p1, p2) {} // 두 지점의 거리 계산
    function radians(degress) {} // 라디안 값으로 변환
    function calculateTime() {} // 총 시간 계산
}

// Step 1 calculateDistance함수를 최상위로 복사
// 새로운 이름을 지어주면서 소스 함수와 타깃 함수를 구분한다.
function top_calculateDistance() {  //최상위로 복사하면서 새로운 (임시) 이름을 지어준다.
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        result += distance(points[i-1], points[i]);
    }
    return result;
}

function trackSummary(points) {
    const totalTime =calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
        time: totalTime,
        distance: totalDistance,
        pace: pace
    };

    function calculateDistance() { // 총 거리 계산
        let result = 0;
        for (let i = 1; i < points.length; i++) {
            result += distance(points[i-1], points[i]);
        }
        return result;
    }

    function distance(p1, p2) {} // 두 지점의 거리 계산
    function radians(degress) {} // 라디안 값으로 변환
    function calculateTime() {} // 총 시간 계산
}

// Step 2 새 함수에 정의되어 있지 않은 points는 매개변수로 넘겨준다
function top_calculateDistance(points) {  // points를 매개변수로 넘겨줌.
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        result += distance(points[i-1], points[i]);
    }
    return result;
}

function trackSummary(points) {
    const totalTime =calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
        time: totalTime,
        distance: totalDistance,
        pace: pace
    };

    function calculateDistance() { // 총 거리 계산
        let result = 0;
        for (let i = 1; i < points.length; i++) {
            result += distance(points[i-1], points[i]);
        }
        return result;
    }

    function distance(p1, p2) {} // 두 지점의 거리 계산
    function radians(degress) {} // 라디안 값으로 변환
    function calculateTime() {} // 총 시간 계산
}
// Step 3 distance함수 처리
// calculateDistance와 함께 옮기는 방식으로 처리할 예정이다.
// distance 함수 
function distance(p1, p2) {
    const EARTH_RADIUS = 3959;
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p2.lat);
    const a = Math.pow(Math,sin(dLat / 2), 2)
            + Math.cos(radians(p2.lat))
            * Math.cos(radians(p1.lat))
            * Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return EARTH_RADIUS * c;
}

function radians(degrees) {
    return degrees * Math.PI / 180;
}
// distance는 radians 함수만 사용하며 radians는 현재 컨텍스트에 있는 어떤 것도 사용하지 않는다.
// 두 함수를 매개변수로 넘기기보다는 함께 옮기는 것이 낫다.
// Step 4 현재 컨텍스트에서 이 함수들을 calculateDistance 함수 안으로 옮겨보자

function trackSummary(points) {
    const totalTime =calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
        time: totalTime,
        distance: totalDistance,
        pace: pace
    };

    function calculateDistance() { // 총 거리 계산
        let result = 0;
        for (let i = 1; i < points.length; i++) {
            result += distance(points[i-1], points[i]);
        }

        function distance(p1, p2) {} // 함수 옮김
        function radians(degress) {} // 함수 옮김

        return result;
    }

    function calculateTime() {} // 총 시간 계산
}

// Step 5 정적 분석과 테스트를 활용하여 문제 검증 후 이상 없으면 top_calculateDistance() 함수에도 복사
function top_calculateDistance(points) {  // points를 매개변수로 넘겨줌.
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        result += distance(points[i-1], points[i]);
    }

    function distance(p1, p2) {} // 함수 옮김
    function radians(degress) {} // 함수 옮김

    return result;
}

//Step 6 calculateDistance()의 본문의 수정하여 top_calculateDistance()를 호출하게 하자
function top_calculateDistance(points) {  // points를 매개변수로 넘겨줌.
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        result += distance(points[i-1], points[i]);
    }

    function distance(p1, p2) {} // 함수 옮김
    function radians(degress) {} // 함수 옮김

    return result;
}

function trackSummary(points) {
    const totalTime =calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
        time: totalTime,
        distance: totalDistance,
        pace: pace
    };

    function calculateDistance() { // 총 거리 계산
        top_calculateDistance(points) // 새로 만든 함수를 호출하게 변경, 테스트 필수!
    }
    function calculateTime() {} // 총 시간 계산
}

// Step 7 소스 함수를 대리자 역할로 그대로 둘지 정하는데, 이 예에서 소스하함수는 호출자가 많지 않은, 지역화된 함수여서 제거하는 편이 낫다 제거하자!
function top_calculateDistance(points) {  // points를 매개변수로 넘겨줌.
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        result += distance(points[i-1], points[i]);
    }

    function distance(p1, p2) {} // 함수 옮김
    function radians(degress) {} // 함수 옮김

    return result;
}

function trackSummary(points) {
    const totalTime =calculateTime();
    const totalDistance = top_calculateDistance(points);
    const pace = totalTime / 60 / totalDistance;
    return {
        time: totalTime,
        distance: totalDistance,
        pace: pace
    };
    //소스 함수 제거 됨
    function calculateTime() {} // 총 시간 계산
}

// Step 8 새 함수에 이름을 지어줄 시간, 최상단 함수는 가시성이 높으니 적합한 이름을 신중히 지어주어야 한다.
// 함수명을 totalDistance로 변경하고 변수 totalDistance를 제거한 후 인라인 하자!
function totalDistance(points) {  // points를 매개변수로 넘겨줌.
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        result += distance(points[i-1], points[i]);
    }

    function distance(p1, p2) {} // 함수 옮김
    function radians(degress) {} // 함수 옮김

    return result;
}

function trackSummary(points) {
    const totalTime =calculateTime();
    const pace = totalTime / 60 / totalDistance(points); // 변수 제거 후 함수 인라인
    return {
        time: totalTime,
        distance: totalDistance,
        pace: pace
    };
    //소스 함수 제거 됨
    function calculateTime() {} // 총 시간 계산
}

// Step 9 distance와 radians도 totalDistance안에 의존성이 없으니 최상위로 옮겨준다.

function distance(p1, p2) {} // 함수 옮김
function radians(degress) {} // 함수 옮김

function totalDistance(points) {  // points를 매개변수로 넘겨줌.
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        result += distance(points[i-1], points[i]);
    }

    return result;
}

function trackSummary(points) {
    const totalTime =calculateTime();
    const pace = totalTime / 60 / totalDistance(points); // 변수 제거 후 함수 인라인
    return {
        time: totalTime,
        distance: totalDistance,
        pace: pace
    };
    //소스 함수 제거 됨
    function calculateTime() {} // 총 시간 계산
}

// 예시 2 다른 클래스로 옮기기
class Account {
    get bankCharge() { //은행 이자 계산
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.overdraftCharge;
        return result;
    }

    get overdraftCharge() { // 초과 인출 이자 계산
        if (this.type.isPremium) {
            const baseCharge = 10;
            if (this._daysOverdrawn <= 7)
                return baseCharge
            else
                return baseCharge + (this.daysOverdrawn - 7) * 0.85;
        }
        else
            return this.daysOverdrawn * 1.75;
    }
}
// 계좌 종류에 따라 이자 책정 알리고리즘이 달라지도록 고칠것이다.
// 마이너스 통장의 초과 인출 이자를 계산하는 overdraftCharge()를 계좌 클래스인 AccountType으로 옮기는게 자연스럽다
// overdraftCharg() 메소드가 사용하는 기능들을 살펴보고, 모두를 함께 옮길만한 가치가 있는지 고민해보자
// 이 예에서는 daysOverdrawn() 메서드는 Account 클래스에 남겨두어야 한다. (계좌 종류가 아닌) 계좌별로 달라지는 메서드이기 때문
// Step 1 overdraftCharge() 메서드 본문을 AccountType 클래스로 복사한 후 정리
// 새 보금자리에 맞추러면 두 개의 범위를 조정 isPremium은 단순히 this를 통해 호출
// daysOverdrawn은 값을 넘길지, 아니면 계좌채로 넘길지 정해야 한다.
// 우선은 값을 넘기는 방식으로 처리, 하지만 초과 인출된 일수 외에 다른 정보가 필요해지면 추후 계좌채로 넘기도록 변경 가능
class AccountType {
    overdraftCharge(daysOverdrawn) { // 초과 인출 이자 계산 값으로 넘김
        if (this.isPremium) {  // 변경
            const baseCharge = 10;
            if (daysOverdrawn <= 7) // 인수값 받아서 처리
                return baseCharge
            else
                return baseCharge + (daysOverdrawn - 7) * 0.85; // 인수값 받아서 처리
        }
        else
            return daysOverdrawn * 1.75; // 인수값 받아서 처리
    }
}

// Step 2 원래 메서드의 본문을 수정하여 새 메서드를 호출하도록 수정
class Account {
    get bankCharge() { //은행 이자 계산
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.overdraftCharge;
        return result;
    }

    get overdraftCharge() { // 초과 인출 이자 계산
       return this.type.overdraftCharge(this.daysOverdrawn);
    }
}

// Step 3 소스 메소드를 남겨둘지 인라인 할지 결정 -> 인라인으로 선택
class Account {
    get bankCharge() { //은행 이자 계산
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.type.overdraftCharge(this.daysOverdrawn);
        return result;
    }
}

// 만약 계좌에서 가져와야 할 데이터가 많다면 계좌 자체를 넘긴다
class Account {
    get bankCharge() { //은행 이자 계산
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.type.overdraftCharge;
        return result;
    }

    get overdraftCharge() {
        return this.type.overdraftCharge(this);
    }
}

class AccountType {
    overdraftCharge(account) { // 계좌 자체를 넘겨 받음
        if (this.isPremium) {  // 변경
            const baseCharge = 10;
            if (account.daysOverdrawn <= 7) // 계좌에서 인수값 받아서 처리
                return baseCharge
            else
                return baseCharge + (account.daysOverdrawn - 7) * 0.85; //  계좌에서 인수값 받아서 처리
        }
        else
            return account.daysOverdrawn * 1.75; // 계좌에서 인수값 받아서 처리
    }
}