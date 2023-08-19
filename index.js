
let total = 0;

function handleClickBtn(target) {
    const selectedFlowers = document.getElementById('selected-flowers');
    const itemName = (target.parentNode.childNodes[1].innerText);
    const li = document.createElement('li')

    li.innerText = itemName;
    selectedFlowers.appendChild(li)

    // const priceValue = (target.parentNode.childNodes)
    const price = (target.parentNode.childNodes[5].innerText.split(' ')[1]);

    total = parseInt(total) + parseInt(price);

    const totalPriceString = document.getElementById('total-price');
    const totalPrice = totalPriceString.innerText;
    const totalAmount = parseInt(totalPrice);
    totalPriceString.innerText = total;
    // console.log(totalAmount)

    const netPriceString = document.getElementById('net-price')
    const netPrice = netPriceString.innerText;
    const netPriceAmount = parseInt(netPrice);
    console.log(netPriceAmount)
    
    const discountRate = (total*30)/100;
    const netAmount = total-discountRate;
    if (discountRate.length >= 1) {
        netAmount += 1;
    }
    
    netPriceString.innerText = netAmount;
}

