
const HIDDEN_CLASS_NAME = "visually-hidden";


function showInputOnLabelClick(element) {
    element.classList.add(HIDDEN_CLASS_NAME);

    const select_id = element.htmlFor;
    const show_element = document.getElementById(select_id);

    show_element.classList.remove(HIDDEN_CLASS_NAME);

}

function showLableOnInputChange(element) {
    element.classList.add(HIDDEN_CLASS_NAME);
    
    const element_id = element.id;
    const show_element = document.querySelector(`[for="${element_id}"]`);

    show_element.classList.remove(HIDDEN_CLASS_NAME);

    const element_value = element.value;
    if (element_value) {
        show_element.innerHTML = element_value;
    }
}