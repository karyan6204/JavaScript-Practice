function validate(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    // console.log(username+email+password+cpassword);
    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkmatch(password, cpassword);
}

function checkusername(username){
    if(username.length>7){
        document.getElementById('username').classList.add('success');
        document.getElementById('username').classList.replace('error','success');
        document.getElementById('username-error').innerHTML = '';
    }else{
        document.getElementById('username').classList.add('error');
        document.getElementById('username-error').innerText='Username must be greater than 7';
    }
}

function checkemail(email){
    if(email.length>7 && email.includes('@gmail')){
        document.getElementById('email').classList.add('success');
        document.getElementById('email').classList.replace('error','success');
        document.getElementById('email-error').innerHTML = '';
    }else{
        document.getElementById('email').classList.add('error');
        document.getElementById('email-error').innerText='Email must contain @gmail and must be 8 letters long';
    }
}

function checkpassword(password){
    if(password.length>7 && password.includes('.')){
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.replace('error','success');
        document.getElementById('password-error').innerHTML = '';
    }else{
        document.getElementById('password').classList.add('error');
        document.getElementById('password-error').innerText='Password must be greater than 7 characters and has .';
    }
}

function checkmatch(password, cpassword){
    if(password == cpassword && password!=''){
        document.getElementById('cpassword').classList.add('success');
        document.getElementById('cpassword').classList.replace('error','success');
        document.getElementById('cpassword-error').innerHTML = '';
    }else{
        document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword-error').innerText='Password not matched';
    }
}