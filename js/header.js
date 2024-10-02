function login_chk() {
    let data = localStorage.getItem('login')
    if (data) {
        document.getElementById('VK_user_profile').classList.remove('d-none')
        document.getElementById('VK_sign_in').classList.add('d-none')
    } else {
        document.getElementById('VK_user_profile').classList.add('d-none')
        document.getElementById('VK_sign_in').classList.remove('d-none')
    }
}


function VK_sign_up_cd(id) {
    let arr = [
        {
            name: "US",
            code: "+1"
        },
        {
            name: "IN",
            code: "+91"
        },
        {
            name: "UK",
            code: "+44"
        },
        {
            name: "AU",
            code: "+61"
        },
        {
            name: "SR",
            code: "+94"
        },
        {
            name: "NZ",
            code: "+64"
        },
        {
            name: "CN",
            code: "+86"
        },
    ]
    document.getElementById('VK_sign_up_code').innerText = arr[id].name + " " + arr[id].code
}


// address chnage 
function VK_change_address() {
    document.getElementById('VK_address_inpute').value = "";
}



// ---------------- address model buttons -------------------

function VK_address_btns(id) {

    let ele = document.querySelectorAll('.VK_address_btns')
    ele.forEach((el) => {
        el.classList.remove('VK_address_active_btn')
        el.classList.add('VK_address_btn')

    })
    ele[id].classList.add('VK_address_active_btn')
    ele[id].classList.remove('VK_address_btn')
}


// otp
function moveToNext(current, nextFieldId) {
    const value = current.value;

    if (value.length === 1 && !isNaN(value) && nextFieldId !== "") {
        document.getElementById(nextFieldId).focus();
    } else if (value.length === 1 && isNaN(value)) {
        current.value = '';
        current.focus();
    }
}

// otp
function moveToPrev(event, currentFieldId, prevFieldId) {
    if (event.key === 'Backspace' && document.getElementById(currentFieldId).value === '' && prevFieldId !== '') {
        document.getElementById(prevFieldId).focus();
    }
}



//  login

function VK_signup(event) {
    event.preventDefault();

    let name = document.getElementById('VK_signup_name').value;
    let number = document.getElementById('VK_signup_num').value;
    let email = document.getElementById('VK_signup_email').value;

    if (!name || !number || !email) {
        alert('Please fill in all fields');
        return;
    }

    let user = {
        name: name,
        mobile: number,
        email: email,
    };

    localStorage.setItem('user', JSON.stringify(user));
    console.log(user);

    const modal = bootstrap.Modal.getInstance(document.getElementById('signUP'));
    modal.hide();

    const signInModal = new bootstrap.Modal(document.getElementById('signIn'));
    signInModal.show();
}


function VK_signin(event) {
    event.preventDefault();

    let mobile_email = document.getElementById('VK_email_or_pass').value;
    console.log(mobile_email);

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]+$/;

    if (emailPattern.test(mobile_email)) {
        console.log('Valid email address');
    } else if (phonePattern.test(mobile_email)) {
        console.log('Valid phone number');
    } else {
        console.log('Invalid input, please enter a valid email or phone number');
    }


    const modal = bootstrap.Modal.getInstance(document.getElementById('signIn'));
    modal.hide();

    const signInModal = new bootstrap.Modal(document.getElementById('OTP'));
    signInModal.show();

}


function VK_otp(event) {
    event.preventDefault();

    let inputs = document.querySelectorAll('.otp');
    let otp = '';
    let allFilled = true;

    inputs.forEach((el) => {
        if (el.value === '') {
            allFilled = false;
        } else {
            otp += el.value;
        }
    });

    if (!allFilled) {
        alert('Please fill in all OTP fields.');
        return;
    }

    localStorage.setItem('login', true);
    login_chk();

    const modal = bootstrap.Modal.getInstance(document.getElementById('OTP'));
    modal.hide();
}

function VK_logout() {
    localStorage.removeItem('login')

    const modal = bootstrap.Modal.getInstance(document.getElementById('logoutModal'));
    modal.hide();

    login_chk()
}
