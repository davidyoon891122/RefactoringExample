// ASIS
emitPhotoData(outStream, person.photo);

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

// TOBE

emitPhotoData(outStream, person.photo);
outStream.write(`<p>위치: ${photo.location}</p>\n`)

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
}

// 예시
// 호출자가 둘뿐인 단순한 상황
// ASIS
// 이 코드를 수정하여 renderPerson()은 그대로 둔 채 listRecentPhotos()가 위치 정보 location를 다르게 렌더링하도록 만들어야 한다.
// renderPerson()의 마지막 줄을 잘라내어 두 호출 코드 아래에 붙여 넣으면 끝이다, 하지만 더 안전한 길로 가본다.
function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
    photos.filter(p => p.date > recentDateCutoff())
    .forEach(p => {
        outStream.write("<div>\n")
        emitPhotoData(outStream, p);
        outStream.write("</div>\n");
    });
}

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
    outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

// Step 1 emitPhotoData()에 남길 코드를 함수로 추출한다.
function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
    photos.filter(p => p.date > recentDateCutoff())
    .forEach(p => {
        outStream.write("<div>\n")
        emitPhotoData(outStream, p);
        outStream.write("</div>\n");
    });
}

function emitPhotoData(outStream, photo) {
    zztmp(outStream, photo); // 임시 함수 호출
    outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

function zztmp(outStream, photo) { // 임시 함수 생성, 이동하지 않을 코드
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}

// Step2 피호출 함수를 호출자들로 한 번에 하나씩 인라인한다.
function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    zztmp(outStream, photo); // emitPhotoData에서 변경
    outStream.write(`<p>위치: ${photo.location}</p>\n`); // emitPhotoData에서 변경
}

function listRecentPhotos(outStream, photos) {
    photos.filter(p => p.date > recentDateCutoff())
    .forEach(p => {
        outStream.write("<div>\n")
        zztmp(outStream, p); // emitPhotoData에서 변경
        outStream.write(`<p>위치: ${p.location}</p>\n`); // emitPhotoData에서 변경
        outStream.write("</div>\n");
    });
}

function emitPhotoData(outStream, photo) {
    zztmp(outStream, photo); // 임시 함수 호출
    outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

function zztmp(outStream, photo) { // 임시 함수 생성, 이동하지 않을 코드
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}

// Step3 원래 함수를 지워 인라인하기 마무리
function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    zztmp(outStream, photo); // emitPhotoData에서 변경
    outStream.write(`<p>위치: ${photo.location}</p>\n`); // emitPhotoData에서 변경
}

function listRecentPhotos(outStream, photos) {
    photos.filter(p => p.date > recentDateCutoff())
    .forEach(p => {
        outStream.write("<div>\n")
        zztmp(outStream, p); // emitPhotoData에서 변경
        outStream.write(`<p>위치: ${p.location}</p>\n`); // emitPhotoData에서 변경
        outStream.write("</div>\n");
    });
}

function zztmp(outStream, photo) { // 임시 함수 생성, 이동하지 않을 코드
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}

// Step 4 zztmp()의 이름을 원래 함수의 이름으로 되돌린다.
function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, photo); // 원래 함수 이름으로 되돌림
    outStream.write(`<p>위치: ${photo.location}</p>\n`); 
}

function listRecentPhotos(outStream, photos) {
    photos.filter(p => p.date > recentDateCutoff())
    .forEach(p => {
        outStream.write("<div>\n")
        emitPhotoData(outStream, p); // 원래 함수 이름으로 되돌림
        outStream.write(`<p>위치: ${p.location}</p>\n`); 
        outStream.write("</div>\n");
    });
}

function emitPhotoData(outStream, photo) { // 원래 함수 이름으로 되돌림
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}