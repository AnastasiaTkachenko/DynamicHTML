
const vat = 

   {REGULAR_TYPE : 0.21,
   LOWER_TYPE : 0.04,
   EXEMPT_TYPE : 0
   }

const products = [
   {
     description: "Goma de borrar",
     price: 0.25,
     tax: 'LOWER_TYPE',
     stock: 2,
     units: 0,
   },
   {
     description: "Lápiz H2",
     price: 0.4,
     tax: 'LOWER_TYPE',
     stock: 5,
     units: 0,
   },
   {
     description: "Cinta rotular",
     price: 9.3,
     tax: 'REGULAR_TYPE',
     stock: 2,
     units: 0,
   },
   {
     description: "Papelera plástico",
     price: 2.75,
     tax: 'REGULAR_TYPE',
     stock: 5,
     units: 0,
   },
   {
     description: "Escuadra",
     price: 8.4,
     tax: 'REGULAR_TYPE',
     stock: 3,
     units: 0,
   },
   {
     description: "Pizarra blanca",
     price: 5.95,
     tax: 'REGULAR_TYPE',
     stock: 2,
     units: 0,
   },
   {
     description: "Afilador",
     price: 1.2,
     tax: 'LOWER_TYPE',
     stock: 10,
     units: 0,
   },
   {
     description: "Libro ABC",
     price: 19,
     tax: 'EXEMPT_TYPE',
     stock: 2,
     units: 0,
   },

 ];

var productsList = document.getElementsByClassName('products')[0]

for (let i = 0; i < products.length; i++) {
   
   var productRow = document.createElement('div'); 
   productRow.className = 'productRow'; 
   
   var productNumber = document.createElement('span'); 
   productNumber.className = 'productNumber'; 
   
   var productName = document.createElement('span'); 
   productName.className = 'productName'; 
   
   var productQuantity = document.createElement('input'); 
   productQuantity.setAttribute('type',"number"); 
   productQuantity.className = 'productQuantity'; 
   productQuantity.setAttribute('min','0'); 
   productQuantity.setAttribute('max', products[i].stock); 
   productNumber.textContent = i+1;
   
   
   productName.textContent = products[i].description + ' ' + products[i].price; 
   productRow.append(productNumber);
   productRow.append(productName);
   productRow.append(productQuantity); 

   productsList.appendChild(productRow);
   
}

var total = () => {
 debugger;
  var sum = 0; 
  var tax = 0; 
  var inputs = document.getElementsByClassName('productQuantity'); 
  for (let i =0; i < products.length; i++ ) {
    if (inputs[i].value) {
    sum += inputs[i].value * products[i].price; 
    tax += inputs[i].value * products[i].price * vat[products[i].tax]; 
    } 
     
  }
  document.getElementById('subtotal').textContent = sum; 
  document.getElementById('vat').textContent = tax; 
  document.getElementById('total').textContent = sum + tax; 
}

document.getElementsByClassName('calculate')[0].addEventListener('click', total); 
