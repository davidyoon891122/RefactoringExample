// ASIS
const names = [];
for (const i of input) {
    if (i.job === "programmer")
        names.push(i.names);
}

// TOBE
const names = input
    .filter(i => i.job === "programmer")
    .map(i => i.name);

// 예시
// ASIS
function acquireData(input) {
    const lines = input.split("\n"); // 컬렉션
    let firstLine = true;
    const result = [];
    for (const line of lines) { // 반복문
        if (firstLine) {
            firstLine = false;
            continue;
        }
        if (line.trim() === "") continue;
        const record = line.split(",");
        if (record[1].trim() === "India") {
            result.push({city: record[0].trim(), phone: record[2].trim()});
        }
    }
    return result;
}
// TOBE
// Step 1 컬렉션을 가르키는 별로 변수를 새로 만든다.
function acquireData(input) {
    const lines = input.split("\n"); 
    let firstLine = true;
    const result = [];
    const loopItems = lines; // 새로 만든 변수
    for (const line of loopItems) { // 새로 만든 변수로 변경
        if (firstLine) {
            firstLine = false;
            continue;
        }
        if (line.trim() === "") continue;
        const record = line.split(",");
        if (record[1].trim() === "India") {
            result.push({city: record[0].trim(), phone: record[2].trim()});
        }
    }
    return result;
}
// Step 2 slice() 연산을 루프 변수에서 수행하고 반복문 안의 if문을 제거하자
// 이 코드의 반복문에서 첫 if문은 CSV 데이터의 첫 줄을 건너뛰는 역할이다.
// firstLine 변수도 보너스로 함께 제거
function acquireData(input) {
    const lines = input.split("\n"); 
    const result = [];
    const loopItems = lines
        .slice(1); // 슬라이스로 대체
    for (const line of loopItems) { 
            // 제거 
        if (line.trim() === "") continue;
        const record = line.split(",");
        if (record[1].trim() === "India") {
            result.push({city: record[0].trim(), phone: record[2].trim()});
        }
    }
    return result;
}

// Step 3 filter() 연산으로 trim 대체
function acquireData(input) {
    const lines = input.split("\n"); 
    const result = [];
    const loopItems = lines
        .slice(1)
        .filter(line => line.trim() != "") // trim을 filter로 대체
        ;  // 파이프라인을 사용할 때 문장 종료 세미클론(;)을 별도 줄에 적어주면 편하다.
    for (const line of loopItems) { 
        const record = line.split(",");
        if (record[1].trim() === "India") {
            result.push({city: record[0].trim(), phone: record[2].trim()});
        }
    }
    return result;
}
// Step 4 map 연상을 이용하여 문자열을 배열로 변환
function acquireData(input) {
    const lines = input.split("\n"); 
    const result = [];
    const loopItems = lines
        .slice(1)
        .filter(line => line.trim() != "")
        .map(line => line.split(",")) // map으로 배열로 변환
        ; 
    for (const line of loopItems) { 
        const record = line;
        if (record[1].trim() === "India") {
            result.push({city: record[0].trim(), phone: record[2].trim()});
        }
    }
    return result;
}
// Step 5 다시 filter 연산자로 인도에 위치한 사무실 레코드를 뽑아낸다
function acquireData(input) {
    const lines = input.split("\n"); 
    const result = [];
    const loopItems = lines
        .slice(1)
        .filter(line => line.trim() != "")
        .map(line => line.split(","))
        .filter(record => record[1].trim() === "India")
        ; 
    for (const line of loopItems) { 
        const record = line;
        result.push({city: record[0].trim(), phone: record[2].trim()});
        
    }
    return result;
}
// Step 6 map을 사용하여 결과 레코드를 생성
function acquireData(input) {
    const lines = input.split("\n"); 
    const result = [];
    const loopItems = lines
        .slice(1)
        .filter(line => line.trim() != "")
        .map(line => line.split(","))
        .filter(record => record[1].trim() === "India")
        .map(record => ({city: record[0].trim(), phone: record[2].trim()}))
        ; 
    for (const line of loopItems) { 
        const record = line;
        result.push({city: record[0].trim(), phone: record[2].trim()});
        
    }
    return result;
}
// Step 7 결과를 누적 변수에 추가
function acquireData(input) {
    const lines = input.split("\n"); 
    const result = [];
    const result = lines // 결과를 result 변수에 추가
        .slice(1)
        .filter(line => line.trim() != "")
        .map(line => line.split(","))
        .filter(record => record[1].trim() === "India")
        .map(record => ({city: record[0].trim(), phone: record[2].trim()}))
        ; 
    return result;
}

// 더 가다듬기 
// result 변수를 인사인하고, 람드(lamda) 변수 중 일부의 이름을 바꾸고, 코드를 읽기 쉽도록 레이아웃을 표 형태로 정돈한다.
function acquireData(input) {
    const lines = input.split("\n"); 
    return lines 
        .slice(1)
        .filter (line => line.trim() != "")
        .map    (line => line.split(","))
        .filter (fields => fields[1].trim() === "India")
        .map    (fileds => ({city: fileds[0].trim(), phone: fileds[2].trim()}))
        ; 
}