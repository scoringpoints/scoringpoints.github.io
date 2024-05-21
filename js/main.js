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

function removePlayer(element) {
    console.log(element);
}

function addPlayer(element) {
    const parent_element = element.parentElement;
    const parent_index = parent_element.dataset.index;

    const parent_thead = element.parentNode;
    // parent_thead.querySelectorAll(`tr[data-index=""]`)

    const parent_table = parent_thead.parentNode;

    // parent_table.querySelector('')


}

// function addElement(main_element) {
//     const new_element = main_element.cloneNode(true);
//     const parent_element = main_element.parentElement;

//     parent_element.insertBefore(new_element, main_element);
// }

function showHidePlayerSettings(element) {
    const player_settings = document.querySelectorAll(".player-settings");

    player_settings.forEach((player_setting) => {
        if (element.checked) {
            player_setting.removeAttribute("hidden");
        } else {
            player_setting.setAttribute("hidden", "");
        }
    });
}
