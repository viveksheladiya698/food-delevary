function login_chk() {
    let data = localStorage.getItem('login')
    if (data) {
        document.getElementById('VK_user_profile')?.classList.remove('d-none')
        document.getElementById('VK_sign_in')?.classList.add('d-none')
        document.getElementById('VK_profile_off')?.classList.remove('d-none')
        document.getElementById('VK_off_btns')?.classList.add('d-none')

    } else {
        document.getElementById('VK_user_profile')?.classList.add('d-none')
        document.getElementById('VK_sign_in')?.classList.remove('d-none')
        document.getElementById('VK_profile_off')?.classList.add('d-none')
        document.getElementById('VK_off_btns')?.classList.remove('d-none')

    }
}



async function VK_update_data() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let wishlists = document.querySelectorAll('#VK_wishlist_count')
    if (wishlist.length > 0) {
        wishlists.forEach((el) => {
            el.innerHTML = wishlist.length
        })
    } else {
        wishlists.forEach((el) => {
            el.classList.add('d-none')
        })
    }

    let address = JSON.parse(localStorage.getItem('address'))
    if (address) {
        let user_address = `${address.house_no} ${"" + address.address}, ${address.sector}, ${address.area}`;
        document.getElementById('VK_address').innerText = user_address
    } else {
        document.getElementById('VK_address').innerText = 'Location'
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let carts = document.querySelectorAll('#VK_cart_count')
    if (cart.length > 0) {
        carts.forEach((el) => {
            el.innerHTML = cart.length
        })
    } else {
        carts.forEach((el) => {
            el.classList.add('d-none')
        })
    }


    const currentPath = window.location.pathname;

    const wishlistIcon = document.querySelector('.VK_wishlist_icn a');
    const cartIcon = document.querySelector('.VK_cart_icn a');


    if (currentPath.includes('/wishlist.html')) {
        wishlistIcon.innerHTML = `<img src="/images/vivek/active_wishlist.png" height="25px" alt="">`;
    } else {
        wishlistIcon.innerHTML = `<img src="/images/vivek/watchlist.png" height="25px" alt="">`;
    }

    if (currentPath.includes('/foodcart.html')) {
        cartIcon.innerHTML = `<img src="/images/vivek/acticve_cart.png" height="25px" alt="">`;
    } else {
        cartIcon.innerHTML = `<img src="/images/vivek/card.png" height="25px" alt="">`;
    }


    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentUrl = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('VK_active');
        } else {
            link.classList.remove('VK_active');
        }
    });



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

    const modal = bootstrap.Modal.getInstance(document.getElementById('signUP'));
    modal.hide();

    const signInModal = new bootstrap.Modal(document.getElementById('signIn'));
    signInModal.show();
}


function VK_signin(event) {
    event.preventDefault();

    let mobile_email = document.getElementById('VK_email_or_pass').value;

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
    localStorage.removeItem('cart')
    localStorage.removeItem('wishlist')
    localStorage.removeItem('address')
    VK_update_data();
    login_chk();

    const modal = bootstrap.Modal.getInstance(document.getElementById('logoutModal'));
    modal.hide();

}



// Address model
function VK_address(event) {
    event.preventDefault();

    let address = document.getElementById('VK_address_inpute').value;
    let house_num = document.getElementById('flat_no').value;
    let area = document.getElementById('area').value;
    let sector = document.getElementById('sector').value;
    let pin = document.getElementById('pin').value;

    let chk = document.querySelector('input[name="address"]:checked');
    let type = chk ? chk.value : null;

    let user_location = {
        address: address,
        house_no: house_num,
        area: area,
        sector: sector,
        pincode: pin,
        address_type: type
    };

    localStorage.setItem('address', JSON.stringify(user_location))

    VK_update_data();

    const modal = bootstrap.Modal.getInstance(document.getElementById('address'));
    modal.hide();

}




