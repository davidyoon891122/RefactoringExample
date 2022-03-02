// ASIS
orders.filter(o => "high" === o.priority || "rush" === o.priority)

// TOBE
order.filter(o => o.priority.higherThan(new Priority("normal")))

// 예시
// ASIS

class Order {
    constructor(data) {
        this.priority = data.priority;
    }
}
// 클라이언트
highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;


// Step 1 캡슐화
class Order {
    constructor(data) {
        this.priority = data.priority;
    }
    get priority() { return this._priority; }
    set priority(aString) { this._priority = aString; }
}

// Step 2 우선순위 속성을 표현하는 값 클래스 Priority를 만든다
// 표현할 값을 받는 생성자와 그 값을 문자열로 반환하는 변환 함수로 구성된다
class Priority {
    constructor(value) { this._value = value; }
    toString() { return this._value; }
}

// Step 3 방금 만든 Priority 클래스를 사용하도록 접근자들을 수정
class Order {
    constructor(data) {
        this.priority = data.priority;
    }
    get priority() { return this._priority.toString(); }
    set priority(aString) { this._priority = new Priority(aString); }
}

// Step 4 Order 클래스의 게터가 하는 일이 변경되었으니 게터 이름을 바꾸어 준다
class Order {
    constructor(data) {
        this.priority = data.priority;
    }
    get priorityString() { return this._priority.toString(); }
    set priority(aString) { this._priority = new Priority(aString); }
}

// 클라이언트
highPriorityCount = orders.filter(o => "high" === o.priorityString || "rush" === o.priorityString).length

// 더 가다듬기 Priority 객체를 제공하는 게터를 Order 클래스에 만들자
class Order {
    constructor(data) {
        this.priority = data.priority;
    }
    get priority() { this._priority; }
    get priorityString() { return this._priority.toString(); }
    set priority(aString) { this._priority = new Priority(aString); }
}

// Priority 클래스는 다른 곳에서도 유용할 수 있으니 Order의 세터가 Priority 인스턴스를 받도록 수정
class Priority {
    constructor(value) { 
        if (value instanceof Priority) return value; // Priority 클래스를 새로운 동작을 담는 장소로 활용하기 위해서 
        this._value = value; 
    }
    toString() { return this._value; }
}

// 우선순위 값을 검증하고 비교하는 로직을 추가한 예

class Priority {
    constructor(value) { 
        if (value instanceof Priority) return value; 
        if (Priority.legalValues().includes(value))
            this._value = value; 
        else
            throw new Error(`<${value}>는 유효하지 않는 우선순위 입니다.`);
    }
    toString() { return this._value; }
    get _index() { return Priority.legalValues().findIndex(s => s === this._value);}
    static legalValues() { return ['low', 'normal', 'high', 'rush']; }
    equals(other) { return this._index === order._index; }
    higherThan(other) { return this._index > order._index; }
    lowerThan(other) { return this._index < order._index; } 
}

// 클라이언트
highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("normal"))).length;