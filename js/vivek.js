window.onload = function () {

    regular_menu_card_display();
    VK_resturent_data_display();
    VK_popular_restro_data_display();
    VK_our_restro_data_display();
    recommended_data();
    VK_Beverages();
    VK_item_delivery();

}



// -------------------------------- hide or show menu -------------------------------
function VK_cart_list_menu() {
    if (document.getElementById('VK_add_item_menu')) {
        let data = JSON.parse(localStorage.getItem('cart')) || [];
        if (data.length > 0) {
            document.getElementById('VK_add_item_menu').classList.remove('d-none')
            document.getElementById('VK_item_cnt').innerText = data.length
        }
    }
}






// ---------------------------------------------------- Food Home ----------------------------------------------------

// food home page (Regular Menu)
let VK_regular_menu_items = [
    {
        id: 201,
        name: "Chinese Samosa",
        price: "200",
        review_cnt: 4,
        review: 4,
        image: "samosa.png"
    },
    {
        id: 202,
        name: "Punjabi Dish",
        price: "400",
        review_cnt: 4,
        review: 4,
        image: "punjabi.png"
    },
    {
        id: 203,
        name: "Burger",
        price: "80",
        review_cnt: 4,
        review: 4,
        image: "burger.png"
    },
    {
        id: 204,
        name: "Punjabi Dish",
        price: "400",
        review_cnt: 4,
        review: 4,
        image: "punjabi.png"
    },
    {
        id: 205,
        name: "Burger",
        price: "80",
        review_cnt: 4,
        review: 4,
        image: "burger.png"
    },
    {
        id: 206,
        name: "Veg Manchurian",
        price: "60",
        review_cnt: 4,
        review: 4,
        image: "manchurian.png"
    },
    {
        id: 207,
        name: "Gujarati Thali",
        price: "200",
        review_cnt: 4,
        review: 4,
        image: "gujarati.png"
    },
    {
        id: 208,
        name: "Chinese Samosa",
        price: "200",
        review_cnt: 4,
        review: 5,
        image: "samosa.png"
    }
]

// food home page (Regular Menu)
function regular_menu_card_display() {
    let div = document.getElementById('VK_regular_menu_cards');

    if (div) {

        VK_cart_list_menu();

        let html = VK_regular_menu_items.map((ele, ind) => {
            const generateStars = (rating) => {
                return Array.from({ length: 5 }, (_, index) => {
                    return `
                        <span class="font_14 ${index < rating ? "VK_review_star" : "VK_star"}">
                            <i class="fa-solid fa-star"></i>
                        </span>`;
                }).join("");
            };

            const stars = generateStars(ele.review);
            let currnt_record = JSON.stringify(ele).replace(/"/g, '&quot;');
            return `
            <div class="col-xxl-3 col-lg-4 col-sm-6 my-4">
                <div class="overflow-hidden VK_regular_menu_img mx-md-4">
                    <a href="/Popular_food.html?id=${ele.id}">
                        <img src="/images/assets/${ele.image}" class="w-100 h-100 object_cover" alt="${ele.name}">
                        <div class="VK_regular_cart">
                            <div class="d-flex justify-content-center align-items-end gap-2 h-100 pb-3">
                                <button class="border-0 rounded-circle VK_cart_btn" onclick="VK_add_to_cart(event,${currnt_record})">
                                    <img src="/images/vivek/cart.png" alt="Add to cart" width="20px">
                                </button>
                                <button class="border-0 rounded-circle VK_cart_btn">
                                    <img src="/images/vivek/hart.png" alt="Add to favorites" width="20px">
                                </button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="mt-4 text-center">
                    <p class="VK_inter text-black fw-600 mb-1 font_18">${ele.name}</p>
                    <p class="VK_inter text-black fw-400 mb-1">Price: $${ele.price}</p>
                    <div>
                        <div class="d-flex justify-content-center align-items-center">
                            ${stars}
                            <div class="ms-2">
                                <p class="m-0 fw-500 VK_inter font_14">${ele.review_cnt} Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join("");

        div.innerHTML = html;
    } else {
        return;
    }
}

// food home page (Add To Cart)
function VK_add_to_cart(event, item) {
    event.preventDefault();

    let data = JSON.parse(localStorage.getItem('cart')) || [];

    let existingItem = data.find(el => el.id === item.id);

    if (!existingItem) {
        item.quantity = 1;
        item.type = "food";
        data.push(item);

        localStorage.setItem('cart', JSON.stringify(data));
    }

    VK_cart_list_menu()
}




// food home page (Resturent data)
var VK_resturent_data = [
    {
        id: 301,
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        review_cnt: 5,
        review: 4,
        offer: "Items At $60",
        image: "hotel1.png",
        typ: "vage",
        price: 500,
    },
    {
        id: 302,
        name: "Radhe Punjabi Dhaba",
        description: "Gujarati dish, Biryani Adajan, Surat",
        review_cnt: 5,
        review: 2,
        offer: null,
        image: "hotel2.png",
        typ: "vage",
        price: 700,
    },
    {
        id: 303,
        name: "La pino’z ",
        description: "Pizza , Dessert, French fri... Pal, Surat",
        review_cnt: 5,
        review: 3,
        offer: null,
        image: "hotel3.png",
        typ: "non-vage",
        price: 300,
    },
    {
        id: 304,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        image: "hotel4.png",
        typ: "vage",
        price: 200,
    },
    {
        id: 305,
        name: "Taste of Bhagwati",
        description: "Indian, Pastas ved road, Mumbai",
        review_cnt: 5,
        review: 5,
        offer: null,
        image: "hotel5.png",
        typ: "non-vage",
        price: 1000,
    },
    {
        id: 306,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        image: "hotel6.png",
        typ: "vage",
        price: 800,
    },
    {
        id: 307,
        name: "Burger King",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 3,
        offer: "Items At $60",
        image: "hotel7.png",
        typ: "vage",
        price: 500,
    },
    {
        id: 308,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        image: "hotel6.png",
        typ: "vage",
        price: 500,
    },
    {
        id: 309,
        name: "Taste of Bhagwati",
        description: "Indian, Pastas ved road, Mumbai",
        review_cnt: 5,
        review: 2,
        offer: "10% OFF",
        image: "hotel5.png",
        typ: "vage",
        price: 500,
    },
    {
        id: 310,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        image: "hotel6.png",
        typ: "vage",
        price: 500,
    },
    {
        id: 311,
        name: "Radhe Punjabi Dhaba",
        description: "Gujarati dish, Biryani Adajan, Surat",
        review_cnt: 5,
        review: 1,
        offer: null,
        image: "hotel2.png",
        typ: "vage",
        price: 500,
    },
    {
        id: 312,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 3,
        offer: null,
        image: "hotel6.png",
        typ: "vage",
        price: 500,
    },
]

// food home page (Resturent data)
var VK_resturents = VK_resturent_data

// food home page (Resturent data)
function VK_resturent_data_display() {
    let div = document.getElementById('VK_resturent');
    if (div) {

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        let html = VK_resturents.map((ele) => {
            const generateStars = (rating) => {
                return Array.from({ length: 5 }, (_, index) => {
                    return `
                        <span class="font_14 ${index < rating ? "VK_review_star" : "VK_star"}">
                            <i class="fa-solid fa-star"></i>
                        </span>`;
                }).join("");
            };

            const stars = generateStars(ele.review);
            let currnt_record = JSON.stringify(ele).replace(/"/g, '&quot;');

            let isInWishlist = wishlist.some(item => item.id === ele.id);
            let heartIcon = isInWishlist ? 'fa-solid fa-heart text-danger' : 'fa-regular fa-heart';

            return `
            <div class="col-xxl-3 col-lg-4 col-sm-6 my-4 VK_cole">
                <div class="overflow-hidden VK_resturent_food">
                    <a href="/Restaurants.html">
                        <img src="/images/assets/${ele.image}" class="w-100 h-100 object_cover" alt="">
                        <div class="VK_resturent_btn">
                            <button class="" onclick="VK_whshlist(event,${currnt_record})">
                                <i class="${heartIcon}"></i>
                            </button>
                        </div>
                        ${ele.offer != null ?
                    `<div class="VK_resturent_alert">
                                    <p class="m-0 VK_inter">
                                        ${ele.offer}
                                    </p>
                                </div>`
                    : ""}
                    </a>
                </div>
                <div class="px-2 mt-3">
                    <p class="VK_inter text-black fw-600 mb-1 font_20">
                        ${ele.name}
                    </p>
                    <p class="VK_inter text-black fw-400 m-0 VK_resturent_txt">
                        ${ele.description}
                    </p>
                    <div class="mt-2">
                        <div class="d-flex align-items-center">
                            ${stars}
                            <div class="ms-2">
                                <p class="m-0 fw-500 VK_inter">${ele.review_cnt} Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join("");

        div.innerHTML = html;
    } else {
        return;
    }
}


// food wishlist function
function VK_whshlist(event, item) {
    event.preventDefault();
    item.type = "food";

    let data = JSON.parse(localStorage.getItem('wishlist')) || [];

    let index = data.findIndex(i => i.id === item.id);
    const heartIcon = event.currentTarget.querySelector('i');

    if (index !== -1) {
        data.splice(index, 1);

        if (heartIcon) {
            heartIcon.classList.remove('fa-solid', 'text-danger');
            heartIcon.classList.add('fa-regular');
        }
    } else {
        data.push(item);

        if (heartIcon) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid', 'text-danger');
        }
    }

    localStorage.setItem('wishlist', JSON.stringify(data));
}


// food home page (Resturent data filter by)
function VK_filter_restrorent(ele) {
    const buttons = document.querySelectorAll('.VK_food_filter_btn');
    const active = document.querySelectorAll('.VK_food_filter_active_btn');

    // Add to active filters if not already present
    if (!activeFilters.includes(ele)) {
        activeFilters.push(ele);
    }

    // Hide all active buttons
    active.forEach(btn => btn.classList.add('d-none'));

    // Show all filter buttons
    buttons.forEach(button => button.classList.remove('d-none'));

    // Update the UI for active filters
    activeFilters.forEach(el => {
        buttons[el].classList.add('d-none');
        active[el].classList.remove('d-none');
    });

    let filteredRestros = VK_resturents;

    // Apply filter logic
    switch (ele) {
        case 0:
            filteredRestros = VK_resturents.filter(restro => restro.typ === "vage");
            break;
        case 1:
            filteredRestros = VK_resturents.filter(restro => restro.price >= 300 && restro.price <= 600)
            break;
        case 2:
            filteredRestros = VK_resturents.filter(restro => restro.offer);
            break;
        case 3:
            filteredRestros = VK_resturents.filter(restro => restro.review >= 3);
            break;
        case 4:
            // Apply fast delivery filter here
            break;
        default:
            break;
    }

    VK_resturents = filteredRestros;
    VK_resturent_data_display();
}

// food home page (Resturent data)
function VK_clear_filter_restrorent(id) {
    const buttons = document.querySelectorAll('.VK_food_filter_btn');
    const active = document.querySelectorAll('.VK_food_filter_active_btn');

    activeFilters = activeFilters.filter(filter => filter !== id);

    active[id].classList.add('d-none');

    buttons[id].classList.remove('d-none');

    let filteredRestros = VK_resturent_data;


    // Reapply all active filters
    activeFilters.forEach(activeFilter => {
        switch (activeFilter) {
            case 0:
                filteredRestros = filteredRestros.filter(restro => restro.typ === "vage");
                break;
            case 1:
                filteredRestros = filteredRestros.filter(restro => restro.price >= 300 && restro.price <= 600)
                break;
            case 2:
                filteredRestros = filteredRestros.filter(restro => restro.offer);
                break;
            case 3:
                filteredRestros = filteredRestros.filter(restro => restro.review >= 3);
                break;
            case 4:
                // Reapply fast delivery filter
                break;
            default:
                break;
        }
    });

    VK_resturents = filteredRestros;
    VK_resturent_data_display();
}

// food home page (Resturent data sort by)
let main_data = [...VK_resturents]

function VK_restro_filt() {


    let sort = document.querySelectorAll('#restro_filter')
    let sort_order = Array.from(sort).find(el => el.checked)

    console.log(sort_order.value);

    switch (sort_order.value) {
        case 'Relevance':
            VK_resturents = main_data
            break;
        case 'Price (low to high)':
            VK_resturents = VK_resturents.sort((a, b) => a.price - b.price)
            break;
        case 'Price (high to low)':
            VK_resturents = VK_resturents.sort((a, b) => b.price - a.price)
            break;
        case 'Rating 3+':
            VK_resturents = VK_resturents.filter(el => el.review > 3)
            break;
    }
    VK_resturent_data_display();
}



// food home page (Popular Restro data)
var VK_popular_retro_near = [
    {
        id: 313,
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        review_cnt: 5,
        review: 5,
        offer: "Items At $60",
        image: "hotel1.png"
    },
    {
        id: 314,
        name: "Radhe Punjabi Dhaba",
        description: "Gujarati dish, Biryani Adajan, Surat",
        review_cnt: 5,
        review: 5,
        offer: null,
        image: "hotel2.png"
    },
    {
        id: 315,
        name: "La pino’z ",
        description: "Pizza , Dessert, French fri... Pal, Surat",
        review_cnt: 5,
        review: 5,
        offer: null,
        image: "hotel3.png"
    },
    {
        id: 316,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        offer: null,
        image: "hotel4.png"
    },
    {
        id: 317,
        name: "Taste of Bhagwati",
        description: "Indian, Pastas ved road, Mumbai",
        review_cnt: 5,
        review: 5,
        offer: null,
        image: "hotel5.png"
    },
    {
        id: 318,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        offer: null,
        image: "hotel6.png"
    },
    {
        id: 319,
        name: "Burger King",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        offer: "Items At $60",
        image: "hotel7.png"
    },
    {
        id: 320,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        offer: null,
        image: "hotel6.png"
    },
]

// food home page (Popular Restro data)
function VK_popular_restro_data_display() {
    let div = document.getElementById('VK_popular_restro');
    if (div) {

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        let html = VK_popular_retro_near.map((ele) => {
            const generateStars = (rating) => {
                return Array.from({ length: 5 }, (_, index) => {
                    return `
                        <span class="font_14 ${index < rating ? "VK_review_star" : "VK_star"}">
                            <i class="fa-solid fa-star"></i>
                        </span>`;
                }).join("");
            };

            const stars = generateStars(ele.review);
            let currnt_record = JSON.stringify(ele).replace(/"/g, '&quot;');

            let isInWishlist = wishlist.some(item => item.id === ele.id);
            let heartIcon = isInWishlist ? 'fa-solid fa-heart text-danger' : 'fa-regular fa-heart';

            return `
            <div class="col-xxl-3 col-lg-4 col-sm-6 my-4 VK_cole">
                <div class="overflow-hidden VK_resturent_food">
                    <img src="/images/assets/${ele.image}" class="w-100 h-100 object_cover" alt="">
                    <div class="VK_resturent_btn">
                        <button class="" onclick="VK_whshlist(event,${currnt_record})">
                            <i class="${heartIcon}"></i>
                        </button>
                    </div>
                    ${ele.offer != null ?
                    `<div class="VK_resturent_alert">
                                <p class="m-0 VK_inter">
                                    ${ele.offer}
                                </p>
                            </div>`
                    : ""}
                </div>
                <div class="px-2 mt-3">
                    <p class="VK_inter text-black fw-600 mb-1 font_20">
                        ${ele.name}
                    </p>
                    <p class="VK_inter text-black fw-400 m-0 VK_resturent_txt">
                        ${ele.description}
                    </p>
                    <div class="mt-2">
                        <div class="d-flex align-items-center">
                            ${stars}
                            <div class="ms-2">
                                <p class="m-0 fw-500 VK_inter">${ele.review_cnt} Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join("");

        div.innerHTML = html;
    } else {
        return;
    }
}




// ---------------------------------------------------- Popular Food ----------------------------------------------------


//  Popular Food page (our Restrunts)
var VK_our_resturent_data = [
    {
        id: 321,
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        review_cnt: 5,
        review: 4,
        offer: "Items At $60",
        image: "hotel1.png",
        type: "vage",

    },
    {
        id: 322,
        name: "McDonald’s",
        description: "Burgers, Beverages, Cafe, Mota Varachaa, Surat",
        review_cnt: 5,
        review: 3,
        image: "mcdonald.png",
        type: "vage"
    },
    {
        id: 323,
        name: "Burger House",
        description: "Burgers, Pizzas, fast food Aaimata Road, Surat",
        review_cnt: 5,
        review: 2,
        image: "hotel8.png",
        type: "vage"
    },
    {
        id: 324,
        name: "Veggie House",
        description: "Burgers, Beverages, Cafe... Pal, Surat",
        review_cnt: 5,
        review: 5,
        image: "hotel9.png"
    },
    {
        id: 325,
        name: "Load Petrick",
        description: "Burgers, Pizzas, fast food Yogichowk, Surat",
        review_cnt: 5,
        review: 5,
        image: "hotel9.png",
        type: "vage"
    },
    {
        id: 326,
        name: "McDonald’s",
        description: "Burgers, Beverages, Cafe, Mota Varachaa, Surat",
        review_cnt: 5,
        offer: "50% OFF UPTO $20",
        review: 1,
        image: "mcdonald.png",
        type: "vage"
    },
    {
        id: 327,
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        review_cnt: 5,
        offer: "Items At $60",
        review: 3,
        image: "hotel7.png",
        type: "vage"
    },
    {
        id: 328,
        name: "Veggie House",
        description: "Burgers, Beverages, Cafe... Pal, Surat",
        review_cnt: 5,
        review: 2,
        image: "hotel9.png",
        type: "vage"
    },
    {
        id: 329,
        name: "Load Petrick",
        description: "Burgers, Pizzas, fast food Yogichowk, Surat",
        review_cnt: 5,
        review: 5,
        image: "hotel9.png",
        type: "non-vage"
    },
    {
        id: 330,
        name: "McDonald’s",
        description: "Burgers, Beverages, Cafe, Mota Varachaa, Surat",
        review_cnt: 5,
        review: 5,
        image: "mcdonald.png",
        type: "vage"
    },
]

//  Popular Food page (our Restrunts)
var VK_our_restros = VK_our_resturent_data;

//  Popular Food page (our Restrunts)
function VK_our_restro_data_display() {
    let div = document.getElementById('VK_our_resturent');
    if (div) {

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        let html = VK_our_restros.map((ele) => {
            const generateStars = (rating) => {
                return Array.from({ length: 5 }, (_, index) => {
                    return `
                        <span class="font_14 ${index < rating ? "VK_review_star" : "VK_star"}">
                            <i class="fa-solid fa-star"></i>
                        </span>`;
                }).join("");
            };

            const stars = generateStars(ele.review);
            let currnt_record = JSON.stringify(ele).replace(/"/g, '&quot;');

            let isInWishlist = wishlist.some(item => item.id === ele.id);
            let heartIcon = isInWishlist ? 'fa-solid fa-heart text-danger' : 'fa-regular fa-heart';

            return `
            <div class="col-xxl-3 col-lg-4 col-sm-6 my-4 VK_cole">
                <a href="/Restaurants.html">
                    <div class="overflow-hidden VK_resturent_food">
                        <img src="/images/assets/${ele.image}" class="w-100 h-100 object_cover" alt="">
                        <div class="VK_resturent_btn">
                            <button class="" onclick="VK_whshlist(event,${currnt_record})">
                                <i class="${heartIcon}"></i>
                            </button>
                        </div>
                        ${ele.offer != null ?
                    `<div class="VK_resturent_alert">
                            <p class="m-0 VK_inter">
                                ${ele.offer}
                            </p>
                        </div>`
                    : ""}
                    </div>
                </a>
                <div class="px-2 mt-3">
                    <p class="VK_inter text-black fw-600 mb-1 font_20">
                        ${ele.name}
                    </p>
                    <p class="VK_inter text-black fw-400 m-0 VK_resturent_txt">
                        ${ele.description}
                    </p>
                    <div class="mt-2">
                        <div class="d-flex align-items-center">
                            ${stars}
                            <div class="ms-2">
                                <p class="m-0 fw-500 VK_inter">${ele.review_cnt} Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join("");

        div.innerHTML = html;
    } else {
        return;
    }
}

//  Popular Food page (our Restrunts)
let activeFilters = [];

//  Popular Food page (our Restrunts)
function VK_filter_restro(ele) {
    const buttons = document.querySelectorAll('.VK_food_filter_btn');
    const active = document.querySelectorAll('.VK_food_filter_active_btn');

    // Add to active filters if not already present
    if (!activeFilters.includes(ele)) {
        activeFilters.push(ele);
    }

    // Hide all active buttons
    active.forEach(btn => btn.classList.add('d-none'));

    // Show all filter buttons
    buttons.forEach(button => button.classList.remove('d-none'));

    // Update the UI for active filters
    activeFilters.forEach(el => {
        buttons[el].classList.add('d-none');
        active[el].classList.remove('d-none');
    });

    let filteredRestros = VK_our_restros;

    // Apply filter logic
    switch (ele) {
        case 0:
            filteredRestros = VK_our_restros.filter(restro => restro.type === "vage");
            break;
        case 1:
            // Apply price range filter here
            break;
        case 2:
            filteredRestros = VK_our_restros.filter(restro => restro.offer);
            break;
        case 3:
            filteredRestros = VK_our_restros.filter(restro => restro.review >= 3);
            break;
        case 4:
            // Apply fast delivery filter here
            break;
        default:
            break;
    }

    VK_our_restros = filteredRestros;
    VK_our_restro_data_display();
}

//  Popular Food page (our Restrunts)
function VK_clear_filter_restro(ele) {
    const buttons = document.querySelectorAll('.VK_food_filter_btn');
    const active = document.querySelectorAll('.VK_food_filter_active_btn');

    activeFilters = activeFilters.filter(filter => filter !== ele);

    active[ele].classList.add('d-none');

    buttons[ele].classList.remove('d-none');

    let filteredRestros = VK_our_resturent_data;


    // Reapply all active filters
    activeFilters.forEach(activeFilter => {
        switch (activeFilter) {
            case 0:
                filteredRestros = filteredRestros.filter(restro => restro.type === "vage");
                break;
            case 1:
                // Reapply price range filter
                break;
            case 2:
                filteredRestros = filteredRestros.filter(restro => restro.offer);
                break;
            case 3:
                filteredRestros = filteredRestros.filter(restro => restro.review >= 3);
                break;
            case 4:
                // Reapply fast delivery filter
                break;
            default:
                break;
        }
    });

    VK_our_restros = filteredRestros;
    VK_our_restro_data_display();
}


// popular food
document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.search
    let params = new URLSearchParams(url)
    let id = params.get('id')
    if (id) {
        let data = VK_regular_menu_items.find(el => el.id == id)
        document.getElementById('VK_popular_food_heading').innerText = data.name;
    }
})



// ---------------------------------------------------- Resturents ----------------------------------------------------


// Restaurants page (item menu)
function VK_open_menu() {

    let menu = document.querySelector('.VK_open_menu')
    menu.classList.add('VK_opne_menu_box')

    document.getElementsByClassName('VK_backdrop')[0].style.display = 'block'
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        let rl = document.querySelector('.VK_menu_parent');
        rl.style.overflow = 'visible';
    }, 120)
}

// Restaurants page (item menu)
function VK_close_menu() {
    let rl = document.querySelector('.VK_menu_parent');
    rl.style.overflow = 'hidden';

    document.getElementsByClassName('VK_backdrop')[0].style.display = 'none'
    document.body.style.overflow = 'visible';

    let menu = document.querySelector('.VK_open_menu')
    menu.classList.remove('VK_opne_menu_box')
}


// Restaurants page (Recomended For you)
let VK_recomndended_data = [
    {
        id: 1,
        name: "Peri Peri Cheese Burger",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 15,
        review: 4,
        image: "burger3.png",
        typ: "veg"
    },
    {
        id: 2,
        name: "Spicy Chicken Burger",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 25,
        review: 3,
        image: "burger.png",
        typ: "non-veg"
    },
    {
        id: 3,
        name: "Aloo Tikki Burger + French Fries",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 10,
        review: 2,
        image: "burger2.png",
        typ: "veg"
    },
]


let currentItem = {};

// Restaurants page (Recomended For you)
function recommended_data() {
    let div = document.querySelector('#VK_recomended');
    if (div) {

        let cart_data = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart_data.length >= 1) {
            if (document.getElementById('VK_add_item_menu')) {
                document.getElementById('VK_add_item_menu').classList.remove('d-none')
                document.getElementById('VK_item_cnt').innerText = cart_data.length;
            }
        }

        let html = VK_recomndended_data.map((ele, id) => {
            const generateStars = (rating) => {
                return Array.from({ length: 5 }, (_, index) => {
                    return `
                    <span class="font_14 ${index < rating ? "VK_review_star" : "VK_star"}">
                        <i class="fa-solid fa-star"></i>
                    </span>`;
                }).join("");
            };

            const stars = generateStars(ele.review);

            // Check if item exists in cart
            let cartItem = cart_data.find(cartEle => cartEle.id === ele.id);
            let quantity = cartItem ? cartItem.qty : 0;

            return ` 
            <div class="row mb-4 py-3">
                <div class="col-xxl-2 col-xl-3 col-md-4">
                    <a href="/items.html?item_id=${ele.id}">
                        <div class="VK_reco_img">
                            <img src="/images/assets/${ele.image}"
                                class="w-100 h-100 object_cover" alt="">
                            <div class="VK_reco_veg">
                                <img src="/images/vivek/${ele.typ == "veg" ? `veg.png` : `non-veg.png`}" class="w-100 h-100" alt="veg type">
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-8 ps-4 pt-3">
                    <h5 class="text-black VK_inter VK_food_heading fw-600">
                       ${ele.name}
                    </h5>
                    <p class="font_18 VK_inter text-black fw-400">
                        Price : $${ele.price}
                    </p>
                    <div class="d-flex gap-1">
                        ${stars}
                        <span class="d-inline-block VK_inter ps-2">
                            ${ele.review_cnt} Reviews
                        </span>
                    </div>
                    <p class="VK_inter font_14 text-black mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div>
                        ${quantity > 0 ? `
                            <span class="VK_shadow d-inline-flex align-items-center VK_round_lg" id="VK_restro_btn_${ele.id}">
                                <button class="bg-white border-0 px-4 py-1 font_18 VK_inter fw-bold" onclick="decrementQuantity(${ele.id})">-</button>
                                <p class="m-0 fw-bold">${quantity}</p>
                                <button class="bg-white border-0 px-4 py-1 font_18 VK_inter fw-bold" onclick="incrementQuantity(${ele.id})">+</button>
                            </span>
                        ` : `
                            <span class="VK_shadow d-inline-flex align-items-center VK_round_lg">
                                <button class="bg-white border-0 px-4 py-1 font_18 VK_inter fw-bold" onclick="VK_Recommended_model_opn(${id})">ADD</button>
                            </span>
                        `}
                    </div>
                </div>
            </div>`;
        }).join("");
        div.innerHTML = html;
    } else {
        return;
    }
}

// increment decrement
function incrementQuantity(id) {
    let cart_data = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItem = cart_data.find(item => item.id === id);

    if (cartItem) {
        cartItem.qty += 1;
    } else {
        let item = VK_recomndended_data.find(item => item.id === id);
        item.qty = 1;
        cart_data.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart_data));
    recommended_data(); // Re-render the UI
}

// increment decrement
function decrementQuantity(id) {
    let cart_data = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItem = cart_data.find(item => item.id === id);

    if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
    } else {
        cart_data = cart_data.filter(item => item.id !== id);
    }

    localStorage.setItem('cart', JSON.stringify(cart_data));
    recommended_data(); // Re-render the UI
}

// Open modal and pass item data
function VK_Recommended_model_opn(id) {
    currentItem = VK_recomndended_data[id];
    document.querySelector('#VK_recomded_title').textContent = currentItem.name;
    const modal = new bootstrap.Modal(document.getElementById('Recommended'));
    modal.show();
    document.querySelector('.font_18.fw-bold.px-2').textContent = 1;
}

// increment decrement
function VK_restro_incre() {
    let qty = document.querySelector('.font_18.fw-bold.px-2').textContent;
    document.querySelector('.font_18.fw-bold.px-2').textContent = parseInt(qty) + 1;
}

// increment decrement
function VK_restro_decre() {
    let qty = document.querySelector('.font_18.fw-bold.px-2').textContent;
    if (parseInt(qty) > 1) {
        document.querySelector('.font_18.fw-bold.px-2').textContent = parseInt(qty) - 1;
    }
}

// add to cart
function VK_addToCart() {
    let cartItem = { ...currentItem };

    // fries
    let friOptions = document.querySelectorAll('input[name="fries"]');
    let selectedFri = Array.from(friOptions).find(fr => fr.checked);
    if (selectedFri) {
        cartItem.fries = selectedFri.value;
    }

    // cold drink
    let coldOptions = document.querySelectorAll('input[name="drink"]');
    let selectedCold = Array.from(coldOptions).find(cd => cd.checked);
    if (selectedCold) {
        cartItem.cold_drink = selectedCold.value;
    }

    // Update quantity
    cartItem.qty = parseInt(document.querySelector('.font_18.fw-bold.px-2').textContent);
    cartItem.type = "food";


    let data = JSON.parse(localStorage.getItem('cart')) || [];

    data.push(cartItem);

    localStorage.setItem('cart', JSON.stringify(data));


    const modalInstance = bootstrap.Modal.getInstance(document.getElementById('Recommended'));
    modalInstance.hide();
    recommended_data();
}



// Restaurants page (Cold drinks)
let VK_beverages_data = [
    {
        name: "Coca Cola",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 5,
        review: 5,
        image: "cold-drink1.png",
    },
    {
        name: "Cold Coffee",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 5,
        review: 5,
        image: "cold-drink2.png",
    },
]

// Restaurants page (Cold drinks)
function VK_Beverages() {
    let div = document.getElementById('VK_Beverages')
    if (div) {
        let html = VK_beverages_data.map((ele) => {
            const generateStars = (rating) => {
                return Array.from({ length: 5 }, (_, index) => {
                    return `
                    <span class="font_14 ${index < rating ? "VK_review_star" : "VK_star"}">
                        <i class="fa-solid fa-star"></i>
                    </span>`;
                }).join("");
            };

            const stars = generateStars(ele.review);
            return `
                <div class="row mb-4 pb-3">
                    <div class="col-xxl-2 col-xl-3 col-md-4">
                        <div class="VK_reco_img">
                            <img src="/images/assets/${ele.image}"
                                class="w-100 h-100 object_cover" alt="">
                        </div>
                    </div>
                    <div class="col-md-8 ps-4 pt-3">
                        <h5 class="text-black VK_inter VK_food_heading fw-600">
                            ${ele.name}
                        </h5>
                        <p class="font_18 VK_inter text-black fw-400">
                            Price : $${ele.price}
                        </p>
                        <div class="d-flex gap-1">
                            ${stars}
                            <span class="d-inline-block VK_inter ps-2">
                                ${ele.review_cnt} Review
                            </span>
                        </div>
                        <p class="VK_inter font_14 text-black mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div>
                            <span class="VK_shadow d-inline-flex align-items-center VK_round_lg d-noee">
                                <button
                                    class="bg-white border-0 px-4 py-1 font_18 VK_inter fw-bold">
                                    ADD
                                </button>
                            </span>
                            <span class="VK_shadow d-inline-flex align-items-center VK_round_lg d-none">
                                <button
                                    class="bg-white border-0 px-4 py-1 font_18 VK_inter fw-bold ">
                                    -
                                </button>
                                <p class="m-0  fw-bold">
                                    1
                                </p>
                                <button
                                    class="bg-white border-0 px-4 py-1 font_18 VK_inter fw-bold">
                                    +
                                </button>
                            </span>
                        </div>
                    </div>
                </div>`
        }).join("")
        div.innerHTML = html
    } else {
        return
    }
}



// ---------------------------------------------------- item ----------------------------------------------------


// item page (review and description)
function VK_review_tab(id) {
    if (id == 1) {
        document.getElementById('VK_desc').classList.add('VK_active')
        document.getElementById('VK_review').classList.remove('VK_active')

        document.getElementById('VK_description').classList.remove('d-none')
        document.getElementById('VK_reviews').classList.add('d-none')
    }
    else if (id == 2) {
        document.getElementById('VK_desc').classList.remove('VK_active')
        document.getElementById('VK_review').classList.add('VK_active')

        document.getElementById('VK_description').classList.add('d-none')
        document.getElementById('VK_reviews').classList.remove('d-none')
    }
}

// item page (item flover buttons)
function VK_item_flover_btn(id) {
    let btn = document.querySelectorAll('.VK_itm_flover')
    btn.forEach(e => {
        e.classList.remove('VK_item_flaver_active_btn')
        e.classList.add('VK_item_flaver_btn')
    })
    btn[id].classList.add('VK_item_flaver_active_btn')
    btn[id].classList.remove('VK_item_flaver_btn')
}

// item page (add to cart page) 
function VK_item_add_cart() {
    console.log("call");
    document.getElementById('VK_item_cart').classList.add('d-none')
    document.getElementById('VK_item_ince').classList.remove('d-none')
}

function VK_item_decre() {
    let qty = document.querySelector('#VK_item_qty').innerText;
    if (parseInt(qty) > 1) {
        document.querySelector('#VK_item_qty').innerText = parseInt(qty) - 1;
    }
}

function VK_item_incre() {
    let qty = document.querySelector('#VK_item_qty').textContent;
    document.querySelector('#VK_item_qty').textContent = parseInt(qty) + 1;
}



// item page (our best delivery)
function VK_item_delivery() {
    let div = document.getElementById('VK_item_best_delevery');
    if (div) {
        let item_delivery = VK_regular_menu_items.slice(0, 4)
        let cart_data = JSON.parse(localStorage.getItem('cart'));
        if (cart_data.length >= 1) {
            if (document.getElementById('VK_add_item_menu')) {
                document.getElementById('VK_add_item_menu').classList.remove('d-none')
                document.getElementById('VK_item_cnt').innerText = cart_data.length
            }
        }
        let html = item_delivery.map((ele, ind) => {
            const generateStars = (rating) => {
                return Array.from({ length: 5 }, (_, index) => {
                    return `
                        <span class="font_14 ${index < rating ? "VK_review_star" : "VK_star"}">
                            <i class="fa-solid fa-star"></i>
                        </span>`;
                }).join("");
            };

            const stars = generateStars(ele.review);
            let currnt_record = JSON.stringify(ele).replace(/"/g, '&quot;');
            return `
            <div class="col-xxl-3 col-lg-4 col-sm-6 my-4">
                <div class="overflow-hidden VK_regular_menu_img mx-md-4">
                    <img src="/images/assets/${ele.image}" class="w-100 h-100 object_cover" alt="${ele.name}">
                    <div class="VK_regular_cart">
                        <div class="d-flex justify-content-center align-items-end gap-2 h-100 pb-3">
                            <button class="border-0 rounded-circle VK_cart_btn" onclick="VK_add_to_cart(event,${currnt_record})">
                                <img src="/images/vivek/cart.png" alt="Add to cart" width="20px">
                            </button>
                            <button class="border-0 rounded-circle VK_cart_btn">
                                <img src="/images/vivek/hart.png" alt="Add to favorites" width="20px">
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-4 text-center">
                    <p class="VK_inter text-black fw-600 mb-1 font_18">${ele.name}</p>
                    <p class="VK_inter text-black fw-400 mb-1">Price: $${ele.price}</p>
                    <div>
                        <div class="d-flex justify-content-center align-items-center">
                            ${stars}
                            <div class="ms-2">
                                <p class="m-0 fw-500 VK_inter font_14">${ele.review_cnt} Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join("");

        div.innerHTML = html;
    } else {
        return;
    }
}

// items page
document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.search
    let params = new URLSearchParams(url)
    let id = params.get('item_id');
    if (id) {
        let data = VK_recomndended_data.find(el => el.id == id)

        document.getElementById('VK_item_name').innerText = data.name;
        document.getElementById('VK_item_price').innerText = data.price;
        document.getElementById('VK_item_desc').innerText = data.description;
        document.getElementById('VK_item_review_cnt').innerText = data.review_cnt;

        let arr = Array.from({ length: 5 }, (_, index) => {
            return `
                <span class="font_14 ${index < data.review ? "VK_review_star" : "VK_star"}">
                    <i class="fa-solid fa-star"></i>
                </span>`;
        }).join("");
        document.getElementById('VK_item_review_star').innerHTML = arr

    }
});