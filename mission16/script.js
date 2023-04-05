const $input = document.querySelector("#input");

// 처음 로딩했을 때, localStorage에 저장된 데이터가 있으면 불러오기
const text = localStorage.getItem("data");
$input.value = text;

// textarea에 입력된 값 삭제하기
const $delete = document.querySelector("#delete");
$delete.addEventListener("click", () => {
    $input.value = "";
});

// textarea에 입력된 값을 localStorage에 저장하기
const $saveBtn = document.querySelector("#save");
$saveBtn.addEventListener("click", () => {
    const text = $input.value;
    localStorage.setItem("data", text);
});

// localStorage에 저장된 값을 textarea에 불러오기
const $loadBtn = document.querySelector("#load");
$loadBtn.addEventListener("click", () => {
    const text = localStorage.getItem("data");
    $input.value = text;
});
