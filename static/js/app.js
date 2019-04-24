// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('#ufo-table').select('tbody')
console.log(Object.values(tableData[0])[0])

// //Loop and add the rows
tableData.forEach(sighting => {
    var row = tbody.append('tr')
    //Loop and populate cells
    Object.values(sighting).forEach(value => {
        row.append('td').text(value)
    })
})
