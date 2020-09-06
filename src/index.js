import $ from "jQuery";
import {generateForm, headerComponent, generateCalendarComponent} from "./generateHTMLComponents";
import {daysInMonth, getFirstDay, formatCalendar} from "./generateCalendar";

export let init = () => {
    console.log("Called from init");
    renderIndexPage();
    formatCalendar("calendarBody");

}

let renderIndexPage = () => { //function renderIndexPage
    $("#root").html(`
    ${generateContainer()}
    `);
}

let generateContainer = () => {
    return `
    ${headerComponent()}
    ${generateCalendarComponent()}
    <div class="container">
    <h5>Start your weekly planner</h5>
    ${generateForm()}
    </div>`;
}

