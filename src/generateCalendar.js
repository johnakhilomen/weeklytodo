import $ from "jquery";

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const selectedYear = $("#year").val();
const selectedMonth = $("#month").val();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthAndYear = $("#monthAndYear").val();

export let showCalendar = () => {
    return `${months[currentMonth]} ${currentYear}`;
};

export let daysInMonth = (iMonth, iYear) =>{
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

export let getFirstDay = (year, month) => {
    return (new Date(year, month)).getDay();
}

export let formatCalendar = (tbody) => 
{
    const today = new Date();
    let firstDay = getFirstDay(2020, 8);
    let month = currentMonth;
    let year = currentYear;
    let cell;
    let cellText;
     // creating all cells
   let date = 1;
   for (let i = 0; i < 6; i++) {
       // creates a table row
       let row = document.createElement("tr");

       //creating individual cells, filing them up with data.
       for (let j = 0; j < 7; j++) {
           if (i === 0 && j < firstDay) {
               cell = document.createElement("td");
               cellText = document.createTextNode("");
               cell.appendChild(cellText);
               row.appendChild(cell);
            }
           else if (date > daysInMonth(month, year)) {
               break;
           }

           else {
               cell = document.createElement("td");
               cellText = document.createTextNode(date);
               if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                   cell.classList.add("bg-info");
               } // color today's date
               cell.appendChild(cellText);
               row.appendChild(cell);
               date++;
           }


       }

       $(`#calendarBody`).append(row); 

    }


}

