// ASIS
function getRating(driver) {
    return moreThanFiveLateDeliviries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliviries(driver) {
    return driver.numberOfLateDeliveries > 5;
}

// TOBE
function rating(aDriver) {
    return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}


