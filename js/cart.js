let isApplied = false;

function totalPriceCalculate() {
    const basePrice = document.getElementById('base-price');
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const deliveryCharge = document.getElementById('delivery-charge');

    const totalPrice = document.getElementById('total-price');

    totalPrice.innerText = parseFloat(basePrice.innerText) + parseFloat(extraMemoryCost.innerText) + parseFloat(extraStorageCost.innerText) + parseFloat(deliveryCharge.innerText);

    if (!isApplied) {
        document.getElementById('final-price').innerText = totalPrice.innerText;
    }

    else {
        document.getElementById('final-price').innerText = parseFloat(totalPrice.innerText) - (parseFloat(totalPrice.innerText) * 0.2);
    }
}

function elementCostShow(elementName, idName) {
    const showValue = document.getElementById(elementName);
    showValue.innerText = document.getElementById(idName).value;

    totalPriceCalculate();
}

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


document.getElementById('promo-apply').addEventListener('click', function() {
    const promoCode = document.getElementById('promo-text');

    if (promoCode.value == 'stevekaku') {
        isApplied = true;
        totalPriceCalculate();
        promoCode.value = '';
    }

    else {
        isApplied = false;
        totalPriceCalculate();
    }
});