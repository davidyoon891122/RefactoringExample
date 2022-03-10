// ASIS
class Customer {
    get plan() { return this._plan; }
    get discountRate() { return this._discountRate; }
}

// TOBE
class Customer {
    get plan() { return this._plan; }
    get discountRate() { return this.plan.discountRate; }
}

// 예시
// 고객 클래스와 계약 클래스에서 시작
// ASIS
// 여기서 할일율을 뜻하는 discountRate 필드를 Customer에서 CustomerContract로 옮기고 싶다고 가정
class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._discountRate = discountRate;
        this._contract = new CustomerContract(dateToday());
    }

    get discountRate() { return this._discountRate; }
    becomePreferred() {
        this._discountRate += 0.03;
        // 다른 멋진 일들
    }
    applyDiscount(amount) {
        return amount.subtract(amount.mutiply(this._discountRate));
    }
}

class CustomerContract {
    constructor(startDate) {
        this._startDate = startDate;
    }
}

// Step 1 discountRate 필드를 캡슐화
// 할인율를 수정하는 public 세터를 만들고 싶지 않아 세터 속성이 아니라 메서드를 이용
class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._setDiscountRate(discountRate); // 변경
        this._contract = new CustomerContract(dateToday());
    }

    get discountRate() { return this._discountRate; } // 변경
    _setDiscountRate(aNumber) {this._discountRate = aNumber; } // 추가
    becomePreferred() {
        this._setDiscountRate(this.discountRate + 0.03); // 변경
        // 다른 멋진 일들
    }
    applyDiscount(amount) {
        return amount.subtract(amount.mutiply(this.discountRate)); // 변경
    }
}

class CustomerContract {
    constructor(startDate) {
        this._startDate = startDate;
    }
}

// Step 2 CustomerContract 클래스에 필드 하나와 접근자를 추가
class CustomerContract {
    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }

    get discountRate() { return this._discountRate; }
    set discountRate(arg) { this._discountRate = arg; }
}

// Step3 Customer 접근자들이 새로운 필드를 사용하도록 수정한다
class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._contract = new CustomerContract(dateToday());
        this._setDiscountRate(discountRate); // 변경
    }

    get discountRate() { return this._constract.discountRate; } // 변경
    _setDiscountRate(aNumber) {this._contract.discountRate = aNumber; } 
    becomePreferred() {
        this._setDiscountRate(this.discountRate + 0.03); 
        // 다른 멋진 일들
    }
    applyDiscount(amount) {
        return amount.subtract(amount.mutiply(this.discountRate)); 
    }
}

// 예제2 공유 객체로 이동하기
// 이자율 interest rate을 계좌 account별로 설정
// 코드를 수정하여 아자율이 계좌 종류에 따라 정해지도록 수정
// ASIS
class Account {
    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
        this._interestRate = interestRate;
    }

    get interestRate() { return this._interestRate; }
}

class AccountType {
    constructor(nameString) {
        this._name = nameString;
    }
}
// Step 1 타겟인 AccountType에 이자율 필드와 필요한 접근자 메서드를 생성해보자
// 주의
// Account가 AccountType의 이자율을 가져오도록 수정하면 문제가 생길수 있다.
// 리팩터링 전에는 각 계좌가 자신만의 이자율을 갖고 있었고, 지금은 종류가 같은 모든 계좌가 이자율을 공유하기를 원한다.
// 만약 수정 전에도 이자율이 계좌 종류별로 같게 설정되어 있었다면 겉보기 동작이 달라지지 않으니 그대로 리팩터링하면 된다.
// 이자율이 다른 계좌가 하나라도 있었다면, 이건 더 이상 리팩터링이 아니다.
// 모든 계좌의 아자율이 계좌 종류에 부합하게 설정되어 있는지 확인해야 한다. 계좌 클래스에 어서션을 추가하는 것도 도움이 된다.

class AccountType {
    constructor(nameString, interestRate) {
        this._name = nameString;
        this._interestRate = interestRate;
    }

    get interestRate() { return this._interestRate; }
}

// Step 2 어서션 추가
class Account {
    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
        assert(interestRate === this._type.interestRate);
        this._interestRate = interestRate;
    }

    get interestRate() { return this._interestRate; }
}

// Step3 Account 클래스에서 이자율을 직접 수정하던 코드를 완전히 제거
class Account {
    constructor(number, type) {
        this._number = number;
        this._type = type;
    }

    get interestRate() { return this._interestRate; }
}

