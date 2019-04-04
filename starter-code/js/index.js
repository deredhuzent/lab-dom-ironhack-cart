

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {


}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
//truco createNewItemRow -checar ahí-
}

function createNewItemRow(itemName, itemUnitPrice){
  let productContent = '<div class="product">'+
`<div><span>${itemName}</span></div>`+
`<div><span>${itemUnitPrice}</span></div>`+
'<div class="quantity"><label>QTY</label><input type="number"></div>'+
'<div><span class="total">$0.00</span></div>'+
'<div><button type="button" name="btnDelete" class="btn btn-delete">Delete</button></div></div>';
  let pList = document.getElementById('productsList');
  pList.innerHTML += productContent;
  debugger
}

function createNewItem(){
  let newItemName = document.getElementById('productName');
  let newItemPrice = document.getElementById('productPrice');
  
  createNewItemRow(newItemName.value, newItemPrice.value); 
//value contiene lo que escribe dentro de los labels y le pasa los contenidos a JS
}

window.onload = function(){
  let product = document.getElementsByClassName('product');
  
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');
  //debugger --> detiene la ejecución del script en este punto, como un break point

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
