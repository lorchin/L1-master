var AddItem_1 = document.getElementById('add_item_1');
var DelItem_1 = document.getElementById('del_item_1');
var RemoveItem_1 = document.getElementById('remove_1')


var inputField_1 = document.getElementById('count_item_1');
var priceField_1 = document.getElementById('price_item_1');


AddItem_1.addEventListener("click", addItem_1);
DelItem_1.addEventListener("click", deleteItem_1);
RemoveItem_1.addEventListener('click', removeItem_1)



function addItem_1() {
	event.preventDefault();
	element_1.quantity += 1,

	element_1.sum = element_1.quantity * element_1.price;

	inputField_1.value = element_1.quantity;
	priceField_1.innerHTML = element_1.sum;
}


function deleteItem_1() {
	event.preventDefault();

if (element_1.quantity > 0) {
	element_1.quantity -= 1;
	inputField_1.value = element_1.quantity;
	element_1.sum = element_1.sum - element_1.price;
	priceField_1.innerHTML = element_1.sum;
};
}

function removeItem_1() {
	event.preventDefault();
	item_1.classList.toggle('hide');
	console.log('hide');
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



var AddItem_2 = document.getElementById('add_item_2');
var DelItem_2 = document.getElementById('del_item_2');
var RemoveItem_2 = document.getElementById('remove_2')


var inputField_2 = document.getElementById('count_item_2');
var priceField_2 = document.getElementById('price_item_2');


AddItem_2.addEventListener("click", addItem_2);
DelItem_2.addEventListener("click", deleteItem_2);
RemoveItem_2.addEventListener('click', removeItem_2)



function addItem_2() {
	event.preventDefault();
	element_2.quantity += 1,

	element_2.sum = element_2.quantity * element_2.price;

	inputField_2.value = element_2.quantity;
	priceField_2.innerHTML = element_2.sum;
}


function deleteItem_2() {
	event.preventDefault();

if (element_2.quantity > 0) {
	element_2.quantity -= 1;
	inputField_2.value = element_2.quantity;
	element_2.sum = element_2.sum - element_2.price;
	priceField_2.innerHTML = element_2.sum;
};
}

function removeItem_2() {
	event.preventDefault();
	item_2.classList.toggle('hide');
	console.log('hide');
}

var AddItem_3 = document.getElementById('add_item_3');
var DelItem_3 = document.getElementById('del_item_3');
var RemoveItem_3 = document.getElementById('remove_3')
var inputField_3 = document.getElementById('count_item_3');
var priceField_3 = document.getElementById('price_item_3');


AddItem_3.addEventListener("click", addItem_3);
DelItem_3.addEventListener("click", deleteItem_3);
RemoveItem_3.addEventListener('click', removeItem_3)



function addItem_3() {
	event.preventDefault();
	element_3.quantity += 1,

	element_3.sum = element_3.quantity * element_3.price;

	inputField_3.value = element_3.quantity;
	priceField_3.innerHTML = element_3.sum;
}


function deleteItem_3() {
	event.preventDefault();

if (element_3.quantity > 0) {
	element_3.quantity -= 1;
	inputField_3.value = element_3.quantity;
	element_3.sum = element_3.sum - element_3.price;
	priceField_3.innerHTML = element_3.sum;
};
}

function removeItem_3() {
	event.preventDefault();
	item_3.classList.toggle('hide');
	console.log('hide');
}


var total = getElementById('total_cart');
 total = element_1.sum + element_2.sum + element_3.sum;
