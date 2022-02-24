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