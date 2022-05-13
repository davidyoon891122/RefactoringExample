// ASIS
class List {}
class Stack extends List {}
// TOBE
class Stack {
    constructor() {
        this._storage = new List()
    }
}
class List {}

// 예시 1 고대 스크롤을 보관하고 있는 도서관, 스크롤들의 상세정보는 이미 카탈로그로 분류해 있었는데, 각 스크롤에는 ID 번호와 제목이 있고 그외 여러 가지 태그가 붙어 있다
class CatalogItem {
    constructor(id, title, tags) {
        this._id = id
        this._title = title
        this._tags = tags
    }
    get id() { return this._id }
    get title() { return this._title }
    hasTag(arg) { return this._tags.includes(arg) }
}
// 스크롤에는 정기 세척 이력이 필요하여 카탈로그 아아템을 확장하여 세척 관련 데이터를 추가해 사용
class Scroll extends CatalogItem {
    constructor(id, title, tags, dataLastCleaned) {
        super(id, title, tags)
        this._lastCleaned = dataLastCleaned
    }

    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500
        return this.daysSinceLastCleaning(targetDate) > threshold
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS)
    }
}

// 물리저긴 스크롤과 논리적인 카탈로그 아이템에는 차이가 있다.
// Step 1 Scroll에 카탈로그 아이템을 참조할 수 있는 속성을 만들고 슈퍼클래스의 인스턴스를 새로 하나 만들어 대입하자
class Scroll extends CatalogItem {
    constructor(id, title, tags, dataLastCleaned) {
        super(id, title, tags)
        this._catalogItem = new CatalogItem(id, title, tags)
        this._lastCleaned = dataLastCleaned
    }

    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500
        return this.daysSinceLastCleaning(targetDate) > threshold
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS)
    }
}
// Step 2 서브클래스에서 사용하는 슈퍼클래스의 동작 각각에 대응하는 전달 메서드를 만든다
class Scroll extends CatalogItem {
    constructor(id, title, tags, dataLastCleaned) {
        super(id, title, tags)
        this._catalogItem = new CatalogItem(id, title, tags)
        this._lastCleaned = dataLastCleaned
    }
    get id() {
        return this._catalogItem.id
    }
    get title() {
        return this._catalogItem.title
    }
    hasTag(aString) {
        return this._catalogItem.hasTag(aString)
    }
    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500
        return this.daysSinceLastCleaning(targetDate) > threshold
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS)
    }
}
// Step 3 상속 관계를 끊는다
class Scroll {
    constructor(id, title, tags, dataLastCleaned) {
        this._catalogItem = new CatalogItem(id, title, tags)
        this._lastCleaned = dataLastCleaned
    }
    get id() {
        return this._catalogItem.id
    }
    get title() {
        return this._catalogItem.title
    }
    hasTag(aString) {
        return this._catalogItem.hasTag(aString)
    }
    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500
        return this.daysSinceLastCleaning(targetDate) > threshold
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS)
    }
}

// 더 가다듬기
// 값을 참조로 바꾸기 
// 값을 참조로 바꾸기 위해 스크롤은 자신만의 아이디를 사용하도록 한다
// Step 1
class Scroll {
    constructor(id, title, tags, dataLastCleaned) {
        this._id = id
        this._catalogItem = new CatalogItem(null, title, tags)
        this._lastCleaned = dataLastCleaned
    }
    get id() {
        return this._id // 자신의 아이디 전달
    }
    get title() {
        return this._catalogItem.title
    }
    hasTag(aString) {
        return this._catalogItem.hasTag(aString)
    }
    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500
        return this.daysSinceLastCleaning(targetDate) > threshold
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS)
    }
}
// 스크롤 데이터 읽기
const scrolls = aDocumnet
    .map(record => new Scroll(record.id,
                              record.catalogData.title,
                              record.catalogData.tags,
                              LocalDate.parse(record._lastCleaned)
    ))

// Step 2 값을 참조로 만들기 위해 저장소를 찾고 없으면 새로 만든다.
// ID로 색인된 카탈로그 아이템을 저장소로 사용
const scrolls = aDocumnet
    .map(record => new Scroll(record.id,
                              record.catalogData.title,
                              record.catalogData.tags,
                              LocalDate.parse(record._lastCleaned),
                              record.catalogData.id,
                              catalog
    ))
class Scroll {
    constructor(id, title, tags, dataLastCleaned, catalogID, catalog) {
        this._id = id
        this._catalogItem = catalog.get(catalogID) // 변경
        this._lastCleaned = dataLastCleaned
    }
    get id() {
        return this._id // 자신의 아이디 전달
    }
    get title() {
        return this._catalogItem.title
    }
    hasTag(aString) {
        return this._catalogItem.hasTag(aString)
    }
    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500
        return this.daysSinceLastCleaning(targetDate) > threshold
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS)
    }
}
// Step 3 생성자로 건네지던 제목과 태그는 제거
const scrolls = aDocumnet
    .map(record => new Scroll(record.id,
                              LocalDate.parse(record._lastCleaned),
                              record.catalogData.id,
                              catalog
    ))
class Scroll {
    constructor(id, dataLastCleaned, catalogID, catalog) {
        this._id = id
        this._catalogItem = catalog.get(catalogID) // 변경
        this._lastCleaned = dataLastCleaned
    }
    get id() {
        return this._id // 자신의 아이디 전달
    }
    get title() {
        return this._catalogItem.title
    }
    hasTag(aString) {
        return this._catalogItem.hasTag(aString)
    }
    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500
        return this.daysSinceLastCleaning(targetDate) > threshold
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS)
    }
}