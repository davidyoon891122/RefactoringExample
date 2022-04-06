// ASIS
if (this.discountRate)
{
    base = base - (this.discountRate * base)
}
// TOBE
assert(this.discountRate >= 0);
if (this.discountRate)
{
    base = base - (this.discountRate * base)
}

// 예시 1
class Customer {
    applyDiscount(aNumber) {
        return (this.discountRate)
        ? aNumber - (this.discountRate * aNumber)
        : aNumber;
    }
}
// Step 1 3항 표현식에는 어서션을 넣을 장소가 적당치 않으니, 먼저 if-then 문장으로 재구성
class Customer {
    applyDiscount(aNumber) {
        if (!this.discountRate) return aNumber;
        else return aNumber - (this.discountRate * aNumber);
    }
}

// Step 2 어서션 추가
class Customer {
    applyDiscount(aNumber) {
        if (!this.discountRate) return aNumber;
        else {
            assert(this.discountRate >= 0); // 양수만 허용
            return aNumber - (this.discountRate * aNumber);
        }
    }
}

// Step 3 서드 파티로 어서션 이동, 어서션이 applyDiscount()에서 실패한다면 이 문제가 언제 처음 발생했는지를 찾는 문제를 다시 풀어야 하기 때문
class Customer {
    set discountRate(aNumber) {
        assert(null === aNumber || aNumber >=0);
        this._discountRate = aNumber;
    }
}
// 어서션을 남발하는 것은 위험하다. 반드시 참이어야 하는 것만 어서션을 사용해 검사하자