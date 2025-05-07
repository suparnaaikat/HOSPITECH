function formValidation(event){

    let firstName = document.getElementById('fname').value ;

    let lastName = document.getElementById('lname').value ;

    let dob = document.getElementById('date').value;

    let phone = document.getElementById('phone').value;

    let address = document.getElementById('address').value;

    let city = document.getElementById('city').value;

    let state = document.getElementById('state').value;

    let email = document.getElementById('email').value;

    let pin = document.getElementById('pinCode').value;
    if(firstName == "" || lastName == "" || dob == "" || phone == "" || address == "" || city == "" || state == "" || email == "" || pin == ""){

        alert('All fields are mandatory!');
        event.preventDefault();

    }else if(phone.length > 10 || phone.length < 10){
        alert('Enter a valid 10 digit phone number!');

        event.preventDefault();
        return false;

    }else if(pin.length > 6 || pin.length < 6){
        alert('Enter a valid 6 digit pin code');

        event.preventDefault();
        return false;

    }




}


const hamburger = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click',()=>{
    hamburger.style.display = 'none';
    navMenu.style.display = 'block';
})
navMenu.addEventListener('click',()=>{
    hamburger.style.display = 'block';
    navMenu.style.display = 'none';
})
