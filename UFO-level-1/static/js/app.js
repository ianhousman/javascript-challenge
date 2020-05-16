// from data.js
var tableData = data;

$('#datetime').on('keyup', function(){
    var value = $(this).val()
    console.log("Value: ", value)
    var newData = searchTable(value, tableData)
    fillTable(newData)
})

fillTable(tableData);

function searchTable(value, tableData) {
    var filteredData = []
    for (var i = 0; i <= tableData.length; i++) {
        var date = tableData[i].datetime
        if (date.includes(value)) {
            filteredData.push(tableData[i])
        }
    }
    return filteredData
}

function fillTable(tableData) {
    var table = document.getElementById('ufo-table');
    
    for (i = 0; i <= tableData.length; i++) {
        var row = `<tr>
                        <td>${tableData[i].datetime}</td>
                        <td>${tableData[i].city}</td>
                        <td>${tableData[i].state}</td>
                        <td>${tableData[i].country}</td>
                        <td>${tableData[i].shape}</td>
                        <td>${tableData[i].durationMinutes}</td>
                        <td>${tableData[i].comments}</td>
                    </tr>`
        table.innerHTML += row            
    }
}




