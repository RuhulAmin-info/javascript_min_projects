const currency_one = document.getElementById('currency-one');
const amount_one = document.getElementById('amount-one');
const currency_two = document.getElementById('currency-two');
const amount_two = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const swap =document.getElementById('swap');

function calculate(){
  const currency_one_value = currency_one.value;
  const currency_two_value = currency_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one_value}`)
    .then(res=>res.json())
    .then(data=>{
      var cal_rate = data.rates[currency_two_value];
      rate.innerText = `1 ${currency_one_value} = ${cal_rate} ${currency_two_value}`;

      amount_two.value = (amount_one.value * cal_rate).toFixed(2);
    });
}




currency_one.addEventListener('change',calculate);
currency_two.addEventListener('change',calculate);
amount_one.addEventListener('input',calculate);
amount_two.addEventListener('input',calculate);

swap.addEventListener('click', function(){
  var temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;
  calculate();
})

calculate();
