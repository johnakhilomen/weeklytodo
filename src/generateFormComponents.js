
export let generateTextField = (label, id) => {
    return `<label for="${id}">${label}</label>
    <input type="text" id="${id}" class="formInput">`
}

export let generateTextArea = (label, id, cols, rows) => {
    return `<label for="${id}">${label}</label><br>
    <textarea cols="${cols}" rows="${rows}"></textarea>`
}