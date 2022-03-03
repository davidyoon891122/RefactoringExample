// ASIS
class Person {
    get officeAreaCode() {
        return this._telephoneNumber.areaCode;
    }

    get officeNumber() {
        return this._telephoneNumber.number;
    }
}

class TelephoneNumber {
    get areaCode() { return this._areaCode; }
    get number() { return this._number; }
}

// TOBE
class Person {
    get officeAreaCode() { return this._officeAreaCode; }
    get officeNumber() { return this._officeNumber; }
}

// 예시
// 배송 추적 정보를 표현하는 클래스
class TrackingInformation {
    get shippingCompany() { return this._shippingCompany; } // 배송 회사
    set shippingCompany(arg) { this._shippingCompany = arg; } 
    get trackingNumber() { return this._trackingNumber; }
    set trackingNumber(arg) { this._trackingNumber = arg; }
    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}

class Shipment {
    get trackingInfo() {
        return this._trackingInformation.display;
    }
    get trackingInformation() { return this._trackingInformation; }
    set trackingInformation(aTrackingInformation ) { this._trackingInformation = aTrackingInformation; }
}

// Step 1 TrackingInformation의 메소드를 호출하는 코드를 찾는다
// 클라이언트 
aShipment.trackingInformation.shippingCompany = request.vendor;

// Step 2 shipment 위임함수를 만들고 클라이언트가 이를 호출하도록 수정한다

class Shipment {
    get trackingInfo() {
        return this._trackingInformation.display;
    }
    get trackingInformation() { return this._trackingInformation; }
    set trackingInformation(aTrackingInformation ) { this._trackingInformation = aTrackingInformation; }
    set shippingCompany(arg) { this._trackingInformation.shippingCompany = arg; }
}

// 클라이언트
aShipment.shippingCompany = request.vendor

// Step 3 TrackingInformation의 모든 요소를 Shipment로 옮긴다

class TrackingInformation {
    get shippingCompany() { return this._shippingCompany; } // 배송 회사
    set shippingCompany(arg) { this._shippingCompany = arg; } 
    get trackingNumber() { return this._trackingNumber; }
    set trackingNumber(arg) { this._trackingNumber = arg; }
    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}

class Shipment {
    get trackingInfo() {
        return this._trackingInformation.display;
    }
    get trackingInformation() { return this._trackingInformation; }
    set trackingInformation(aTrackingInformation ) { this._trackingInformation = aTrackingInformation; }

    set shippingCompany(arg) { this._shippingCompany = arg; }
    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }

    get shippingCompany() { return this._shippingCompany; }
    set shippingCompany(arg) { this._shippingCompany = arg; }
}

// Step 4 Shipment 클래스를 정리하고 TrackingInformation 클래스 삭제

class Shipment {
    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }

    get shippingCompany() { return this._shippingCompany; }
    set shippingCompany(arg) { this._shippingCompany = arg; }
    get trackingNumber() { return this._trackingNumber; }
    set trackingNumber(arg) { this._trackingNumber = arg; }
}