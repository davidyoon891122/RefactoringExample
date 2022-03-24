// ASIS
class Organization {
    get name() {}
}
// TOBE
class Organization {
    get title() {}
}

// 예시
// name을 title로 변경하고자 한다.
// ASIS
const organication = {name: "에크미 구스베리", country: "GB"};

// TOBE
// Step 1 레코드를 캡슐화한다
class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    get name() { return this._name; }
    set name(aString) { this._name = aString; }
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}

const organization = new Organization({name: "에크미 구스베리", country: "GB"});

// Step 2 별도의 필드를 정의하여 생성자와 접근자에서 둘을 구분하여 사용

class Organization {
    constructor(data) {
        this._title = data.name; // 변경
        this._country = data.country;
    }

    get name() { return this._title; } // 변경
    set name(aString) { this._title = aString; } // 변경
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}

// Step 3 생성자에서 title도 받아들일 수 있도록 조치
// 생성자를 호출하는 쪽에서는 name과 title를 모두 사용할 수 있게 되었다
class Organization {
    constructor(data) {
        this._title = (data.title !== undefined) ? data.title : data.name; //생성자에서 title로 받을 수 있으면 바로 받도록 조치
        this._country = data.country;
    }
    get name() { return this._title; } 
    set name(aString) { this._title = aString; } 
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}
// Step 4 사용하는 쪽에서 title을 사용하도록 수정한다.
const organization = new Organization({title: "에크미 구스베리", country: "GB"}); // title로 변경

// Step 5 name을 사용할 수 있게 하던 코드 제거
class Organization {
    constructor(data) {
        this._title = data.title // name 사용 가능하게 하던 코드 제거
        this._country = data.country;
    }
    get name() { return this._title; } 
    set name(aString) { this._title = aString; } 
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}

// Step 6 접근자도 수정
class Organization {
    constructor(data) {
        this._title = data.title 
        this._country = data.country;
    }
    get title() { return this._title; } // 접근자 수정
    set title(aString) { this._title = aString; }  // 접근자 수정
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}