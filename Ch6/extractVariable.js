// ASIS 
function getPrice(order) {
    return order.quantity * order.itemPrice - 
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100);
}

// TOBE
function getPrice(order) {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
    const shipping = Math.min(basePrice * 0.1, 100);

    return basePrice - quantityDiscount + shipping;
}

// ASIS in class
class Order {
    constructor(aRecord) {
        this._data = aRecord;
    }

    get quantity() { return this._data.quantity }
    get itemPrice() { return this._data.itemPrice }

    get price() {
        return order.quantity * order.itemPrice - 
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100);
    }
}

// TOBE in class
class Order {
    constructor(aRecord) {
        this._data = aRecord;
    }

    get quantity() { return this._data.quantity }
    get itemPrice() { return this._data.itemPrice }

    get price() {
        return order.quantity * order.itemPrice - 
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100);
    }

    get basePrice() { return this.quantity * this.itemPrice }
    get quantityDiscount() { Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 }
    get shipping() { return Math.min(this.quantity * this.itemPrice * 0.1, 100) }
}