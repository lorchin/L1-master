var AddItem_1 = document.getElementById('add_item_1');
var DelItem_1 = document.getElementById('del_item_1');
var RemoveItem_1 = document.getElementById('remove_1')


var inputField = document.getElementById(count_item_1);
var priceField = document.getElementById('price_item_1');


AddItem_1.addEventListener("click", addItem_1);
DelItem_1.addEventListener("click", deleteItem_1);
RemoveItem_1.addEventListener('click', removeItem_1)



function addItem_1() {
	event.preventDefault();
	element_1.quantity += 1,

	element_1.sum = element_1.quantity * element_1.price;

//	inputField..... // выведи quantity
	priceField.innerHTML = element_1.sum;
}


function deleteItem_1() {
	event.preventDefault();
	element_1.quantity -= 1,
	element_1.sumMin = element_1.price / element_1.quantity;

	priceField.innerHTML = element_1.sumMin;
}


function removeItem_1() {

}




var element_1 = {
	quantity: 1,
	price: 25
}

var element_2 = {
	quantity: 1,
	price: 35
}

var element_3 = {
	quantity: 1,
	price: 15
}



// var AddItem_2 = document.getElementById('add_item_2');
// var DelItem_2 = document.getElementById('del_item_2');
// var RemoveItem_2 = document.getElementById('remove_2')


// var inputField = document.getElementById(count_item_2);
// var priceField = document.getElementById('price_item_2');


// AddItem_2.addEventListener("click", addItem_2);
// DelItem_2.addEventListener("click", deleteItem_2);
// RemoveItem_2.addEventListener('click', removeItem_2)



// function addItem_2() {
// 	event.preventDefault();
// 	element_2.quantity += 1,
// 	element_2.sum = element_2.quantity * element_2.price;

// //	inputField.value // выведи quantity
// 	priceField.innerHTML = element_2.sum;
// }


// function deleteItem_2() {
// 	event.preventDefault();
// 	element_2.quantity -= 1,
// 	element_2.sum = element_2.quantity / element_2.price;
// }


// function removeItem_2() {

// }

