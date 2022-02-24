// ASIS
function isPriceOverThousand() {
    let basePrice = anOrder.basePrice;
    return (basePrice > 1000);
}
// TOBE
function isPriceOverThousand() {
    return anOrder.basePrice > 1000;
}
