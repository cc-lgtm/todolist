(function(window, undefind) {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let eyes = document.getElementById('eyes');
    
    eyes.addEventListener('click', function(e) {
        if(password.type == 'password') {
            password.type = 'text';
            eyes.style.color = 'red';
        } else {
            password.type = 'password';
            eyes.style.color = '';
        };
    });

    username.addEventListener('keydown', function(e) {
        username.value = username.value.replace(/^\s+|\s+$/g,'');
    });
    password.addEventListener('keydown', function(e) {
        password.value = password.value.replace(/^\s+|\s+$/g,'');
    });
})(window);