const cards = document.querySelectorAll('#card');
let count =0;
    let total = 0;

for(let card of cards){
    
    card.addEventListener('click', function(){
        //parent for newly added elements
        const selectedItems = document.getElementById('selected-items');
        //get price
        const itemName = card.childNodes[3].childNodes[3].innerText;

        //create and print element name an
        const h2 = document.createElement('h2');
        let count = selectedItems.childElementCount;
         h2.innerText = `${count + 1}. ${itemName}`
         selectedItems.appendChild(h2);


        //calculate total price
         const priceString = card.childNodes[3].childNodes[5].innerText.split(' ')[0];
        const price = parseFloat(priceString);
        
        
        const totalPrice = document.getElementById('total-price').innerText.split(' ')[0];
        total =  parseFloat(totalPrice) + price;  
        // console.log(total);
        // console.log(totalPrice)
      totalPrice.innerText = total;

         
    })
}
