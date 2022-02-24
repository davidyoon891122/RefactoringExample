// ASIS
const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split("-")[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;
// TOBE
const orderRecord = parseOrder(order);
const orderPrice = price(orderRecord, priceList);

function parseOrder(aString) {
    const value = aString.split(/\s+/);
    return ({
        productID: value[0].split("-")[1],
        quantity: parseInt(values[1]),
    });
}

function price(order, priceList) {
    return order.quantity * priceList[order.productID];
}

// 예시 상품의 결제 금액을 계산하는 코드
// ASIS
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost
    return price;
}

// Step 1 배송비 계산 부분을 함수로 추출
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const price = applyShipping(basePrice, shippingMethod, quantity, discount);
    return price
}

function applyShipping(basePrice, shippingMethod, quantity, discount) {
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}

// Step 2 첫 번째 단계와 두 번째 단계가 주고받을 중간 데이터 구조를 만든다
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = {}; // 중간 데이터 구조
    const price = applyShipping(priceData, basePrice, shippingMethod, quantity, discount);
    return price
}

function applyShipping(priceData, basePrice, shippingMethod, quantity, discount) {
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}

// Step 3 applyShipping()에 전달되는 매개변수 중 basePrice는 첫 번째 단계에서 생성되니 중간 데이터 구조로 옮기고 매개변수 목록에서 삭제
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = {basePrice: basePrice}; // 중간 데이터 구조
    const price = applyShipping(priceData, shippingMethod, quantity, discount);
    return price
}

function applyShipping(priceData, shippingMethod, quantity, discount) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = priceData.basePrice - discount + shippingCost;
    return price;
}

// Step 4 quantity를 중간 데이터로 이동
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = {basePrice: basePrice, quantity: quantity}; // 중간 데이터 구조
    const price = applyShipping(priceData, shippingMethod, discount);
    return price
}

function applyShipping(priceData, shippingMethod, discount) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - discount + shippingCost;
    return price;
}
// Step 5 Discount 처리
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = {basePrice: basePrice, quantity: quantity, discount: discount}; // 중간 데이터 구조
    const price = applyShipping(priceData, shippingMethod);
    return price
}

function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
}

// Step 6 첫 번째 단계 코드를 함수로 추출하고 데이터 구조 반환
function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    const price = applyShipping(priceData, shippingMethod);
    return price
}

function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    return {basePrice: basePrice, quantity: quantity, discount: discount}
}

function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
}

// Step 7 함수 인라인
function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    return applyShipping(priceData, shippingMethod);
}

function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    return {basePrice: basePrice, quantity: quantity, discount: discount}
}

function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
}