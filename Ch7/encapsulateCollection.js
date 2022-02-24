// ASIS
class Person {
    get courses() { return this._courses; }
    set courses(aList) { this._courses = aList; }
}
// TOBE
class Person {
    get courses() { return this._courses.slice(); }
    addCourse(aCourse) {}
    removeCourse(aCourse) {}
}

// 예시 1 수업 목록을 필드로 지니고 있는 Person 클래스
// ASIS
class Person {
    constructor(name) {
        this._name = name;
        this.courses = [];
    }

    get name() { return this._name; }
    get courses() { return this._courses; }
    set courses(aList) { this._courses = aList; }
}

class Course {
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }

    get name() { return this._name; }
    get isAdvanced() { return this._isAdvanced; }
}

const aPerson = new Person()
const numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length; 

const basicCourseNames = readBasicCourseNames(filename); 
aPerson.courses = basicCourseNames.map(name => new Course(name, false)); //세터 클래스를 통해 컬렉션을 통쨰로 설정, Person 클래스가 더는 제어할 수 없으니 캡슐화가 깨짐
// TOBE
// Step 1 수업을 하나씩 추가하고 제거하는 메서드를 추가
class Person {
    constructor(name) {
        this._name = name;
        this.courses = [];
    }

    get name() { return this._name; }
    get courses() { return this._courses.slice(); } // 복제본을 제공
    set courses(aList) { this._courses = aList.slice(); } // set 제거 하거나 변경
    

    addCourse(aCourse) { // 추가하는 함수
        this._courses.push(aCourse);
    }

    removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}) { // 제거하는 함수
        const index = this.courses.indexOf(aCourse); 
        if (index === -1) fnIfAbsent();
        else this._courses.splice(index, 1);
    }
}

class Course {
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }

    get name() { return this._name; }
    get isAdvanced() { return this._isAdvanced; }
}

const aPerson = new Person()
const numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length; 

for(const name of readBasicCourseNames(filename)) {
    aPerson.addCourse(new Course(name, false));
}
aPerson.courses = basicCourseNames.map(name => new Course(name, false)); 