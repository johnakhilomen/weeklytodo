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
    ${generateForm()}
    </div>`;
}

let getNumberOfDays = (month, year) => {
    return new Date(year, month, 0).getDate(); 
}
 
let createCalendar = () => {
    //Jan starts from 0 and December ends at 11 for months
var firstDay = new Date(2020, 0, 1);
var lastDay = new Date(2020, 0 + 1, 0);

    let table = `
    <table>
    
    </table>`
}

let tableRow = () => {
    let trow = `<tr>
    
    </tr>`
}