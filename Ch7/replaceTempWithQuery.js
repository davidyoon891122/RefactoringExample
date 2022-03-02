// ASIS
const basePrice = this._quantity * this._itemPrice;
if (basePrice > 1000)
    return basePrice * 0.95;
else 
    return basePrice * 0.98;

// TOBE
class Order {
    get basePrice() {
        this._quantity * this._itemPrice; 
   }
}


if (this.basePrice > 1000)
    return this.basePrice * 0.95;
else 
    return this.basePrice * 0.98;

// 예시
class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get price() {
        var basePrice = this._quantity * this._item.price;
        var discountFactor = 0.98;

        if (basePrice > 1000) discountFactor -= 0.03;
        return basePrice * discountFactor;
    }
}

// TOBE
// Step 1 basePrice 를 const를 붙여 읽기전용으로 변경
class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get price() {
        const basePrice = this._quantity * this._item.price;
        var discountFactor = 0.98;

        if (basePrice > 1000) discountFactor -= 0.03;
        return basePrice * discountFactor;
    }
}

// Step 2 대입문의 우변을 게터로 추출한다
class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get basePrice() {
        return this._quantity * this._item.price; // 추출
    }

    get price() {
        const basePrice = this.basePrice;
        var discountFactor = 0.98;

        if (basePrice > 1000) discountFactor -= 0.03;
        return basePrice * discountFactor;
    }
}

// Step 3 변수를 인라인한다.
class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get basePrice() {
        return this._quantity * this._item.price; 
    }

    get price() {
        var discountFactor = 0.98;

        if (this.basePrice > 1000) discountFactor -= 0.03; // 인라인
        return this.basePrice * discountFactor; // 인라인
    }
}

// Step 4 discountFactor도 같은 순서로 처리한다
class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get basePrice() {
        return this._quantity * this._item.price; 
    }

    get discountFactor() { // 추출
        var discountFactor = 0.98;

        if (this.basePrice > 1000) discountFactor -= 0.03;
        return discountFactor
    }

    get price() {
        const discountFactor = this.discountFactor // const
        return this.basePrice * discountFactor; 
    }
}

// Step 5 변수 인라인
class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get basePrice() {
        return this._quantity * this._item.price; 
    }

    get discountFactor() { // 추출
        var discountFactor = 0.98;

        if (this.basePrice > 1000) discountFactor -= 0.03;
        return discountFactor
    }

    get price() {
        return this.basePrice * this.discountFactor; 
    }
}