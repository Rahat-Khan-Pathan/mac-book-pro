let promoUsed = false;  //Initialize to check promo
let percent = 0;   //Value of percentage at initial

// --------------------------------------- Functions -----------------------------------
// function to set value 
function setValue(id,val) {
    document.getElementById(id).innerText = val;
}
// function to get value 
function getValue(id) {
    return document.getElementById(id).innerText;
}
// function for showing extra memory price
function showMemoryPrice(val) {
    setValue('extra-memory-price',val);
}
// function for showing extra storage price 
function showStoragePrice(val) {
    setValue('extra-storage-price',val);
}
// function for showing delivery charge 
function showDeliveryCharge(val) {
    setValue('delivery-charge-price',val);
}
// function to get total price 
function getTotalPrice()
{
    const bestPrice = parseInt(getValue('best-price'));
    const memoryPrice = parseInt(getValue('extra-memory-price'));
    const storagePrice = parseInt(getValue('extra-storage-price'));
    const deliveryCharge = parseInt(getValue('delivery-charge-price'));
    return bestPrice + memoryPrice + storagePrice + deliveryCharge;
}
// function for showing total price without promo 
function showTotalPrice() {
    const totalPrice = getTotalPrice();
    setValue('total-price',totalPrice);
}
// function for showing total price with promo 
function showTotalWithPromo() {
    if(promoUsed == true) percent = 20;
    const totalPrice = getTotalPrice();
    const coupon = (totalPrice*percent)/100;
    setValue('total-with-promo-price',totalPrice-coupon);
}
// function for giving a color to promo message 
function messageColor(color) {
    document.getElementById('coupon-alert').style.color=color;
}
// function for updating color of buttons 
function updateColor(id) {
    document.getElementById(id).style.color = 'white';
    document.getElementById(id).style.backgroundColor = 'black';
}
// function for reseting color of buttons 
function resetColor(id) {
    document.getElementById(id).style.color = 'black';
    document.getElementById(id).style.backgroundColor = 'white';
}

// ----------------------------------------- Buttons ----------------------------------------------
// 8GB unified memory button 
document.getElementById('memory-8gb-btn').addEventListener('click',function() {
    showMemoryPrice(0);
    showTotalPrice();
    showTotalWithPromo();
    updateColor('memory-8gb-btn');
    resetColor('memory-16gb-btn');
})
// 16GB unified memory button 
document.getElementById('memory-16gb-btn').addEventListener('click',function() {
    showMemoryPrice(180);
    showTotalPrice();
    showTotalWithPromo();
    updateColor('memory-16gb-btn');
    resetColor('memory-8gb-btn');
})
// 256GB SSD storage button 
document.getElementById('storage-256gb-btn').addEventListener('click',function(){
    showStoragePrice(0);
    showTotalPrice();
    showTotalWithPromo();
    updateColor('storage-256gb-btn');
    resetColor('storage-512gb-btn');
    resetColor('storage-1tb-btn');
})
// 512GB SSD storage button 
document.getElementById('storage-512gb-btn').addEventListener('click',function(){
    showStoragePrice(100);
    showTotalPrice();
    showTotalWithPromo();
    updateColor('storage-512gb-btn');
    resetColor('storage-256gb-btn');
    resetColor('storage-1tb-btn');
})
// 1TB SSD storage button 
document.getElementById('storage-1tb-btn').addEventListener('click',function(){
    showStoragePrice(180);
    showTotalPrice();
    showTotalWithPromo();
    updateColor('storage-1tb-btn');
    resetColor('storage-512gb-btn');
    resetColor('storage-256gb-btn');
})
// Free delivery cost button 
document.getElementById('delivery-free-btn').addEventListener('click',function(){
    showDeliveryCharge(0);
    showTotalPrice();
    showTotalWithPromo();
    updateColor('delivery-free-btn');
    resetColor('delivery-paid-btn');
})
// Paid delivery cost button 
document.getElementById('delivery-paid-btn').addEventListener('click',function(){
    showDeliveryCharge(20);
    showTotalPrice();
    showTotalWithPromo();
    updateColor('delivery-paid-btn');
    resetColor('delivery-free-btn');
})
// Promo apply button
document.getElementById('promo-apply-btn').addEventListener('click',function(){
    const couponInput = document.getElementById('promo-input').value;
    if(couponInput == 'stevekaku') {
        if(promoUsed == false) {
            promoUsed = true;
            showTotalWithPromo();
            messageColor('green');
            setValue('coupon-alert','Succefully used promo code!');
        }
        else {
            messageColor('red');
            setValue('coupon-alert','This promo code was already used!');
        }
    }
    else {
        messageColor('red');
        setValue('coupon-alert','Invalid promo code!');
    }
    document.getElementById('promo-input').value = '';
})
// Disable promo message 
document.getElementById('body').addEventListener('click',function(event){
    if(event.target.id != 'promo-apply-btn') {
        setValue('coupon-alert','\xa0');   //  '\xao' to get non-breaking space
    }
})