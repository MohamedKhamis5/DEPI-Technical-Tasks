var numberOfPersons;
do {
    numberOfPersons = prompt("Enter Number of Persons : ");
    if (isNaN(numberOfPersons) ||numberOfPersons <= 0) {
        alert("Please Enter a Valid Number");
    }
} while (isNaN(numberOfPersons) ||numberOfPersons  <= 0);
numberOfPersons = parseInt(numberOfPersons);
for (var i = 0; i < numberOfPersons; i++) {
    var namme;
    do {
        namme = prompt("Enter person " + (i + 1) + " name:");
        if (namme === null ||namme.length < 3 ||namme.length >= 10) {
            alert("Name must be more than 2 and less than 10 characters");
        }
    } while (namme === null ||namme.length < 3 ||namme.length >= 10);
    var age;
    do {
        age = prompt("Enter person " + (i + 1) + " age:");
        if (isNaN(age) ||parseInt(age) <= 10 ||parseInt(age) >= 60) {
            alert("Age must be greater than 10 and less than 60.");
        }
    } while (isNaN(age) ||parseInt(age) <= 10 ||parseInt(age) >= 60);
    age = parseInt(age);
    table=document.getElementsByTagName("table")[0];
    newr=document.createElement("tr");
    newr.innerHTML=(`<td>${namme}</td><td>${age}</td>`);
    table.appendChild(newr);
}

