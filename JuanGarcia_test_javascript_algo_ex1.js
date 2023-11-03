
function readTable() { //Convert table from string array to 2 dimesion array

    let table_converted = new Array(9);

    for (let i = 0; i < array_number.length; i++) {
        table_converted[i] = array_number[i].split(" ");
    }

    return table_converted;
}

function drawTable() { //Display de table from the array

    let table_converted = readTable();

    let table = document.createElement("table"); //Create table
    let tableBody = document.createElement("tbody");

    for (const row of table_converted) { //Populate table
        let rowTable = document.createElement("tr");

        for (const cell of row) {
            let cellTable = document.createElement("td");
            cellTable.appendChild(document.createTextNode(cell));
            rowTable.appendChild(cellTable);
        }
        tableBody.appendChild(rowTable);

    }

    table.appendChild(tableBody);   //Append the talbe
    document.getElementById("tableContainer").appendChild(table);
}


