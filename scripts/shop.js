

window.onload = function init() {
    const submitOrderBtn = document.getElementById("submitOrderBtn");
    const cupOption = document.getElementById("cupOption");
    const coneOption = document.getElementById("coneOption");


    hideToppingsCheckbox();

    cupOption.onclick = hideToppingsCheckbox;
    coneOption.onclick = hideToppingsCheckbox;

    submitOrderBtn.onclick = totalPayment;
  

}

function hideToppingsCheckbox() {
    const cupOption = document.getElementById("cupOption").checked;
    const toppingsCheckbox = document.getElementById("toppingsCheckbox");
    
    if (cupOption) {
        toppingsCheckbox.style.display = 'block';
    } else {
        toppingsCheckbox.style.display = 'none';
    }

}

function totalPayment() {
    const numberOfScoop = Number(document.getElementById("numberOfScoopInput").value);

    const coneOption = document.getElementById("coneOption").checked;
    const cupOption = document.getElementById("cupOption").checked;


    const sprinklesCheckbox = document.getElementById("sprinklesCheckbox").checked;
    const whipedCreamCheckbox = document.getElementById("whipedCreamCheckbox").checked;
    const hotFudgeCheckbox = document.getElementById("hotFudgeCheckbox").checked;
    const cherryCheckbox = document.getElementById("cherryCheckbox").checked;

    
    const basePriceTD = document.getElementById("basePriceTD");
    const taxAmountTD = document.getElementById("taxAmountTD");
    const totalDueTD = document.getElementById("totalDueTD");

    let oneScoopIceCream = 2.25;

    if(numberOfScoop > 1) {
        oneScoopIceCream += 1.25 * (numberOfScoop-1);
    }

    

    toppingsTotal = 0;
    if(cupOption) {
        if(sprinklesCheckbox) {
            toppingsTotal += .50;
        } 
        if(whipedCreamCheckbox){
            toppingsTotal += .25;
        }
        if(hotFudgeCheckbox){
            toppingsTotal += 1.25;
        }
        if(cherryCheckbox){
            toppingsTotal += .25;
        }
    } else {
        toppingsTotal = 0;
    }
    
    let basePrice = oneScoopIceCream + toppingsTotal;
    basePriceTD.innerText = basePrice;

    let taxAmount = basePrice * .08;

    taxAmountTD.innerText = taxAmount;

    let totalDue = taxAmount + basePrice;

    totalDueTD.innerText = totalDue;

}