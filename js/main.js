const storage = window.localStorage;
const inputs = document.querySelectorAll("[contenteditable]");

inputs.forEach((element) => {
    restoreDefaultValueInElement(element);

    element.addEventListener("input", elementEventOnInput);
});

function restoreDefaultValueInElement(element) {
    const element_id = element.id;
    const element_value = storage.getItem(element_id);

    if (element_value !== null) {
        element.innerText = element_value;
    }
}

function elementEventOnInput(event) {
    const target_element_id = event.target.id;

    storage.setItem(target_element_id, event.target.innerText)
}
