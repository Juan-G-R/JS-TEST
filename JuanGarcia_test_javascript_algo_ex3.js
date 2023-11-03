
let tableToCheck = readTable(); //Get the table 

function checkLine() { //Check line by line for errors

    for (let line of tableToCheck) {

        if (verify_numbers(line) !== true) { //Verify the numbers each line
            drawError("Line " + (tableToCheck.indexOf(line) + 1) + " error", line);
        }

    }
}

function checkColumn() { //Check column by column for erros

    for (let i in tableToCheck) {

        let columnToCheck = new Array();

        for (let line of tableToCheck) { //Store the colum in one array
            columnToCheck.push(line[i * 1])
        }

        if (verify_numbers(columnToCheck) !== true) {//Check numbers in every colum
            drawError("Column " + (parseInt(i) + 1) + " error", columnToCheck);
        }
    }

}

function checkRegion() { //Check regions for errors


    for (let m = 0; m <= 6; m += 3) { //Row multiplicator

        for (let i = 0; i <= 6; i += 3) { //Colum shifter

            let regionToCheck = new Array(0); //Create de array to check.

            for (let x = 1; x <= 3; x++) { //Row shifer

                //Take the corresponding rows of the table and sliced the correspoding part of the table.
                regionToCheck = regionToCheck.concat(tableToCheck[(x + m) - 1].slice(i, i + 3));
            }

            if (verify_numbers(regionToCheck) !== true) {
                drawError("Region " + ((m + (i / 3)) + 1) + " error", regionToCheck)
            }

        }
    }

}



function drawError(title, error) { //Display a table with the error and a title

    document.getElementById("correctMessage").innerText = "";

    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    let rowTable = document.createElement("tr");

    let cellTable = document.createElement("td"); //Insert the title
    cellTable.appendChild(document.createTextNode(title));
    rowTable.appendChild(cellTable);

    for (const cell of error) { //Populate the table
        let cellTable = document.createElement("td");
        cellTable.appendChild(document.createTextNode(cell));
        rowTable.appendChild(cellTable);
    }
    tableBody.appendChild(rowTable);

    table.appendChild(tableBody);
    document.getElementById("errorContainer").appendChild(table);

}
