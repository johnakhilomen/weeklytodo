import $ from "jQuery";

export let init = () => {
    console.log("Called from init");
    renderIndexPage();
}

let renderIndexPage = () => { //function renderIndexPage
    $("#root").html("Hi there");
}