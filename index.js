
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

    document.getElementById('total-price').innerText = total;

    // console.log(total)
}
