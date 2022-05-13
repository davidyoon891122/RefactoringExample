// ASIS
class Order {
    get daysToShip() {
        return this._warehouse.daysToShip;
    }
}

class PriorityOrder extends Order {
    get daysToShip() {
        return this._priorityPlan.daysToShip;
    }
}

// TOBE

class Order {
    get daysToShip() {
        return (this._priorityDelegate) 
        ? this._priorityDelegate.daysToShip
        : this._warehouse.daysToShip
    }
}

class PriorityOrderDelegate {
    get daysToShip() {
        return this._priorityPlan.daysToShip
    }
}

// 예시 1 공연 예약 클래스
// ASIS
class Booking {
    constructor(show, date) {
        this._show = show
        this._date = date 
    }
    get hasTalkback() {
        return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }
    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
}
// 추가 비용을 다양하게 설정할 수 있는 프리미엄 예약용 서브클래스
class PremiumBooking extends Booking {
    constructor(show, date, extras) {
        super(show, date)
        this._extras = extras
    }
    get hasTalkback() { // 오버라이드
        return this._show.hasOwnProperty('talkback')
    }
    get basePrice() { // 오버라이드
        return Math.round(super.basePrice + this._extras.premiumFee)
    }
    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && !this.isPeakDay
    }
}

// 클라이언트(일반 예약)
aBooking = new Booking(show, date)

// 클라이언트(프리미엄 예약)
aBooking = new PremiumBooking(show, date, extras);

// TOBE
// Step 1 먼저 생성자를 팩터리 함수로 바꿔서 생성자 호출 부분을 캠슐화하자

function createBooking(show, date) {
    return new Booking(show, date)
}

function createPremiumBooking(show, date, extras) {
    return new PremiumBooking(show, date, extras)
}

// 클라이언트(일반 예약)
aBooking = createBooking(show, date)
// 클라이언트(프리미엄 예약)
aBooking = createPremiumBooking(show, date, extras)

// Step 2 위임 클래스를 만든다. 위임 클래스의 생성자는 서브클래스가 사용하던 매개변수와 예약 객체로의 역참조(back-reference)를 매개변수로 받는다.
// 역참조가 필요한 이유는 서브클래스 메서드 중 슈퍼클래스에 저장된 데이터를 사용하는 경우가 있기 때문이다.
class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
        this._host = hostBooking
        this._extras = extras
    }
}

// Step 3 새로운 위임을 예약 객체와 연결한다. 프리미엄 예약을 생성하는 팩터리 함수를 수정하면 된다.
function createPremiumBooking(show, date, extras) {
    const result = new PremiumBooking(show, date, extras)
    result._bePremium(extras)
    return result
}

class Booking {
    constructor(show, date) {
        this._show = show
        this._date = date 
    }
    get hasTalkback() {
        return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }
    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
    _bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extra)
    }
}
// _bePremium() 메서드 이름 앞에 밑줄을 붙여 이 메서드가 Booking의 공개 인터페이스가 되어서는 안된다는 의도를 밝힌다.
// 리팩터링의 목적이 일반 예약과 프리미엄 예약을 상호 변환할 수 있게 하는 것이라면 이 메서드는 public 되어도 된다.

// Step 4 기능 옮기기 함수 옮기기를 적용해 서브클래스의 메서드를 위임으로 옮긴다.
// 슈퍼클래스의 데이터를 사용하는 부분은 모두 _host를 통하도록 고친다.
class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
        this._host = hostBooking
        this._extras = extras
    }
    get hasTalkback() { // 위임으로 서브클래스의 함수 옮기기
        return this._host._show.hasOwnProperty('talkback')
    }
}

class PremiumBooking extends Booking {
    constructor(show, date, extras) {
        super(show, date)
        this._extras = extras
    }
    get hasTalkback() { // PremiumDelegate.hasTalkback으롤 사용하도록 변경
        return this._premiumDelegate.hasTalkback;  
    }
    get basePrice() { 
        return Math.round(super.basePrice + this._extras.premiumFee)
    }
    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && !this.isPeakDay
    }
}

// Step 5 테스트 후 서브클래스의 메서드 삭제
class PremiumBooking extends Booking {
    constructor(show, date, extras) {
        super(show, date)
        this._extras = extras
    }
    // hasTalkback 함수 삭제
    get basePrice() { 
        return Math.round(super.basePrice + this._extras.premiumFee)
    }
    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && !this.isPeakDay
    }
}
// Step 6 위임이 존재하면 위임을 사용하는 분배 로직을 슈퍼클래스 메서드에 추가
class Booking {
    constructor(show, date) {
        this._show = show
        this._date = date 
    }
    get hasTalkback() { // 위임을 사용하는 분배 로직을 슈퍼클래스 메서드에 추가
        return (this._premiumDelegate)
        ? this._premiumDelegate.hasTalkback
        : this._show.hasOwnProperty('talkback') && !this.isPeakDay
    }
    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
    _bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extra)
    }
}

// Step 7 basePrice 함수 옮기기
// super을 호출하는 성가신 부분이 존재, 단순히 this._host._basePrice라고 사용하면 무한 재귀에 빠지고 만다.
// 방법 1. 슈퍼클래스의 계산 로직을 함수로 추출하여 가격 계산과 분배 로직을 분리
class Booking {
    constructor(show, date) {
        this._show = show
        this._date = date 
    }
    get hasTalkback() { // 위임을 사용하는 분배 로직을 슈퍼클래스 메서드에 추가
        return (this._premiumDelegate)
        ? this._premiumDelegate.hasTalkback
        : this._show.hasOwnProperty('talkback') && !this.isPeakDay
    }
    get basePrice() {
        return (this._premiumDelegate)
        ? this._premiumDelegate.basePrice
        : this._privateBasePrice
    }

    get _privateBasePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }

    _bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extra)
    }
}
// 방법 2 위임의 메서드를 기반 메서드의 확장 형태로 재호출
class Booking {
    constructor(show, date) {
        this._show = show
        this._date = date 
    }
    get hasTalkback() { // 위임을 사용하는 분배 로직을 슈퍼클래스 메서드에 추가
        return (this._premiumDelegate)
        ? this._premiumDelegate.hasTalkback
        : this._show.hasOwnProperty('talkback') && !this.isPeakDay
    }
    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return (this._premiumDelegate)
        ? this._premiumDelegate.extendBasePrice(result)
        : result;
    }
    _bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extra)
    }
}

class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
        this._host = hostBooking
        this._extras = extras
    }
    get hasTalkback() { // 위임으로 서브클래스의 함수 옮기기
        return this._host._show.hasOwnProperty('talkback')
    }
    extendBasePrice(base) { // 확장 메서드
        return Math.round(base + this._extras.premiumFee)
    }
}

// Step 8 서브클래스에만 존재하는 메서드 처리
class PremiumBooking extends Booking {
    constructor(show, date, extras) {
        super(show, date)
        this._extras = extras
    }
    get basePrice() { 
        return Math.round(super.basePrice + this._extras.premiumFee)
    }
    get hasDinner() { // 위임으로 옮기기 
        return this._extras.hasOwnProperty('dinner') && !this.isPeakDay
    }
}

class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
        this._host = hostBooking
        this._extras = extras
    }
    get hasTalkback() { // 위임으로 서브클래스의 함수 옮기기
        return this._host._show.hasOwnProperty('talkback')
    }
    extendBasePrice(base) { // 확장 메서드
        return Math.round(base + this._extras.premiumFee)
    }
    get hasDinner() {
        return (this._premiumDelegate)
        ? this._premiumDelegate.hasDinner
        : undefined
    }
}
// Step 9 팩터리 메서드가 슈퍼클래스를 반환하도록 수정
function createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date, extras)
    result._bePremium(extra);
    return result
}

// 위임으로 변경함으로써 분배 로직과 양방향 참조가 더해지는 등 복잡도가 올라갔지만, 동적으로 프리미엄 예약으로 바꿀 수 있는 장점이 생겼고, 상속을 다른 목적으로 사용할 수 있게 되었다.

