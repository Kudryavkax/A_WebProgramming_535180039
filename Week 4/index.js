var items = [];

var info = document.getElementById("info");
var shownItems = document.getElementById("shownitem");

function clearInfo() {
    info.innerHTML = "";
    info.className = "";
}

function addItem() {
    clearInfo();

    var item = document.getElementById("item").value;

    if (item.length >= 5){
        info.innerHTML = "You have reach maximum possible item";
        info.className = "warning";
    }else if (item.length == 0){
        info.innerHTML = "item cannot be empty";
        info.className = "warning";
    }else {
        items.push(item);
        info.innerHTML = "Success";
        info.className = "success";
    }


}

function showItems(){
    shownItems.innerHTML = "";
    for (item of items){
        shownItems.innerHTML = shownItems.innerHTML + item + "<br>";
    }
}