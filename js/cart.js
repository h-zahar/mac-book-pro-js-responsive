
// If Promo Code is Applied
let isApplied = false;


// Function to Calculate the Total Price and Show
function totalPriceCalculate() {

    // Getting Element via ID and Assigning to Constant Variables
    const basePrice = document.getElementById('base-price');
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const deliveryCharge = document.getElementById('delivery-charge');

    const totalPrice = document.getElementById('total-price');

    // Calculate by Adding Values of All Variables
    totalPrice.innerText = parseFloat(basePrice.innerText) + parseFloat(extraMemoryCost.innerText) + parseFloat(extraStorageCost.innerText) + parseFloat(deliveryCharge.innerText);

    // If Promo Code is Not Applied
    if (!isApplied) {
        // Final Price is Set as Total Price
        document.getElementById('final-price').innerText = totalPrice.innerText;
    }

    // If Promo Code is Applied
    else {
        document.getElementById('final-price').innerText = parseFloat(totalPrice.innerText) - (parseFloat(totalPrice.innerText) * 0.2);
    }
}

// function to Show Values 
function elementCostShow(elementName, idName) {
    // Get the Specific Section Element
    const showValue = document.getElementById(elementName);

    // Assign Value of the Button
    showValue.innerText = document.getElementById(idName).value;

    // Function Called
    totalPriceCalculate();
}


// Event Handler for Every Section or Button and Call Function to Show Values

document.getElementById('memory-8gb').addEventListener('click', function() {
    elementCostShow('extra-memory-cost', 'memory-8gb');
});
document.getElementById('memory-16gb').addEventListener('click', function() {
    elementCostShow('extra-memory-cost', 'memory-16gb');
});

document.getElementById('ssd-256gb').addEventListener('click', function() {
    elementCostShow('extra-storage-cost', 'ssd-256gb');
});
document.getElementById('ssd-512gb').addEventListener('click', function() {
    elementCostShow('extra-storage-cost', 'ssd-512gb');
});
document.getElementById('ssd-1tb').addEventListener('click', function() {
    elementCostShow('extra-storage-cost', 'ssd-1tb');
});

document.getElementById('charge-free').addEventListener('click', function() {
    elementCostShow('delivery-charge', 'charge-free');
});
document.getElementById('charge-20').addEventListener('click', function() {
    elementCostShow('delivery-charge', 'charge-20');
});


// Event Handler for Promo Code Button 
document.getElementById('promo-apply').addEventListener('click', function() {

    // Get and Assign the Button Element
    const promoCode = document.getElementById('promo-text');

    // If Promo Code is Matched
    if (promoCode.value == 'stevekaku') {

        // Set Variable True
        isApplied = true;

        // Function Called to Update and Show Final Price
        totalPriceCalculate();

        // Remove Promo Code from Input Field
        promoCode.value = '';
    }

    // If Promo Code is Not Matched
    else {

        // Set Variable True
        isApplied = false;

        // Call to Show Final Price Same as Total Price
        totalPriceCalculate();
    }
});