// JavaScript Document
var selectedRow = null

function onFormSubmit() {
        var items = readitem();
        if (selecteditem == null){
            insertNewitem(items);
		}   
        resetForm();
}

function readitem() {
    var items = {};
    items["Title"] = document.getElementById("Title").value;
    items["Description"] = document.getElementById("Description").value;
    items["output"] = document.getElementById("output");
    items["Quantity"] = document.getElementById("Quantity").value;
    return items;
}

function insertNewitem(data) {
    var table = document.getElementById("iTemsList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Description;
    cell3 = newRow.insertCell(2);
	cell3.innerHTML='<img style=width:50px;height:50px;border:0; src="'+document.getElementById("output").src+'" />';
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Quantity;
	
	
}

function resetForm() {
    document.getElementById("Title").value = "";
    document.getElementById("Description").value = "";
    document.getElementById("Quantity").value = "";
    selecteditem = null;
}

