let selected = '';

function changebalance(add){
    balance = document.getElementById('balance').value;
    newbalance = parseInt(balance)+parseInt(add);
    if (parseInt(newbalance)<0) {
        alert("Your balance is 0 you can't spend more money");
        document.getElementById('balance').value = '0';
        document.getElementById('balance').innerHTML = 'Balance : 0 DNT'; 
    }
    else {
        document.getElementById('balance').value = newbalance;
        document.getElementById('balance').innerHTML = 'Balance : '+newbalance+' DNT';
    }
}

function addclass(id) {
    cat = document.getElementById(id).classList;
    cat.add('animate');
}

function removeclass(id) {
    cat = document.getElementById(id).classList;
    cat.remove('animate');
}

function add() {
    balance = document.getElementById('balance').value;
    amount = prompt("Amount of money you want to add :");
    catval = document.getElementById(selected).value;
    if (isNaN(amount) || amount=='') {
        alert("Please enter a number");
    }
    else if (amount > balance) {
        alert("The amount you want to add must be lower than : "+balance);
    }
    else {
        changebalance(-amount);
        document.getElementById(selected).value = parseInt(catval)+parseInt(amount);
        showcat(selected);
    }
}

function subtract() {
    amount = prompt("Amount of money you want to subtract :");
    catval = document.getElementById(selected).value;
    if (isNaN(amount) || amount=='') {
        alert("Please enter a number");
    }
    else if (amount > catval) {
        alert("The amount you want to subtract must be lower than : "+catval)
    }
    else {
        changebalance(amount);
        document.getElementById(selected).value = parseInt(catval)-parseInt(amount);
        showcat(selected);
    }
}

function showcat(id) {
    val = document.getElementById(id).value;
    maindiv = document.getElementById('maindiv');
    maindiv.innerHTML = '<h1 class="asl">'+id+'</h1><p class="asl">For '+id+' : '+val+' DNT</p><p class="asl pmparent"><span class="pm" onclick="add()">+</span> <span class="pm" onclick="subtract()">-</span></p>'
    selected = id;
}

function addtobalance() {
    amount = prompt("Amount of money you want to add or substact from your balance :");
    if (isNaN(amount) || amount=='') {
        alert("Please enter a number");
    }
    else{
        changebalance(amount);
    }
}

function addcat() {
    catname = prompt("Name of the category you want to add");
    if (catname.length < 2) {
        alert("Category name must be at least 2 characters long");
    }
    categories_main = document.getElementById("categories_main");
    newcat = document.createElement("li");
    newcat.innerHTML = catname[0].toUpperCase()+catname.substring(1);
    newcat.id = catname;
    newcat.classList.add("categories");
    newcat.onclick = function() {
        showcat(this.id);
    }
    newcat.onmouseover = function() {
        addclass(this.id);
    }
    newcat.onmouseout = function() {
        removeclass(this.id);
    }
    newcat.value = '0';
    categories_main.appendChild(newcat);
}