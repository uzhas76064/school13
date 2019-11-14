let signIn = document.querySelector('.ui__sign-in');
let signUp = document.querySelector('ui__sign-up');
let close = document.querySelector('.modal-close');
let modal = document.querySelector('.modal');

signIn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
});

close.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'none';
});