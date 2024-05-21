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
    console.log(self)
    // const table = document.querySelector(`table[data-table="${table_index}"]`);
    // table.querySelectorAll(`[data-col="${col_index}"]`).forEach((element) => element.remove());
}

function addPlayer(table_index, col_index) {
    // const table = document.querySelector(`table[data-table="${table_index}"]`);
    // table.querySelectorAll(`[data-col="${col_index}"]`).forEach((element) => {
    //     const new_element = element.cloneNode(true);
    //     const parent_element = element.parentElement;
    
    //     parent_element.insertBefore(new_element, element);
    // });
}

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
