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
        h2.style.fontWeight = '600';
         h2.innerText = `${count + 1}. ${itemName}`

         selectedItems.appendChild(h2);


        //calculate total price
         const priceString = card.childNodes[3].childNodes[5].innerText.split(' ')[0];
        const price = parseFloat(priceString);
        
        
        const totalPrice = document.getElementById('total-price');
        total =  parseFloat(total) + price;  
        console.log(total);
        
      totalPrice.innerText = total;
      const discountButton = document.getElementById('discount-btn');
        
        if(total > 200){
            discountButton.removeAttribute('disabled');
        }else{
            discountButton.setAttribute('disabled', true);
        }

         
    })
 }
//DISCOUNT BUTTON EVENT
   function getDiscount(e){

        const inputField = e.parentNode.childNodes[1];
        const input = inputField.value;
        inputField.value = '';
                 
            if(input == 'SELL22'){
                const calcdiscount = (total/100)*22;
                const discountField = document.getElementById('discount-field');
                discountField.innerText = calcdiscount.toFixed(2);

                const grandTotal = document.getElementById('total');
                const calcGrandTotal = total - calcdiscount;
                grandTotal.innerText = calcGrandTotal;

            }else{
                alert('invalid coupon code');
            }
        }
        
    

