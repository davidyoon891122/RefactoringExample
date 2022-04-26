// ASIS
class Employee {
    //...
}

class Salesperson extends Employee {
    get name() {
        //...
    }
}

class Engineer extends Employee {
    get name() {
        //...
    }
}

// TOBE
class Employee {
    get name() {
        //...
    }
}

class Salesperson extends Employee {

}

class Engineer extends Employee {

}

// 예시
// ASIS

class Employee extends Party {
    get annualCast() {
        return this.monthlyCost * 12
    }
}

class Department extends Party {
    get totalAnnualCost() {
        return this.monthlyCost * 12
    }
}

// Step 1 두 메서드의 이름을 통일 한다.
class Employee extends Party {
    get annualCast() {
        return this.monthlyCost * 12
    }
}

class Department extends Party {
    get annualCast() {
        return this.monthlyCost * 12
    }
}

// Step 2 부모 클래스 Party 클래스에 서브클래스 중 하나의 메서드를 복사하여 붙여넣기 한다.
class Party {
    get annualCast() {
        return this.monthlyCost * 12
    }
}

// Step 3 자식 클래스의 메소드를 삭제한다.
class Party {
    get annualCast() {
        return this.monthlyCost * 12
    }
}

class Employee extends Party {

}

class Department extends Party {

}

// Step 4 annualCost가 호출하는 monthlyCost()를 서브 클래스가 monthlyCost()를 구현해야 한다는 사실을 함정 메서드로 알려준다.
class Party {
    get annualCast() {
        return this.monthlyCost * 12
    }

    get monthlyCost() {
        throw new SubclassResponsibilityError() // 이런 오류를 서브클래스 책임 오류(subclass responsibilty error라 한다(스몰토크에서 유래)
    }
}

class Employee extends Party {

}

class Department extends Party {

}