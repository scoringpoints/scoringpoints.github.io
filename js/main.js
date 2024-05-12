
// const HIDDEN_CLASS_NAME = "visually-hidden";


// function showInputOnLabelClick(element) {
//     element.classList.add(HIDDEN_CLASS_NAME);

//     const select_id = element.htmlFor;
//     const show_element = document.getElementById(select_id);

//     show_element.classList.remove(HIDDEN_CLASS_NAME);

// }

// function showLableOnInputChange(element) {
//     element.classList.add(HIDDEN_CLASS_NAME);
    
//     const element_id = element.id;
//     const show_element = document.querySelector(`[for="${element_id}"]`);

//     show_element.classList.remove(HIDDEN_CLASS_NAME);

//     const element_value = element.value;
//     if (element_value) {
//         show_element.innerHTML = element_value;
//     }
// }


// function on_change(element) {
//     console.log(element)
// }

const inputs = document.querySelectorAll("[contenteditable]");

const storage = window.localStorage;

inputs.forEach((element) => {
    element.addEventListener("input", (event) => {
        storage.setItem(event.target.id, event.target.innerText)
    });

    console.log(element.id, storage.key(element.id))

    if (storage.key(element.id) !== "undefined") {
        element.innerText = storage.getItem(element.id);
    }
});

// function updateValue(e) {
// //   log.textContent = e.target.value;
//   console.log(e.target.innerText)
// }

// function load(e) {
//     console.log(e)
// }


// document.addEventListener("DOMContentLoaded", (e) => {
//     console.log(e)
// });


// const elements = document.querySelectorAll("[id]");


// elements.addEventListener("load", (e) => {
//     console.log(e)
// });
