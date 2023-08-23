// Footer email & submit area code's
let emailBox = document.getElementById('email-box');
let submitBtn = document.getElementById('join-button');

submitBtn.addEventListener('click', function(event) {
    if(emailBox.value === 'Shakil') {
        event.stopImmediatePropagation();
        alert('He is our Developer!...');
        submitBtn.style.backgroundColor = '#f2ae4d';
        submitBtn.style.borderColor = '#011f3a';
        submitBtn.style.color = '#011f3a';
    }
})

let reserveEmail;

submitBtn.addEventListener('click', function() {
    if(emailBox.value === '') {
        alert('Please, Type your email first!')
    } else {
        submitBtn.style.backgroundColor = '#f2ae4d';
        submitBtn.style.borderColor = '#011f3a';
        submitBtn.style.color = '#011f3a';

        reserveEmail = emailBox.value;
        
        setTimeout(function() {
            confirm('Your email is on the way...');
        }, 2000)
    }
})






