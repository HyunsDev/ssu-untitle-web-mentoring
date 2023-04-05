// 꼭 엘리먼트 변수명을 $로 시작하지 않아도 됩니다. 저는 자바스크립트 변수와 엘리먼트를 구분하기 위해 $를 붙였습니다.
const $button = document.querySelector("#btn");

// 아래 함수의 두 번째 인자는 (화살표 함수)라는 의미입니다. 화살표 함수는 function 키워드를 생략하고 () => {}로 표현할 수 있습니다.
// 참고 링크: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
$button.addEventListener("click", () => {
    console.log("버튼을 클릭했어요!");
    document.querySelector("#text").innerHTML = "버튼을 클릭했어요!";
});
