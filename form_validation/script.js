
const form = document.getElementById("form");
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; 
}

function checkRequire(inputArr){
    inputArr.forEach(function(input){
       if(input.value.trim()===''){
           showError(input,`${getErrorName(input)} is require`);
       }
       else{
           showSuccess(input);
       }
    })
}

function checkLength(input,max,min){
    if(input.value.length<min){
        showError(input,`${getErrorName(input)} is must be greater than ${min}`);
    }
   else if(input.value.length>max){
    showError(input,`${getErrorName(input)} is must be lower than ${max}`); 
   }
   else{
       showSuccess(input);
   }
}

function matchPassword(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,`Password didn't match`);
    }
}

function getErrorName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequire([username,email,password,password2]);
    checkLength(password,25,6);
    checkLength(password2,25,6);
    matchPassword(password,password2);
})