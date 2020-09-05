import $ from "jQuery";
import {generateForm, headerComponent} from "./generateHTMLComponents";

export let init = () => {
    console.log("Called from init");
    renderIndexPage();
}

let renderIndexPage = () => { //function renderIndexPage

    $("#root").html(`
    ${generateContainer()}
    `);
}

let generateContainer = () => {
    return `
    ${headerComponent()}
    <div class="container">
    <h5>Start your weekly planner</h5>
    <br>
    ${generateForm()}
    </div>`;
}


