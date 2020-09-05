import {generateTextField, generateTextArea} from "./generateFormComponents";

/**
 * This will generate the page header
 */
export let headerComponent = () => {
    return "<h1>Header</<h1>";
}

/**
 * This will generate the planner HTML form
 */
export let generateForm = () => {
    let titleTextField = generateTextField("Title", "title");
    let taskTextField = generateTextField("Task", "task");
    let noteTextArea = generateTextArea("Note", "note", "30", "10")
    let form = `<form>
                ${titleTextField}
                ${taskTextField}
                ${noteTextArea}
                </form>`;
    return form;
}