import {generateTextField, generateTextArea} from "./generateFormComponents";
import {showCalendar} from "./generateCalendar";

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

export let generateCalendarComponent = (currentMonthYear) => {
    return `
    <h3>${showCalendar()}</h3>
        <table class="table table-bordered table-responsive-sm" id="calendar">
            <thead>
            <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
            </tr>
            </thead>

            <tbody id="calendarBody">

            </tbody>
        </table>
`

}