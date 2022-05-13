// 예시 2 서브클래스가 여러 개일 때
// ASIS
function createBird(data) {
    switch (data.type) {
        case '유럽 제비':
            return new EuropeanSwallow(data)
        case '아프리카 제비':
            return new AfricanSwallow(data)
        case '노르웨이 파랑 앵무':
            return new NorwegianBlueParrot(data)
        defulat:
            return new Bird(data)
    }
}

class Bird {
    constructor(data) {
        this._name = name
        this._plumage = data.plumage
    }
    get name() {
        return this._name
    }
    get plumage() {
        return this._plumage
    }
    get airSpeedVelocity() {
        return null
    }
}

class EuropeanSwallow extends Bird {
    get airSpeedVelocity() {
        return 35
    }
}

class AfricanSwallow extends Bird {
    constructor(data) {
        super(data)
        this._numberOfCoconuts = data.numberOfCoconuts
    }
    get airSpeedVelocity() {
        return 40 - 2 * this._numberOfCoconuts
    }
}

class NorwegianBlueParrot extends Bird {
    constructor(data) {
        super(data)
        this._voltage = data.voltage
        this._isNailed = data.isNailed
    }
    get plumage() {
        if (this._voltage > 100) return '그을렸다'
        else return this._plumage || '예쁘다'
    }
    get airSpeedVelocity() {
        return (this._isNailed) ? 0 : 10 + this._voltage / 10;
    }
}

// 야생(wild) 조류와 사육(captivity) 조류를 구분짓기 위해 수정할 예정
// WildBird와 CaptiveBird라는 두 서브클래스로 모델링 하는 방법도 있으나, 상속은 한 번만 쓸 수 있으니 야생과 사육을 기준으로 나누려면 종에 따른 분류를 포기해야 한다.
// Step 1 빈 위임 클래스를 만들다
class EuropeanSwallowDelegate  {
}
// Step 2 위임 필드를 어디에서 초기화 할지 정한다. 생성자가 받는 유일한 인수인 data가 모든 정보를 가지고 있으니 생성자에서 처리하고, 여러 위임을 만들어야 하니 타입 코드를 기준으로 올바른 위임을 선택하는 메서드를 생성한다.
class Bird {
    constructor(data) {
        this._name = name
        this._plumage = data.plumage
        this._speciesDelegate = this.selectSpeciesDelegate(data)
    }
    get name() {
        return this._name
    }
    get plumage() {
        return this._plumage
    }
    get airSpeedVelocity() {
        return null
    }
    selectSpeciesDelegate(data) {
        switch(data.type) {
            case '유럽 제비':
                return new EuropeanSwallowDelegate()
            default:
                return null
        }
    }
}

// Step 3 유럽 제비 비행 속도 메서드를 위임으로 옮기기
class EuropeanSwallowDelegate  {
    get airSpeedVelocity() {
        return 35
    }
}

class EuropeanSwallow extends Bird {
    get airSpeedVelocity() {
        return this._speciesDelegate.airSpeedVelocity // 변경
    }
}
// 슈퍼클래스의 airSpeedVelocity()를 수정하여, 위임이 존재하면 위임의 메서드를 호출하도록 한다.
class Bird {
    constructor(data) {
        this._name = name
        this._plumage = data.plumage
        this._speciesDelegate = this.selectSpeciesDelegate(data)
    }
    get name() {
        return this._name
    }
    get plumage() {
        return this._plumage
    }
    get airSpeedVelocity() {
        return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null // 수정
    }
    selectSpeciesDelegate(data) {
        switch(data.type) {
            case '유럽 제비':
                return new EuropeanSwallowDelegate()
            default:
                return null
        }
    }
}
// 유럽 제비 클래스 제거
function createBird(data) {
    switch (data.type) {
        case '아프리카 제비':
            return new AfricanSwallow(data)
        case '노르웨이 파랑 앵무':
            return new NorwegianBlueParrot(data)
        defulat:
            return new Bird(data)
    }
}
// Step 4 아프리카 제비 위임 클래스 생성
class AfricanSwallowDelegate  {
}
class Bird {
    constructor(data) {
        this._name = name
        this._plumage = data.plumage
        this._speciesDelegate = this.selectSpeciesDelegate(data)
    }
    get name() {
        return this._name
    }
    get plumage() {
        return this._plumage
    }
    get airSpeedVelocity() {
        return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null // 수정
    }
    selectSpeciesDelegate(data) {
        switch(data.type) {
            case '유럽 제비':
                return new EuropeanSwallowDelegate()
            case '아프리카 제비':
                return new AfricanSwallowDelegate(data)
            default:
                return null
        }
    }
}
// Step 5 airSpeedVelocity 함수를 옮긴다
class AfricanSwallowDelegate  {
    get airSpeedVelocity() {
        return 40 - 2 * this._numberOfCoconuts
    }
}
class AfricanSwallow extends Bird {
    constructor(data) {
        super(data)
        this._numberOfCoconuts = data.numberOfCoconuts
    }
    get airSpeedVelocity() {
        return this._speciesDelegate.airSpeedVelocity
    }
}
// Step 6 아프리카 제비 서브클래스 제거
function createBird(data) {
    switch (data.type) {
        case '노르웨이 파랑 앵무':
            return new NorwegianBlueParrot(data)
        defulat:
            return new Bird(data)
    }
}
// Step 7 노르웨이 파랑 앵무 처리
class Bird {
    constructor(data) {
        this._name = name
        this._plumage = data.plumage
        this._speciesDelegate = this.selectSpeciesDelegate(data)
    }
    get name() {
        return this._name
    }
    get plumage() {
        return this._plumage
    }
    get airSpeedVelocity() {
        return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null // 수정
    }
    selectSpeciesDelegate(data) {
        switch(data.type) {
            case '유럽 제비':
                return new EuropeanSwallowDelegate()
            case '아프리카 제비':
                return new AfricanSwallowDelegate(data)
            case '노르웨이 파랑 앵무':
                return new NorwegianBlueParrotDelegate(data)
            default:
                return null
        }
    }
}

class NorwegianBlueParrotDelegate {
    constructor(data) {
        this._voltage = data.voltage
        this._isNailed = data.isNailed
    }

    get airSpeedVelocity() {
        return (this._isNailed) ? 0: 10 + this._voltage / 10;
    }
}
// Step 8 오버라이드하는 plumage 떄문에 생성자에 Bird로의 역참조를 추가해야 한다
class NorwegianBlueParrot extends Bird {
    constructor(data) {
        super(data)
        this._voltage = data.voltage
        this._isNailed = data.isNailed
    }
    get plumage() {
        return this._speciesDelegate.plumage
    }
    get airSpeedVelocity() {
        return (this._isNailed) ? 0 : 10 + this._voltage / 10;
    }
}

class NorwegianBlueParrotDelegate {
    get plumage() {
        if (this._voltage > 100) return "그을렸다"
        else return this._bird._plumage || "예쁘다"
    }

    constructor(data, bird) {
        this._bird = bird
        this._voltage = data.voltage
        this._isNailed = data.isNailed
    }
}

// Step 9 서브클래스에서 plumage 메서드를 제거
class Bird {
    constructor(data) {
        this._name = name
        this._plumage = data.plumage
        this._speciesDelegate = this.selectSpeciesDelegate(data)
    }
    get name() {
        return this._name
    }
    get plumage() {
        if (this._speciesDelegate)
            return this._speciesDelegate.plumage
        else
            return this._plumage || "보통이다"
    }
    get airSpeedVelocity() {
        return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null // 수정
    }
    selectSpeciesDelegate(data) {
        switch(data.type) {
            case '유럽 제비':
                return new EuropeanSwallowDelegate()
            case '아프리카 제비':
                return new AfricanSwallowDelegate(data)
            case '노르웨이 파랑 앵무':
                return new NorwegianBlueParrotDelegate(data, this) // 추가
            default:
                return null
        }
    }
}

class EuropeanSwallowDelegate  {
    get airSpeedVelocity() {
        return 35
    }
    get plumage() {
        return this._bird._plumage || "보통이다" // 중복 발생
    }
}

class AfricanSwallowDelegate  {
    get airSpeedVelocity() {
        return 40 - 2 * this._numberOfCoconuts
    }
    get plumage() {
        return this._bird._plumage || "보통이다" // 중복 발생
    }
}

// Step 10 중복을 해결하기 위해 상속을 사용한다
class SpeciesDelegate {
    constructor(data, bird) {
        this._bird = bird
    }
    get plumage() {
        return this._bird._plumage || "보통이다"
    }
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
    get airSpeedVelocity() {
        return 35
    }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
    get plumage() {
        if (this._voltage > 100) return "그을렸다"
        else return this._bird._plumage || "예쁘다"
    }

    constructor(data, bird) {
        super(data, bird)
        this._voltage = data.voltage
        this._isNailed = data.isNailed
    }
}

// Step 11 Bird의 기본 동작 모두를 SpeciesDelegate 클래스로 옮긴다.
class Bird {
    constructor(data) {
        this._name = name
        this._plumage = data.plumage
        this._speciesDelegate = this.selectSpeciesDelegate(data)
    }
    get name() {
        return this._name
    }
    get plumage() {
        return this._speciesDelegate.plumage // 변경
    }
    get airSpeedVelocity() {
        return this._speciesDelegate.airSpeedVelocity // 변경
    }
    selectSpeciesDelegate(data) {
        switch(data.type) {
            case '유럽 제비':
                return new EuropeanSwallowDelegate()
            case '아프리카 제비':
                return new AfricanSwallowDelegate(data)
            case '노르웨이 파랑 앵무':
                return new NorwegianBlueParrotDelegate(data, this) // 추가
            default:
                return new SpeciesDelegate(data, this) // 변경
        }
    }
}

class SpeciesDelegate {
    constructor(data, bird) {
        this._bird = bird
    }
    get plumage() {
        return this._bird._plumage || "보통이다"
    }
    get airSpeedVelocity() {
        return null
    }
}