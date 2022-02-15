// ASIS
function circum(radius) {
    return 2 * Math.PI * radius
}

// TOBE
function circumference(radius) {
    return 2 * Math.PI * radius
}

// 매개변수 추가하기
//ASIS
class Book {
    addReservation(customer) {
        this._reservations.push(customer);
    }
}

//TOBE
class Book {
    addReservation(customer) {
        this.zz_addReservation(customer, false);
    }

    zz_addReservation(customer, isPriority) {
        assert(isPriority == true || isPriority == false);
        this._reservations.push(customer);
    }
}

// 매계변수를 속성으로 바꾸기
//ASIS
function inNewEngland(aCustomer) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

const newEnglanders = someCustomers.filter(c => inNewEngland(c));

//TOBE
function inNewEngland(aCustomer) {
    return xxNewInEngland(aCustomer.address.state);
}

function inNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}
const newEnglanders = someCustomers.filter(c=>xxNewInEngland(c.address.state));

