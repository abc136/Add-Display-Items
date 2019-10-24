// JavaScript Document
var selectedRow = null

function onFormSubmit() {
    //if (Titlevalidate()) {
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}   
        resetForm();
  //  }
}

function readFormData() {
    var formData = {};
    formData["Title"] = document.getElementById("Title").value;
    formData["Description"] = document.getElementById("Description").value;
    formData["output"] = document.getElementById("output");
    formData["Quantity"] = document.getElementById("Quantity").value;
    return formData;
}

function insertNewRecord(data) {
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
    selectedRow = null;
}


//function Titlevalidate() {
//    isValid = true;
//    if (document.getElementById("Title").value == "") {
//        isValid = false;
//        document.getElementById("TitleValidationError").classList.remove("hide");
//    } else {
//        isValid = true;
//        if (!document.getElementById("TitleValidationError").classList.contains("hide"))
//            document.getElementById("TitleValidationError").classList.add("hide");
//    }
//    return isValid;
//}







