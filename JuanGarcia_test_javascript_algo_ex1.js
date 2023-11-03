var to_verify = new Array(9); //Test table
to_verify[0] = "4 2 7 3 5 1 9 8 6";
to_verify[1] = "9 8 3 7 6 6 5 1 4";
to_verify[2] = "1 5 6 8 9 4 7 2 3";
to_verify[3] = "2 3 9 1 8 5 4 6 7";
to_verify[4] = "7 4 6 6 3 9 2 5 8";
to_verify[5] = "5 6 8 2 4 7 1 3 9";
to_verify[6] = "8 7 2 9 1 3 6 4 5";
to_verify[7] = "3 9 5 4 2 6 8 7 1";
to_verify[8] = "6 1 4 5 7 8 3 9 6";


function readTable() { //Convert table from string array to 2 dimesion array

    let table_converted = new Array(9);

    for (let i = 0; i < to_verify.length; i++) {
        table_converted[i] = to_verify[i].split(" ");
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


