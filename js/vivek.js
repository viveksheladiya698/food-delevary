window.onload = function () {

    regular_menu_card_display();
    VK_resturent_data_display();
    VK_popular_restro_data_display();
    VK_our_restro_data_display();
    recommended_data();
    VK_Beverages();

}




function moveToNext(current, nextFieldId) {
    const value = current.value;

    if (value.length === 1 && !isNaN(value) && nextFieldId !== "") {
        document.getElementById(nextFieldId).focus();
    } else if (value.length === 1 && isNaN(value)) {
        current.value = '';
        current.focus();
    }
}

function moveToPrev(event, currentFieldId, prevFieldId) {
    if (event.key === 'Backspace' && document.getElementById(currentFieldId).value === '' && prevFieldId !== '') {
        document.getElementById(prevFieldId).focus();
    }
}





let VK_regular_menu_items = [
    {
        name: "Chinese Samosa",
        price: "200",
        review_cnt: 4,
        review: 4,
        image: "samosa.png"
    },
    {
        name: "Punjabi Dish",
        price: "400",
        review_cnt: 4,
        review: 4,
        image: "punjabi.png"
    },
    {
        name: "Burger",
        price: "80",
        review_cnt: 4,
        review: 4,
        image: "burger.png"
    },
    {
        name: "Punjabi Dish",
        price: "400",
        review_cnt: 4,
        review: 4,
        image: "punjabi.png"
    },
    {
        name: "Burger",
        price: "80",
        review_cnt: 4,
        review: 4,
        image: "burger.png"
    },
    {
        name: "Veg Manchurian",
        price: "60",
        review_cnt: 4,
        review: 4,
        image: "manchurian.png"
    },
    {
        name: "Gujarati Thali",
        price: "200",
        review_cnt: 4,
        review: 4,
        image: "gujarati.png"
    },
    {
        name: "Chinese Samosa",
        price: "200",
        review_cnt: 4,
        review: 5,
        image: "samosa.png"
    }
]

function regular_menu_card_display() {
    let div = document.getElementById('VK_regular_menu_cards');
    if (div) {
        let html = VK_regular_menu_items.map((ele) => {
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
            <div class="col-xxl-3 col-lg-4 col-sm-6 my-4">
                <div class="overflow-hidden VK_regular_menu_img mx-md-4">
                    <img src="/images/assets/${ele.image}" class="w-100 h-100 object_cover" alt="${ele.name}">
                    <div class="VK_regular_cart">
                        <a href="/Popular_food.html">
                            <div class="d-flex justify-content-center align-items-end gap-2 h-100 pb-3">
                                <button class="border-0 rounded-circle VK_cart_btn" onclick="demo(event)">
                                    <img src="/images/vivek/cart.png" alt="Add to cart" width="20px">
                                </button>
                                <button class="border-0 rounded-circle VK_cart_btn">
                                    <img src="/images/vivek/hart.png" alt="Add to favorites" width="20px">
                                </button>
                            </div>
                        </a>
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

function demo(event){
    event.preventDefault();
}



var VK_resturent_data = [
    {
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        review_cnt: 5,
        review: 1,
        offer: null,
        image: "hotel1.png"
    },
    {
        name: "Radhe Punjabi Dhaba",
        description: "Gujarati dish, Biryani Adajan, Surat",
        review_cnt: 5,
        review: 2,
        offer: null,
        image: "hotel2.png"
    },
    {
        name: "La pino’z ",
        description: "Pizza , Dessert, French fri... Pal, Surat",
        review_cnt: 5,
        review: 3,
        offer: null,
        image: "hotel3.png"
    },
    {
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        image: "hotel4.png"
    },
    {
        name: "Taste of Bhagwati",
        description: "Indian, Pastas ved road, Mumbai",
        review_cnt: 5,
        review: 5,
        offer: null,
        image: "hotel5.png"
    },
    {
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        image: "hotel6.png"
    },
    {
        name: "Burger King",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 3,
        offer: "Items At $60",
        image: "hotel7.png"
    },
    {
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        image: "hotel6.png"
    },
    {
        name: "Taste of Bhagwati",
        description: "Indian, Pastas ved road, Mumbai",
        review_cnt: 5,
        review: 2,
        offer: "10% OFF",
        image: "hotel5.png"
    },
    {
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        image: "hotel6.png"
    },
    {
        name: "Radhe Punjabi Dhaba",
        description: "Gujarati dish, Biryani Adajan, Surat",
        review_cnt: 5,
        review: 1,
        offer: null,
        image: "hotel2.png"
    },
    {
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 3,
        offer: null,
        image: "hotel6.png"
    },
]

var VK_resturents = VK_resturent_data

function VK_resturent_data_display() {
    let div = document.getElementById('VK_resturent');
    if (div) {
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

            return `
            <div class="col-xxl-3 col-lg-4 col-sm-6 my-4 VK_cole">
                <div class="overflow-hidden VK_resturent_food">
                    <img src="/images/assets/${ele.image}" class="w-100 h-100 object_cover" alt="">
                    <div class="VK_resturent_btn">
                        <button class="">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    ${ele.offer != null
                    ?
                    `<div class="VK_resturent_alert">
                                <p class="m-0 VK_inter">
                                    ${ele.offer}
                                </p>
                            </div>`
                    :
                    ""
                }
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
            filteredRestros = VK_resturents.filter(restro => restro.type === "vage");
            break;
        case 1:
            // Apply price range filter here
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

    VK_resturents = filteredRestros;
    VK_resturent_data_display();
}




var VK_popular_retro_near = [
    {
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        review_cnt: 5,
        review: 5,
        alter: "Items At $60",
        image: "hotel1.png"
    },
    {
        name: "Radhe Punjabi Dhaba",
        description: "Gujarati dish, Biryani Adajan, Surat",
        review_cnt: 5,
        review: 5,
        alter: null,
        image: "hotel2.png"
    },
    {
        name: "La pino’z ",
        description: "Pizza , Dessert, French fri... Pal, Surat",
        review_cnt: 5,
        review: 5,
        alter: null,
        image: "hotel3.png"
    },
    {
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        alter: null,
        image: "hotel4.png"
    },
    {
        name: "Taste of Bhagwati",
        description: "Indian, Pastas ved road, Mumbai",
        review_cnt: 5,
        review: 5,
        alter: null,
        image: "hotel5.png"
    },
    {
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        alter: null,
        image: "hotel6.png"
    },
    {
        name: "Burger King",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        alter: "Items At $60",
        image: "hotel7.png"
    },
    {
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        alter: null,
        image: "hotel6.png"
    },
]

function VK_popular_restro_data_display() {
    let div = document.getElementById('VK_popular_restro');
    if (div) {
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

            return `
            <div class="col-xxl-3 col-lg-4 col-sm-6 my-4 VK_cole">
                <div class="overflow-hidden VK_resturent_food">
                    <img src="/images/assets/${ele.image}" class="w-100 h-100 object_cover" alt="">
                    <div class="VK_resturent_btn">
                        <button class="">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    ${ele.alter != null
                    ?
                    `<div class="VK_resturent_alert">
                                <p class="m-0 VK_inter">
                                    ${ele.alter}
                                </p>
                            </div>`
                    :
                    ""
                }
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





var VK_our_resturent_data = [
    {
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        review_cnt: 5,
        review: 4,
        offer: "Items At $60",
        image: "hotel1.png",
        type: "vage",

    },
    {
        name: "McDonald’s",
        description: "Burgers, Beverages, Cafe, Mota Varachaa, Surat",
        review_cnt: 5,
        review: 3,
        image: "mcdonald.png",
        type: "vage"
    },
    {
        name: "Burger House",
        description: "Burgers, Pizzas, fast food Aaimata Road, Surat",
        review_cnt: 5,
        review: 2,
        image: "hotel8.png",
        type: "vage"
    },
    {
        name: "Veggie House",
        description: "Burgers, Beverages, Cafe... Pal, Surat",
        review_cnt: 5,
        review: 5,
        image: "hotel9.png"
    },
    {
        name: "Load Petrick",
        description: "Burgers, Pizzas, fast food Yogichowk, Surat",
        review_cnt: 5,
        review: 5,
        image: "hotel9.png",
        type: "vage"
    },
    {
        name: "McDonald’s",
        description: "Burgers, Beverages, Cafe, Mota Varachaa, Surat",
        review_cnt: 5,
        offer: "50% OFF UPTO $20",
        review: 1,
        image: "mcdonald.png",
        type: "vage"
    },
    {
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        review_cnt: 5,
        offer: "Items At $60",
        review: 3,
        image: "hotel7.png",
        type: "vage"
    },
    {
        name: "Veggie House",
        description: "Burgers, Beverages, Cafe... Pal, Surat",
        review_cnt: 5,
        review: 2,
        image: "hotel9.png",
        type: "vage"
    },
    {
        name: "Load Petrick",
        description: "Burgers, Pizzas, fast food Yogichowk, Surat",
        review_cnt: 5,
        review: 5,
        image: "hotel9.png",
        type: "non-vage"
    },
    {
        name: "McDonald’s",
        description: "Burgers, Beverages, Cafe, Mota Varachaa, Surat",
        review_cnt: 5,
        review: 5,
        image: "mcdonald.png",
        type: "vage"
    },
]

var VK_our_restros = VK_our_resturent_data;


function VK_our_restro_data_display() {
    let div = document.getElementById('VK_our_resturent');
    if (div) {
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

            return `
            <div class="col-xxl-3 col-lg-4 col-sm-6 my-4 VK_cole">
                <div class="overflow-hidden VK_resturent_food">
                    <img src="/images/assets/${ele.image}" class="w-100 h-100 object_cover" alt="">
                    <div class="VK_resturent_btn">
                        <button class="">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    ${ele.offer != null
                    ?
                    `<div class="VK_resturent_alert">
                                <p class="m-0 VK_inter">
                                    ${ele.offer}
                                </p>
                            </div>`
                    :
                    ""
                }
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



let activeFilters = [];

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

function VK_clear_filter_restro(ele) {
    const buttons = document.querySelectorAll('.VK_food_filter_btn');
    const active = document.querySelectorAll('.VK_food_filter_active_btn');

    activeFilters = activeFilters.filter(filter => filter !== ele);

    active[ele].classList.add('d-none');

    buttons[ele].classList.remove('d-none');

    let filteredRestros = VK_our_resturent_data;
    console.log(filteredRestros);


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
    console.log(filteredRestros);

    VK_our_restros = filteredRestros;
    VK_our_restro_data_display();
}









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

function VK_close_menu() {
    let rl = document.querySelector('.VK_menu_parent');
    rl.style.overflow = 'hidden';

    document.getElementsByClassName('VK_backdrop')[0].style.display = 'none'
    document.body.style.overflow = 'visible';

    let menu = document.querySelector('.VK_open_menu')
    menu.classList.remove('VK_opne_menu_box')
}






let VK_recomndended_data = [
    {
        name: "Peri Peri Cheese Burger",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 5,
        review: 5,
        image: "burger3.png",
        type: "veg"
    },
    {
        name: "Spicy Chicken Burger",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 5,
        review: 5,
        image: "burger.png",
        type: "non-veg"
    },
    {
        name: "Aloo Tikki Burger + French Fries",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 10,
        review: 2,
        image: "burger2.png",
        type: "veg"
    },
]


function recommended_data() {
    let div = document.querySelector('#VK_recomended')
    if (div) {
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
            return ` 
            <div class="row mb-4 py-3">
                <div class="col-xxl-2 col-xl-3 col-md-4">
                    <div class="VK_reco_img">
                        <img src="/images/assets/${ele.image}"
                            class="w-100 h-100 object_cover" alt="">
                        <div class="VK_reco_veg">
                            <img src="/images/vivek/${ele.type == "veg" ? `veg.png` : `non-veg.png`}" class="w-100 h-100" alt="">
                        </div>
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
                            ${ele.review_cnt} Reviews
                        </span>
                    </div>
                    <p class="VK_inter font_14 text-black mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div>
                        <span class="VK_shadow d-inline-flex align-items-center VK_round_lg d-noee">
                            <button
                                class="bg-white border-0 px-4 py-1 font_18 VK_inter fw-bold" onclick="VK_Recommended_model_opn(${id})">
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
        div.innerHTML = html;
    } else {
        return
    }

}


function VK_Recommended_model_opn(id) {

    document.getElementById('VK_recomded_title').innerHTML = VK_recomndended_data[id].name

    var myModal = new bootstrap.Modal(document.getElementById('Recommended'));

    myModal.show();

}







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
                        <div class="VK_reco_img ">
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


function VK_change_address() {
    document.getElementById('VK_address_inpute').value = "";
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