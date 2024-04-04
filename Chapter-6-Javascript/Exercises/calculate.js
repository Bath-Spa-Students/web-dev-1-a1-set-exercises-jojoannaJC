//for gettng total amount immediately 
window.onload= () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input =>{
        input.addEventListener('change,', calculate)
    })
}

//calculating amount 
function calculate (){
    const Petrol_Price = document.querySelector('#Petrol_Price').value;
    const litres = document.querySelector('#litres').value;

    if (!Petrol_Price || !litres) return;
    document.querySelector('#TotalAmount').innerText = Petrol_Price * litres;
}