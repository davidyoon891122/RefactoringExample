
// ASIS
function amountInvoiced(startDate, endDate) {}
function amountReceived(startDate, endDate) {}
function amountOverdue(startDate, endDate) {}

// TOBE
function amountInvoiced(aDateRage) {}
function amountReceived(aDateRage) {}
function amountOverdue(aDateRage) {}

// 예시
// ASIS
const station = {
    name: "ZB1",
    readings: [
        {temp: 47, time: "2016-11-10 09:10"},
        {temp: 53, time: "2016-11-10 09:20"},
        {temp: 58, time: "2016-11-10 09:30"},
        {temp: 53, time: "2016-11-10 09:40"},
        {temp: 51, time: "2016-11-10 09:50"},
    ]
};

function readingsOutsideRange(station, min, max) {
    return station.readings.filter(r => r.temp < min || r.temp > max);
}

alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
// TOBE
// Step 1 묶은 데이터를 표현하는 클래스 선언
class NumberRange {
    constructor(min, max) {
        this._data = {min: min, max: max};
    }
    get min() {return this._data.min;}
    get max() {return this._data.max;}
}

// Step 2 readingOutsideRange() 매개변수에 객체 추가
function readingOutsideRange(station, min, max, range) {
    return station.readings.filter(r => r.temp < min || r.temp > max);
}

alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling, null);

// Step 3 호출문 변경
const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling, range);

// Step 4 매개변수 max 변경
function readingOutsideRange(station, min, range) {
    return station.readings.filter(r => r.temp < min || r.temp > range.max);
}

alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, range);

// Step 5 매개변수 min 변경
function readingOutsideRange(station, range) {
    return station.readings.filter(r => r.temp < range.min || r.temp > range.max);
}

alerts = readingsOutsideRange(station, range);

// Step 6 허용범위 메서드 추가
class NumberRange {
    constructor(min, max) {
        this._data = {min: min, max: max};
    }
    get min() {return this._data.min;}
    get max() {return this._data.max;}

    contain(arg) {
        return (arg >= this.min || arg <= this.max);
    };
}