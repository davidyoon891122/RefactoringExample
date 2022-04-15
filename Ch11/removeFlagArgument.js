// ASIS
function setDimension(name, value) {
    if(name === 'height') {
        this._height = value;
        return;
    }
    if(name === 'width') {
        this._width = value;
        return;
    }
}
// TOBE
function setHeight(value) { this._height = value; }
function setWidth(value) { this._width = value; }

// 예시
// 호출부 1
aShipment.deliveryDate = deliveryDate(anOrder, true);

// 호출부 2
aShipment.deliveryDate = deliveryDate(anOrder, false);
// 불리언 값이 무엇을 의미하는지 알 수 없음..
// 호출자의 지시에 따라 실행하는 구문이 달라진다
function deliveryDate(anOrder, isRush) {
    if (isRush) {
        let deliveryTime;
        if(['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1;
        else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
        else deliveryTime = 3;
        return anOrder.placedOn.plusDays(1 + deliveryTime);
    } else {
        let deliveryTime;
        if(['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
        else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
        else deliveryTime = 4;
        return anOrder.placedOn.plusDays(2 + deliveryTime);
    }
}
// Step 1 조건문 분해하기
function deliveryDate(anOrder, isRush) {
    if (isRush) return rushDeliveryDate(anOrder)
    else return regularDeliveryDate(anOrder)
}

function rushDeliveryDate(anOrder) {
    let deliveryTime;
    if(['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder) {
    let deliveryTime;
    if(['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
}
// 새로 만든 두 함수가 호출자의 의도를 더 잘 드러낸다
// 호출부 변경
// 호출부 1
aShipment.deliveryDate = rushDeliveryDate(anOrder);

// 호출부 2
aShipment.deliveryDate = regularDeliveryDate(anOrder);

// Step 2 deliveryDate() 제거
function rushDeliveryDate(anOrder) {
    let deliveryTime;
    if(['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder) {
    let deliveryTime;
    if(['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
}

// 호출부 1
aShipment.deliveryDate = rushDeliveryDate(anOrder);

// 호출부 2
aShipment.deliveryDate = regularDeliveryDate(anOrder);
