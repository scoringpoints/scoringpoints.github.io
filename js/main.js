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
    console.log(element);
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
