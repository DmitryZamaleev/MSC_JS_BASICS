var wallet = prompt('How much money you have?');
var apple_cnt = prompt('How much apples did you buy');
var bread_cnt = prompt('How much bread did you buy');
var apple_price = prompt('Apple price');
var bread_price = prompt('Bread price');
var dif= wallet-apple_cnt*apple_price-bread_cnt*bread_price;
var flag = dif>0;
document.body.innerHTML='<h1>'+flag+'</h1>'