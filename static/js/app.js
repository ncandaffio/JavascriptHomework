// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('#ufo-table').select('tbody');
var button = d3.select("#filter-btn")

// //Loop and add the rows
function populateTable(data){
    tbody.selectAll("tr").remove();
    data.forEach(sighting => {
        var row = tbody.append('tr')
        //Loop and populate cells
        Object.values(sighting).forEach(value => {
            row.append('td').text(value);
        })
    })
};

function init(){
    populateTable(tableData);
}

function filtertable(event){
    console.log("filtering...")
    var filterTerm = d3.select('#selector').node().value
    console.log(filterTerm)
    d3.event.preventDefault();
    var dateFilter = d3.select('#filter').node().value;
    console.log(dateFilter)

    if (dateFilter === ""){populateTable(tableData);}

    else {
        var filteredData = []
        if (filterTerm === 'datetime') {
            filteredData = tableData.filter(sighting => sighting.datetime === dateFilter);
        }
        else if (filterTerm === 'city') {
            filteredData = tableData.filter(sighting => sighting.city === dateFilter);            
        }
        else if (filterTerm === 'state') {
            filteredData = tableData.filter(sighting => sighting.state === dateFilter);            
        }
        else if (filterTerm === 'country') {
            filteredData = tableData.filter(sighting => sighting.country === dateFilter);            
        }
        else {
            filteredData = tableData.filter(sighting => sighting.shape === dateFilter);            
        }

        populateTable(filteredData);
    }
};

button.on("click", filtertable)

init();