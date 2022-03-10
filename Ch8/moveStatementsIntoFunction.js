// ASIS
result.push(`<p>제목: ${person.photo.title}</p>`);
result.concat(photoData(person.photo));

function photoData(aPhoto) {
    return [
        `<p>위치: ${aPhoto.location}</p>`,
        `<p>날짜: ${aphoto.toDateString()}</p>`,
    ];
}

// TOBE

result.concat(photoData(person.photo));

function photoData(aPhoto) {
    return [
        `<p>제목: ${aPhoto.title}</p>`,
        `<p>위치: ${aPhoto.location}</p>`,
        `<p>날짜: ${aphoto.toDateString()}</p>`,
    ]
}

// 예시 
// 사진 관련 데이터를 HTML로 내보내는 코드
// 총 두 곳에서 emitPhotoDate()를 호출하며 바로 앞에는 제목 출력 코드가 나온다.
function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(`<p>제목: ${person.photo.title}</p>`); // 제목 출력
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}

function photoDiv(p) {
    return [
        "<div>",
        `<p>제목: ${p.title}</p>`, // 제목 출력
        emitPhotoData(p),
        "</div>",
    ].join("\n");
}

function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>위치: ${aPhoto.location}</p>`);
    result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
    return result.join("\n");
}
// Step 1 제목을 출력하는 코드를 emitPhotoData()안으로 옮겨 중복을 제거하자
function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(`<p>제목: ${person.photo.title}</p>`); // 제목 출력
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}

function photoDiv(p) {
    return [
        "<div>",
        zznew(p), // 새로운 함수로 호출
        "</div>",
    ].join("\n");
}

function zznew(p) { // 새로운 함수 생성
    return [
        `<p>제목: ${person.photo.title}</p>`,
        emitPhotoData(p),
    ].join("\n");
}

function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>위치: ${aPhoto.location}</p>`);
    result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
    return result.join("\n");
}

// Step 2 다른 호출자들 renderPerson도 수정
function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(zznew(person.photo))
    return result.join("\n");
}

// Step 3 emitPhotoData() 함수를 인라인한다.
function zznew(p) { // 새로운 함수 생성
    return [
        `<p>제목: ${person.photo.title}</p>`,
        `<p>위치: ${aPhoto.location}</p>`,
        `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
    ].join("\n");
}

// Step 4 함수 이름을 바꾸어 마무리 한다

function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo))
    return result.join("\n");
}


function photoDiv(p) {
    return [
        "<div>",
        emitPhotoData(p), // 새로운 함수로 호출
        "</div>",
    ].join("\n");
}

function emitPhotoData(p) { // 새로운 함수 생성
    return [
        `<p>제목: ${person.photo.title}</p>`,
        `<p>위치: ${aPhoto.location}</p>`,
        `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
    ].join("\n");
}