// @TODO: YOUR CODE HERE!
let width = parseInt(d3.select("#scatter"))
let height = width;
let margin  = 40;

let svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "chart");

let dotRadius;
function getDot() {
    if (width <= 530) {
        dotRadius = 5;
    }
    else {
        dotRadius = 10;
    }
}
getDot();