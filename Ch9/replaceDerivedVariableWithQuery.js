// ASIS

class Sample {
    get discountedTotal() {
        return this._discountedTotal; 
    }
    
    set discount(aNumber) {
        const old = this._discount;
        this._discount = aNumber;
        this._discountedTotal += old - aNumber;
    }
}

// TOBE 

class Sample {
    get discountedTotal() {
        return this._baseTotal - this._discount; 
    }
    
    set discount(aNumber) {
        this._discount = aNumber;
    }
}

// 에시
// ASIS
class ProductionPlan {
    get production() { return this._production; }
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}
// TOBE
// Step 1 Assertion 추가
class ProductionPlan {
    get production() { 
        assert(this._production === this.calculatedProduction);
        return this._production
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }

    get calculatedProduction() {
        return this._adjustments
        .reduce((sum, a) => sum + a.amount, 0);
    }
}

// Step 2 코드 수정
class ProductionPlan {
    get production() { 
        return this.calculatedProduction; // 함수로 대체
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }

    get calculatedProduction() {
        return this._adjustments
        .reduce((sum, a) => sum + a.amount, 0);
    }
}
// Step 3 함수를 인라인 대체
class ProductionPlan {
    get production() { 
        return this._adjustments
        .reduce((sum, a) => sum + a.amount, 0); // 인라인
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}

// Step 4 죽은 코드 제거
class ProductionPlan {
    get production() { 
        return this._adjustments
        .reduce((sum, a) => sum + a.amount, 0); // 인라인
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
    }
}

// 예시 2 소스가 둘 이상일 때
// ASIS

class ProductionPlan {
    constructor(production) {
        this._production = production;
        this._adjustments = [];
    }

    get production() { return this._production; }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}

// TOBE
// Step 1 변수 쪼개기
class ProductionPlan {
    constructor(production) {
        this._initialProduction = production;
        this._productionAccumulator = 0;
        this._adjustments = [];
    }

    get production() { 
        return this._initialProduction + this._productionAccumulator;
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}

// Step 2 assertion 추가
class ProductionPlan {
    constructor(production) {
        this._initialProduction = production;
        this._productionAccumulator = 0;
        this._adjustments = [];
    }

    get production() { 
        assert(this._productionAccumulator === this.calculatedProductionAccumulator);
        return this._initialProduction + this._productionAccumulator;
    }

    get calculatedProductionAccumulator() {
        return this._adjustments
        .reduce((sum, a) => sum + a.amount, 0);
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}