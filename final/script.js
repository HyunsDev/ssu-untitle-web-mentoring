const onChange = (event) => {
    localStorage.setItem("data", event.target.value);
};

const deleteMemo = () => {
    const $textarea = document.querySelector(".textarea");
    $textarea.value = "";
    localStorage.setItem("data", "");
};

const $textarea = document.querySelector(".textarea");
$textarea.addEventListener("input", onChange);

$textarea.value = localStorage.getItem("data");

const $deleteButton = document.querySelector(".delete");
$deleteButton.addEventListener("click", deleteMemo);
