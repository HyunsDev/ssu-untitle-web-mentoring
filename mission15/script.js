const $input = document.querySelector("#input");
const $text = document.querySelector("#text");

$input.addEventListener("input", (event) => {
    console.log(event.target.value);
    text.textContent = event.target.value;

    // 만약 텍스트가 아니라 HTML을 넣고 싶다면 innerHTML을 사용하면 됩니다.
    // document.querySelector("#text").innerHTML = event.target.value;
});
