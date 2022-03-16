// ASIS
const pricingPlan = retrievePricingPlan();
const order = retrieveOrder();
let charge;
const chargePerUnit = pricingPlan.unit;

// TOBE
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
let charge;

// 예시
// ASIS
// 처음 7 까지의 줄은 선언이므로 이동하기가 상대적으로 쉽다.
const pricingPlan = retrievePricingPlan();                                      // 1
const order = retreiveOrder();                                                  // 2
const baseCharge = pricingPlan.base;                                            // 3
let charge;                                                                     // 4
const chargePerUnit = pricingPlan.unit;                                         // 5
const units = order.units;                                                      // 6
let discont;                                                                    // 7
charge = baseCharge + units * chargePerUnit;                                    // 8
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);     // 9
discont = discountableUnits * pricingPlan.discountFactor;                       // 10
if (order.isRepeat) discount += 20;                                             // 11
charge = charge - discount;                                                     // 12
chargeOrder(charge);                                                            // 13

// Step 1 let discount 옮기기
// 선언은 부수효과가 없고 다른 변수를 참조하지도 않으므로 discount 자신을 차조하는 첫 번쨰 코드 바로 앞까지는 어디로든 옮겨도 안전하다.

const pricingPlan = retrievePricingPlan();                                      // 1
const order = retreiveOrder();                                                  // 2
const baseCharge = pricingPlan.base;                                            // 3
let charge;                                                                     // 4
const chargePerUnit = pricingPlan.unit;                                         // 5
const units = order.units;                                                      // 6
charge = baseCharge + units * chargePerUnit;                                    // 8
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);     // 9
let discont;                                                                    // 7  discount 이동
discont = discountableUnits * pricingPlan.discountFactor;                       // 10
if (order.isRepeat) discount += 20;                                             // 11
charge = charge - discount;                                                     // 12
chargeOrder(charge);                                                            // 13

// Step 2 부수효과가 없는 다른코드에도 비슷한 분석을 수행하면 2번 줄도 6번 줄 바로 위까지 옮겨도 된다.
const pricingPlan = retrievePricingPlan();                                      // 1
const baseCharge = pricingPlan.base;                                            // 3
let charge;                                                                     // 4
const chargePerUnit = pricingPlan.unit;                                         // 5
const order = retreiveOrder();                                                  // 2 order 선언부 이동
const units = order.units;                                                      // 6
charge = baseCharge + units * chargePerUnit;                                    // 8
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);     // 9
let discont;                                                                    // 7  discount 이동
discont = discountableUnits * pricingPlan.discountFactor;                       // 10
if (order.isRepeat) discount += 20;                                             // 11
charge = charge - discount;                                                     // 12
chargeOrder(charge);                                                            // 13

/*
// 명령-질의 분리 원칙(Command-Query Separation)을 지키면 값을 반환하는 함수는 모두 부수효과가 없음을 알 수 있다.
// 명령-질의 분리 원칙 이란?
// 함수는 호출할 떄 본의 아니게 발생한 외부 효과로 예상치 못한 결과가 나오는 일을 방지하는 데 기초가 되는 원칙이다.
// 함수는 그 성격에 따라 크게 두 가지로 분류할 수 있다.
// 하나는 어떤 동작을 수행하는 명령(Command)이고, 다른 하나는 답을 구하는 질의(Query)다.
// 이러한 두 역할은 한데 섞으면 안된다.
// 명령-질의 분리 원칙 예시
function getFirstName() {
    var firstName = document.querySelector("#firstName").value;
    firstName = firstName.toLowerCase();
    setCookie("firstName", firstName);
    if (firstName === null) {
        return "";
    }
    return firstName;
}
 
var activeFirstName = getFirstName();
// getFirstName 함수 이름은 질문에 답하는 질의형 함수 같지만, 정작 실제로 하는 일은 명령형 함수처럼 데이터의 상태를 변환하고 있다.
// 함수 이름에 명확히 드러나지 않은 외부 효과에 해당한다.
// 더 심각한 부분은 소문자로 변환한 이름을 사용자에게 묻지도 않고 쿠키로 설정하는 것인데, 자칫하면 기존에 사용하던 다른 값을 덮어 쓸 위험이 있다.
// 질의형 함수는 절대로 데이터를 덮어쓰는 작업을 수행해선 안 된다.
// 참고 https://webactually.com/2018/02/06/%EB%AA%85%ED%99%95%ED%95%9C-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EB%B2%95/
*/

// 다시 리팩터링으로 돌아와 부수효과가 있는 코드를 슬라이드하거나 부수효과가 있는 코드를 건너뛰어야 한다면 훨씬 신중해야 한다.
// 11번 줄을 코드 끝으로 슬라이드 하고 싶다고 가정한다
// 12번 줄 떄문에 가로막히는데, 11번 줄에서 상태를 수정한 변수 discount를 12번 줄에서 참조하기 떄문이다.
// 13번 줄도 12번 줄앞으로 이동할 수 없다.
// 13번 줄이 참조하는 변수 charge를 12번 줄에서 수정하기 떄문이다.
// Step 3 8번줄 이동
// 참조하는 줄이 없기 떄문에 12번 앞까지 이동할 수 있다.
const pricingPlan = retrievePricingPlan();                                      // 1
const baseCharge = pricingPlan.base;                                            // 3
let charge;                                                                     // 4
const chargePerUnit = pricingPlan.unit;                                         // 5
const order = retreiveOrder();                                                  // 2 order 선언부 이동
const units = order.units;                                                      // 6
charge = baseCharge + units * chargePerUnit;                                    // 8
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);     // 9
let discont;                                                                    // 7  discount 이동
discont = discountableUnits * pricingPlan.discountFactor;                       // 10
if (order.isRepeat) discount += 20;                                             // 11
charge = baseCharge + units * chargePerUnit;                                    // 8
charge = charge - discount;                                                     // 12
chargeOrder(charge);                                                            // 13
// 슬라이드할 코드 조각과 건너뛸 코드 중 어느 한쪽이 다른 쪽에서 참조하는 데이터를 수정한다면 슬라이드를 할 수 없다.
// 하지만 다음의 경우에는 예외이다.
a = a + 10;
a = a + 5;
// 슬라이드가 안전한 지를 판단하려면 관련된 연산이 무엇이고 어떻게 구성되는지를 완벽히 이해해야 한다.
// 상태 갱신에 특히나 신경 써야 하기 때문에 상태를 갱신하는 코드 자체를 최대한 제거하는 게 좋다.
// 저자라면 슬라이드를 하기 전에 charge 변수를 쪼갤것이다.
// 더 복잡한 구조에서는 간섭 여부를 확인하기 어렵기 떄문에 테스트를 활용하여 데이터가 깨지는 일이 없도로 살펴야 한다.
// 슬라이드 후 테스트가 실패했을 때 가장 좋은 대처 방법은 더 작게 슬라이드해보는 것이다.

// 예시 2 조건문이 있을 때의 슬라이드
// 조건문 밖으로 슬라이드할 때는 중복 로직이 제거될 것이고, 조건문 안으로 슬라이드할 때는 반대로 중복 로직이 추가될 것이다.
let result;
if (availableResources.length == 0) {
    result = createResource();
    allocatedResources.push(result); // 중복
} else {
    result = availableResources.pop();
    allocatedResources.push(result); // 중복
}
return result;
// Step 1 중복 된 문장들을 밖으로 슬라이드 

let result;
if (availableResources.length == 0) {
    result = createResource();
} else {
    result = availableResources.pop();
}
allocatedResources.push(result); // 슬라이드 
return result;

