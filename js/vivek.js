window.onload = function () {

    regular_menu_card_display();
    VK_resturent_data_display();
    VK_popular_restro_data_display();
    VK_our_restro_data_display();
    recommended_data();
    VK_Beverages();
    VK_item_delivery();
    VK_popular_dish_data();

    get_location();
}

function location1(loc) {
    console.log(loc);
}

function fail() {
    console.log("fail to ");
}

function get_location() {
    navigator.geolocation.getCurrentPosition(location1, fail)
}



// ----------------------------------------------- home page ------------------------------------------

function VK_set_category(category) {
    localStorage.setItem('category', category)
    if (category == 'food') {
        window.location = 'Food_home.html'
    } else if (category == 'groceries') {
        window.location = 'groceryhome.html'
    }
}





async function VK_update_data1() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (wishlist.length > 0) {
        document.getElementById('VK_wishlist_count').innerHTML = wishlist.length;
    } else {
        document.getElementById('VK_wishlist_count').classList.add('d-none')
    }
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
        document.getElementById('VK_cart_count').innerHTML = cart.length
    } else {
        document.getElementById('VK_cart_count').classList.add('d-none')
    }
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



// ------------------------------------------------- data ------------------------------------------

// menu data
let VK_item_main_data = [
    {
        id: 201,
        name: "Chinese Samosa",
        price: "200",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 4,
        review: 4,
        img: "samosa.png",
        typ: "veg",
        search_icn: "icn1.png"
    },
    {
        id: 202,
        name: "Punjabi Dish",
        price: "400",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 4,
        review: 4,
        img: "punjabi.png",
        typ: "veg",
        search_icn: "icn2.png"
    },
    {
        id: 203,
        name: "Burger",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 4,
        review: 4,
        img: "burger.png",
        typ: "veg",
        search_icn: "icn3.png"
    },
    {
        id: 204,
        name: "Punjabi Dish",
        price: "400",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 4,
        review: 4,
        img: "punjabi.png",
        typ: "veg",
        search_icn: "icn3.png"
    },
    {
        id: 205,
        name: "Burger",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 4,
        review: 4,
        img: "burger.png",
        typ: "non-veg",
        search_icn: "icn2.png"
    },
    {
        id: 206,
        name: "Veg Manchurian",
        price: "60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 4,
        review: 4,
        img: "manchurian.png",
        typ: "veg",
        search_icn: "icn1.png"
    },
    {
        id: 207,
        name: "Gujarati Thali",
        price: "200",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 4,
        review: 4,
        img: "gujarati.png",
        typ: "veg",
        search_icn: "icn2.png"
    },
    {
        id: 208,
        name: "Chinese Samosa",
        price: "200",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 4,
        review: 5,
        img: "samosa.png",
        typ: "veg",
        search_icn: "icn3.png"
    },
    {
        id: 209,
        name: "Peri Peri Cheese Burger",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 15,
        review: 4,
        img: "burger3.png",
        typ: "veg",
        search_icn: "icn3.png"
    },
    {
        id: 210,
        name: "Spicy Chicken Burger",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 25,
        review: 3,
        img: "burger.png",
        typ: "non-veg",
        search_icn: "icn2.png"
    },
    {
        id: 211,
        name: "Aloo Tikki Burger + French Fries",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 10,
        review: 2,
        img: "burger2.png",
        typ: "veg",
        search_icn: "icn1.png"
    },
]


// resturent data
var VK_main_data = [
    {
        id: 301,
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        address: "vesu, Surat",
        review_cnt: 5,
        review: 4,
        offer: "Items At $60",
        img: "hotel1.png",
        typ: "vage",
        price: 500,
        time: 20,
        search_icn: "icn1.png"
    },
    {
        id: 302,
        name: "Radhe Punjabi Dhaba",
        description: "Gujarati dish, Biryani Adajan, Surat",
        address: "Adajan, Surat",
        review_cnt: 5,
        review: 2,
        offer: null,
        img: "hotel2.png",
        typ: "vage",
        price: 700,
        time: 25,
        search_icn: "icn2.png"
    },
    {
        id: 303,
        name: "La pino’z ",
        description: "Pizza , Dessert, French fri... Pal, Surat",
        address: "Pal, Surat",
        review_cnt: 5,
        review: 3,
        offer: null,
        img: "hotel3.png",
        typ: "non-vage",
        price: 300,
        time: 26,
        search_icn: "icn3.png"
    },
    {
        id: 304,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        address: "Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        img: "hotel4.png",
        typ: "vage",
        price: 200,
        time: 30,
        search_icn: "icn1.png"
    },
    {
        id: 305,
        name: "Taste of Bhagwati",
        description: "Indian, Pastas ved road, Mumbai",
        address: "Ved Road, Mumbai",
        review_cnt: 5,
        review: 5,
        offer: null,
        img: "hotel5.png",
        typ: "non-vage",
        price: 1000,
        time: 35,
        search_icn: "icn2.png"
    },
    {
        id: 306,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        address: "Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        img: "hotel6.png",
        typ: "vage",
        price: 800,
        time: 25,
        search_icn: "icn3.png"
    },
    {
        id: 307,
        name: "Burger King",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        address: "Gokul Road, Navsari",
        review_cnt: 5,
        review: 3,
        offer: "Items At $60",
        img: "hotel7.png",
        typ: "vage",
        price: 500,
        time: 35,
        search_icn: "icn1.png"
    },
    {
        id: 308,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        address: "Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        img: "hotel6.png",
        typ: "vage",
        price: 500,
        time: 30,
        search_icn: "icn2.png"
    },
    {
        id: 309,
        name: "Taste of Bhagwati",
        description: "Indian, Pastas ved road, Mumbai",
        address: "Ved Road, Mumbai",
        review_cnt: 5,
        review: 2,
        offer: "10% OFF",
        img: "hotel5.png",
        typ: "vage",
        price: 500,
        time: 25,
        search_icn: "icn3.png"
    },
    {
        id: 310,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        address: "Gokul Road, Navsari",
        review_cnt: 5,
        review: 4,
        offer: null,
        img: "hotel6.png",
        typ: "vage",
        price: 500,
        time: 35,
        search_icn: "icn1.png"
    },
    {
        id: 311,
        name: "Radhe Punjabi Dhaba",
        description: "Gujarati dish, Biryani Adajan, Surat",
        address: "Adajan, Surat",
        review_cnt: 5,
        review: 1,
        offer: null,
        img: "hotel2.png",
        typ: "vage",
        price: 500,
        time: 35,
        search_icn: "icn2.png"
    },
    {
        id: 312,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        address: "Gokul Road, Navsari",
        review_cnt: 5,
        review: 3,
        offer: null,
        img: "hotel6.png",
        typ: "vage",
        price: 500,
        time: 40,
        search_icn: "icn3.png"
    },
    {
        id: 313,
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        address: "Vesu, Surat",
        review_cnt: 5,
        review: 5,
        offer: "Items At $60",
        img: "hotel1.png",
        typ: "vage",
        price: 200,
        time: 30,
        search_icn: "icn1.png"
    },
    {
        id: 314,
        name: "Radhe Punjabi Dhaba",
        description: "Gujarati dish, Biryani Adajan, Surat",
        address: "Adajan, Surat",
        review_cnt: 5,
        review: 5,
        offer: null,
        img: "hotel2.png",
        typ: "non-vage",
        price: 200,
        time: 25,
        search_icn: "icn2.png"
    },
    {
        id: 315,
        name: "La pino’z ",
        description: "Pizza , Dessert, French fri... Pal, Surat",
        address: "Pal, Surat",
        review_cnt: 5,
        review: 5,
        offer: null,
        img: "hotel3.png",
        typ: "non-vage",
        price: 250,
        time: 30,
        search_icn: "icn3.png"
    },
    {
        id: 316,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        address: "Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        offer: null,
        img: "hotel4.png",
        typ: "vage",
        price: 300,
        time: 25,
        search_icn: "icn1.png"
    },
    {
        id: 317,
        name: "Taste of Bhagwati",
        description: "Indian, Pastas ved road, Mumbai",
        address: "Ved Road, Mumbai",
        review_cnt: 5,
        review: 5,
        offer: null,
        img: "hotel5.png",
        typ: "non-vage",
        price: 200,
        time: 35,
        search_icn: "icn2.png"
    },
    {
        id: 318,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        address: "Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        offer: null,
        img: "hotel6.png",
        typ: "vage",
        price: 400,
        time: 25,
        search_icn: "icn3.png"
    },
    {
        id: 319,
        name: "Burger King",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        address: "Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        offer: "Items At $60",
        img: "hotel7.png",
        typ: "non-vage",
        price: 600,
        time: 25,
        search_icn: "icn1.png"
    },
    {
        id: 320,
        name: "Avadh Hotel",
        description: "Punjabi, south Indian Gokul Road, Navsari",
        address: "Gokul Road, Navsari",
        review_cnt: 5,
        review: 5,
        offer: null,
        img: "hotel6.png",
        typ: "vage",
        price: 700,
        time: 30,
        search_icn: "icn2.png"
    },
    {
        id: 321,
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        address: "Vesu, Surat",
        review_cnt: 5,
        review: 4,
        offer: "Items At $60",
        img: "hotel1.png",
        typ: "vage",
        price: 450,
        time: 35,
        search_icn: "icn3.png"

    },
    {
        id: 322,
        name: "McDonald’s",
        description: "Burgers, Beverages, Cafe, Mota Varachaa, Surat",
        address: "Mota Varachaa, Surat",
        review_cnt: 5,
        review: 3,
        img: "mcdonald.png",
        typ: "non-vage",
        price: 200,
        time: 20,
        search_icn: "icn1.png"
    },
    {
        id: 323,
        name: "Burger House",
        description: "Burgers, Pizzas, fast food Aaimata Road, Surat",
        address: "Aaimata Road, Surat",
        review_cnt: 5,
        review: 2,
        img: "hotel8.png",
        typ: "vage",
        price: 600,
        time: 30,
        search_icn: "icn2.png"
    },
    {
        id: 324,
        name: "Veggie House",
        description: "Burgers, Beverages, Cafe... Pal, Surat",
        address: "Pal, Surat",
        review_cnt: 5,
        review: 5,
        img: "hotel9.png",
        typ: "vage",
        price: 500,
        time: 35,
        search_icn: "icn3.png"
    },
    {
        id: 325,
        name: "Load Petrick",
        description: "Burgers, Pizzas, fast food Yogichowk, Surat",
        address: "YogiChowk, Suart",
        review_cnt: 5,
        review: 5,
        img: "hotel9.png",
        typ: "vage",
        price: 900,
        time: 30,
        search_icn: "icn1.png"
    },
    {
        id: 326,
        name: "McDonald’s",
        description: "Burgers, Beverages, Cafe, Mota Varachaa, Surat",
        address: "Mota Varachaa, Surat",
        review_cnt: 5,
        offer: "50% OFF UPTO $20",
        review: 1,
        img: "mcdonald.png",
        typ: "non-vage",
        price: 200,
        time: 25,
        search_icn: "icn2.png"
    },
    {
        id: 327,
        name: "Burger King",
        description: "Burger, Fast Food, Dessert Vesu, Surat",
        address: "Vesu, Surat",
        review_cnt: 5,
        offer: "Items At $60",
        review: 3,
        img: "hotel7.png",
        typ: "non-vage",
        price: 500,
        time: 20,
        search_icn: "icn3.png"
    },
    {
        id: 328,
        name: "Veggie House",
        description: "Burgers, Beverages, Cafe... Pal, Surat",
        address: "Pal, Surat",
        review_cnt: 5,
        review: 2,
        img: "hotel9.png",
        typ: "non-vage",
        price: 100,
        time: 20,
        search_icn: "icn1.png"
    },
    {
        id: 329,
        name: "Load Petrick",
        description: "Burgers, Pizzas, fast food Yogichowk, Surat",
        address: "YogiChowk, Suart",
        review_cnt: 5,
        review: 5,
        img: "hotel9.png",
        typ: "vage",
        price: 400,
        time: 20,
        search_icn: "icn2.png"
    },
    {
        id: 330,
        name: "McDonald’s",
        description: "Burgers, Beverages, Cafe, Mota Varachaa, Surat",
        address: "Mota Varachaa, Surat",
        review_cnt: 5,
        review: 5,
        img: "mcdonald.png",
        typ: "vage",
        price: 500,
        time: 20,
        search_icn: "icn3.png"
    },
]


// grocery data 
const product = [
    {
        id: 1,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 4,
        type: "Grocery",

    },
    {
        id: 2,
        img: "item2.png",
        name: "Pineapple",
        price: 60,
        review: 4,
        type: "Grocery",
    },
    {
        id: 3,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 5,
        type: "Grocery",
    },
    {
        id: 4,
        img: "item4.png",
        name: "Atta",
        price: 100,
        review: 5,
        type: "Grocery",
    },
    {
        id: 5,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 5,
        type: "Grocery",
    },
    {
        id: 6,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 5,
        type: "Grocery",
    },
    {
        id: 7,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 5,
        type: "Grocery",
    },
    {
        id: 8,
        img: "item2.png",
        name: "Pineapple",
        price: 60,
        review: 5,
        type: "Grocery",
    },
    {
        id: 9,
        img: "item5.png",
        name: "Tea and Coffee",
        price: 20,
        review: 4,
        discount: 'Get 30',
        type: "Grocery",
    },
    {
        id: 10,
        img: "item2.png",
        name: "Pineapple",
        price: 60,
        review: 4,
        discount: '',
        type: "Grocery",
    },
    {
        id: 11,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '40',
        type: "Grocery",
    },
    {
        id: 12,
        img: "item4.png",
        name: "Atta",
        price: 110,
        review: 4,
        discount: '30',
        type: "Grocery",
    },
    {
        id: 13,
        img: "item6.png",
        name: "Sauces and Spreads",
        price: 120,
        review: 4,
        discount: 'Get 30',
        type: "Grocery",
    },
    {
        id: 14,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '10',
        type: "Grocery",
    },
    {
        id: 15,
        img: "item7.png",
        name: "Cold Drinks & Juices",
        price: 20,
        review: 4,
        discount: '',
        type: "Grocery",
    },
    {
        id: 16,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 4,
        discount: '',
        type: "Grocery",
    },
    {
        id: 17,
        img: "item5.png",
        name: "Tea and Coffee",
        price: 20,
        review: 4,
        discount: '30',
        category: "tea and coffee",
        type: "Grocery",
    },
    {
        id: 18,
        img: "item2.png",
        name: "Pineapple",
        price: 60,
        review: 4,
        discount: '',
        category: "Fresh Fruits",
        type: "Grocery",
    },
    {
        id: 19,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '40',
        category: "Dairy, Bread and Eggs",
        type: "Grocery",
    },
    {
        id: 20,
        img: "item4.png",
        name: "Atta",
        price: 110,
        review: 4,
        discount: '30',
        category: "Atta, Rice and Dals",
        type: "Grocery",
    },
    {
        id: 21,
        img: "item6.png",
        name: "Sauces and Spreads",
        price: 120,
        review: 4,
        discount: '30',
        category: "Sauces and Spreads",
        type: "Grocery",
    },
    {
        id: 22,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '10',
        category: "Dairy, Bread and Eggs",
        type: "Grocery",
    },
    {
        id: 23,
        img: "item7.png",
        name: "Cold Drinks & Juices",
        price: 20,
        review: 4,
        discount: '',
        category: "Cold Drinks and Juices",
        type: "Grocery",
    },
    {
        id: 24,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 4,
        discount: '',
        category: "Fresh Vegetables",
        type: "Grocery",
    },
    {
        id: 25,
        img: "item5.png",
        name: "Tea and Coffee",
        price: 20,
        review: 4,
        discount: '30',
        category: "tea and coffee",
        type: "Grocery",
    },
    {
        id: 26,
        img: "item2.png",
        name: "Pineapple",
        price: 60,
        review: 4,
        discount: '',
        category: "Fresh Fruits",
        type: "Grocery",
    },
    {
        id: 27,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '40',
        category: "Dairy, Bread and Eggs",
        type: "Grocery",
    },
    {
        id: 28,
        img: "item4.png",
        name: "Atta",
        price: 110,
        review: 4,
        discount: '30',
        category: "Atta, Rice and Dals",
        type: "Grocery",
    },
    {
        id: 29,
        img: "item6.png",
        name: "Sauces and Spreads",
        price: 120,
        review: 4,
        discount: '30',
        category: "Sauces and Spreads",
        type: "Grocery",
    },
    {
        id: 30,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '10',
        category: "Dairy, Bread and Eggs",
        type: "Grocery",
    },
    {
        id: 31,
        img: "item7.png",
        name: "Cold Drinks & Juices",
        price: 20,
        review: 4,
        discount: '',
        category: "Cold Drinks and Juices",
        type: "Grocery",
    },
    {
        id: 32,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 4,
        discount: '',
        category: "Fresh Vegetables",
        type: "Grocery",
    },
]





// ---------------------------------------------------- Food Home ----------------------------------------------------

// food home page (Regular Menu)
let VK_regular_menu_items = VK_item_main_data.slice(0, 8)

// food home page (Regular Menu)
function regular_menu_card_display() {
    let div = document.getElementById('VK_regular_menu_cards');

    if (div) {

        VK_cart_list_menu();

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

        let html = VK_regular_menu_items.map((ele, ind) => {
            const generateStars = (rating) => {
                return Array.from({ length: 5 }, (_, index) => {
                    return `
                        <span class="font_14 ${index < rating ? "VK_review_star" : "VK_star"}">
                            <i class="fa-solid fa-star"></i>
                        </span>`;
                }).join("");
            };

            let isInWishlist = wishlist.some(item => item.id === ele.id);
            let heartIcon = isInWishlist ? 'fa-solid fa-heart text-white' : 'fa-regular fa-heart text-white';

            const stars = generateStars(ele.review);
            let currnt_record = JSON.stringify(ele).replace(/"/g, '&quot;');

            return `
            <div class="col-xxl-3 col-lg-4 col-sm-6 my-4">
                <div class="overflow-hidden VK_regular_menu_img">
                    <a href="/Popular_food.html?id=${ele.id}">
                        <img src="/images/assets/${ele.img}" class="w-100 h-100 object_cover" alt="${ele.name}">
                        <div class="VK_regular_cart">
                            <div class="d-flex justify-content-center align-items-end gap-2 h-100 pb-3">
                                <button class="border-0 rounded-circle VK_cart_btn" onclick="VK_add_to_cart(event,${currnt_record})">
                                    <img src="/images/vivek/cart.png" alt="Add to cart" width="20px">
                                </button>
                                <button class="border-0 rounded-circle VK_cart_btn" onclick="VK_add_wishlist(event,${currnt_record})">
                                    <i class="${heartIcon}"></i>
                                </button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="mt-4 text-center">
                    <p class="VK_inter text-black fw-600 mb-1 font_24">${ele.name}</p>
                    <p class="VK_inter text-black fw-400 mb-1 font_22">Price: $${ele.price}</p>
                    <div>
                        <div class="d-flex justify-content-center align-items-center">
                            ${stars}
                            <div class="ms-2">
                                <p class="m-0 fw-500 VK_inter font_20">${ele.review_cnt} Reviews</p>
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

// food wishlist
function VK_add_wishlist(event, item) {
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
    VK_update_data1();

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
    VK_update_data1();
}







// food home page (Resturent data)
var VK_resturent_data = VK_main_data.slice(0, 12)

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
                        <span class="font_16 me-1 ${index < rating ? "VK_review_star" : "VK_star"}">
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
                    <a href="/Restaurants.html?r_id=${ele.id}">
                        <img src="/images/assets/${ele.img}" class="w-100 h-100 object_cover" alt="">
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
                <div class="px-2 mt-3 VK_resturent_food h-auto">
                    <p class="VK_inter text-black fw-600 mb-1 font_24">
                        ${ele.name}
                    </p>
                    <p class="VK_inter text-black fw-400 m-0 VK_resturent_txt font_20">
                        ${ele.description}
                    </p>
                    <div class="mt-2">
                        <div class="d-flex align-items-center">
                            ${stars}
                            <div class="ms-2">
                                <p class="m-0 fw-500 font_20 VK_inter">${ele.review_cnt} Reviews</p>
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
    VK_update_data1();
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
            filteredRestros = VK_resturents.sort((a, b) => a.time - b.time)
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
var VK_popular_retro_near = VK_main_data.slice(12, 20)

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
                    <a href="/Restaurants.html?r_id=${ele.id}">
                        <img src="/images/assets/${ele.img}" class="w-100 h-100 object_cover" alt="">
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
                <div class="px-2 mt-3 VK_resturent_food h-auto">
                    <p class="VK_inter text-black fw-600 mb-1 font_24">
                        ${ele.name}
                    </p>
                    <p class="VK_inter text-black fw-400 m-0 font_20 VK_resturent_txt">
                        ${ele.description}
                    </p>
                    <div class="mt-2">
                        <div class="d-flex align-items-center">
                            ${stars}
                            <div class="ms-2">
                                <p class="m-0 fw-500 VK_inter font_20">${ele.review_cnt} Reviews</p>
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
var VK_our_resturent_data = VK_main_data.slice(20, 30)

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
                <a href="/Restaurants.html?r_id=${ele.id}">
                    <div class="overflow-hidden VK_resturent_food">
                        <img src="/images/assets/${ele.img}" class="w-100 h-100 object_cover" alt="">
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
                <div class="px-2 mt-3 VK_resturent_food h-auto">
                    <p class="VK_inter text-black fw-600 mb-1 font_24">
                        ${ele.name}
                    </p>
                    <p class="VK_inter text-black fw-400 m-0 VK_resturent_txt font_20">
                        ${ele.description}
                    </p>
                    <div class="mt-2">
                        <div class="d-flex align-items-center">
                            ${stars}
                            <div class="ms-2">
                                <p class="m-0 fw-500 VK_inter font_20">${ele.review_cnt} Reviews</p>
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
            filteredRestros = VK_our_restros.filter(restro => restro.typ === "vage");
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
                filteredRestros = filteredRestros.filter(restro => restro.typ === "vage");
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

// Popular Food page 
function VK_restro_filt() {

    let sort = document.querySelectorAll('#restro_filter')
    let sort_order = Array.from(sort).find(el => el.checked)

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
let VK_recomndended_data = VK_item_main_data.slice(8, 11)


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
                    <span class="${index < rating ? "VK_review_star" : "VK_star"}">
                        <i class="fa-solid fa-star"></i>
                    </span>`;
                }).join("");
            };

            const stars = generateStars(ele.review);

            // Check if item exists in cart
            let cartItem = cart_data.find(cartEle => cartEle.id === ele.id);
            let quantity = cartItem ? cartItem.quantity : 0;

            return ` 
            <div class="row mb-4 py-3">
                <div class="col-xxl-2 col-xl-3 col-md-4">
                    <a href="/items.html?item_id=${ele.id}">
                        <div class="VK_reco_img">
                            <img src="/images/assets/${ele.img}"
                                class="w-100 h-100 object_cover" alt="">
                            <div class="VK_reco_veg">
                                <img src="/images/vivek/${ele.typ == "veg" ? `veg.png` : `non-veg.png`}" class="w-100 h-100" alt="veg type">
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-8 ps-4 pt-3">
                    <h5 class="text-black VK_inter VK_food_heading fw-500">
                       ${ele.name}
                    </h5>
                    <p class="font_18 VK_inter text-black fw-400 font_24">
                        Price : $${ele.price}
                    </p>
                    <div class="d-flex gap-1 align-items-center">
                        ${stars}
                        <span class="d-inline-block VK_inter ps-2 font_20">
                            ${ele.review_cnt} Reviews
                        </span>
                    </div>
                    <p class="VK_inter font_18 VK_restro_desc mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div>
                        ${quantity > 0 ? `
                            <span class="VK_shadow d-inline-flex align-items-center VK_round_lg" id="VK_restro_btn_${ele.id}">
                                <button class="bg-white border-0 px-4 py-1 font_20 VK_inter fw-bold" onclick="decrementQuantity(${ele.id})">-</button>
                                <p class="m-0 fw-bold font_20">${quantity}</p>
                                <button class="bg-white border-0 px-4 py-1 font_20 VK_inter fw-bold" onclick="incrementQuantity(${ele.id})">+</button>
                            </span>
                        ` : `
                            <span class="VK_shadow d-inline-flex align-items-center VK_round_lg">
                                <button class="bg-white border-0 px-4 py-1 font_20 VK_inter fw-bold" onclick="VK_Recommended_model_opn(${id})">ADD</button>
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
        cartItem.quantity += 1;
    } else {
        let item = VK_recomndended_data.find(item => item.id === id);
        item.quantity = 1;
        cart_data.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart_data));
    recommended_data(); // Re-render the UI
}

// increment decrement
function decrementQuantity(id) {
    let cart_data = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItem = cart_data.find(item => item.id === id);

    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
    } else {
        cart_data = cart_data.filter(item => item.id !== id);
    }

    localStorage.setItem('cart', JSON.stringify(cart_data));
    recommended_data();
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
    cartItem.quantity = parseInt(document.querySelector('.font_18.fw-bold.px-2').textContent);
    cartItem.type = "food";


    let data = JSON.parse(localStorage.getItem('cart')) || [];

    data.push(cartItem);

    localStorage.setItem('cart', JSON.stringify(data));


    const modalInstance = bootstrap.Modal.getInstance(document.getElementById('Recommended'));
    modalInstance.hide();
    recommended_data();
    VK_update_data1();
}



// Restaurants page (Cold drinks)
let VK_beverages_data = [
    {
        name: "Coca Cola",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 5,
        review: 5,
        img: "cold-drink1.png",
    },
    {
        name: "Cold Coffee",
        price: "80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        review_cnt: 5,
        review: 5,
        img: "cold-drink2.png",
    },
]

// Restaurants page (Cold drinks)
function VK_Beverages() {
    let div = document.getElementById('VK_Beverages')
    if (div) {

        let cart_data = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart_data.length >= 1) {
            if (document.getElementById('VK_add_item_menu')) {
                document.getElementById('VK_add_item_menu').classList.remove('d-none')
                document.getElementById('VK_item_cnt').innerText = cart_data.length;
            }
        }

        let html = VK_beverages_data.map((ele, id) => {
            const generateStars = (rating) => {
                return Array.from({ length: 5 }, (_, index) => {
                    return `
                    <span class="font_14 ${index < rating ? "VK_review_star" : "VK_star"}">
                        <i class="fa-solid fa-star"></i>
                    </span>`;
                }).join("");
            };

            const stars = generateStars(ele.review);

            let cartItem = cart_data.find(cartEle => cartEle.id === ele.id);
            let quantity = cartItem ? cartItem.quantity : 0;

            return ` 
            <div class="row mb-4 py-3">
                <div class="col-xxl-2 col-xl-3 col-md-4">
                    <a href="/items.html?item_id=${ele.id}">
                        <div class="VK_reco_img">
                            <img src="/images/assets/${ele.img}"
                                class="w-100 h-100 object_cover" alt="">
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


function VK_item_add_cart() {
    let url = window.location.search;
    let params = new URLSearchParams(url);
    let id = params.get('item_id');

    let cart_data = JSON.parse(localStorage.getItem('cart')) || [];
    let find_cart = cart_data.find(el => el.id == id);

    if (!find_cart) {
        let btn = Array.from(document.querySelectorAll('input[name="flaver"]'));
        let chk = btn.find(el => el.checked === true);

        if (chk) {
            let data = VK_recomndended_data.find(el => el.id == id);
            data.quantity = 1;
            data.type = "food";
            data.flavor = chk.value;
            cart_data.push(data);

            localStorage.setItem('cart', JSON.stringify(cart_data));

            document.getElementById('VK_item_ince').classList.remove('d-none')
            document.getElementById('VK_item_cart').classList.add('d-none')
        }
    }
    VK_update_data1();
}


function VK_item_decre() {
    let url = window.location.search;
    let params = new URLSearchParams(url);
    let id = params.get('item_id');

    if (id) {
        let cart_data = JSON.parse(localStorage.getItem('cart')) || [];
        let find_cart = cart_data.find(el => el.id == id);

        if (find_cart) {
            let qty = document.querySelector('#VK_item_qty').innerText;

            if (parseInt(qty) > 1) {
                document.querySelector('#VK_item_qty').innerText = parseInt(qty) - 1;

                find_cart.quantity -= 1;

                localStorage.setItem('cart', JSON.stringify(cart_data));

            }
        }
    }
}


function VK_item_incre() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('item_id');

    if (!id) {
        return;
    }

    const cart_data = JSON.parse(localStorage.getItem('cart')) || [];
    const find_cart = cart_data.find(item => item.id == id);

    if (!find_cart) {
        return;
    }

    const qtyElement = document.querySelector('#VK_item_qty');
    const currentQty = Number(qtyElement.innerText);

    const newQty = currentQty + 1;
    qtyElement.innerText = newQty;

    find_cart.quantity = newQty;

    localStorage.setItem('cart', JSON.stringify(cart_data));

}



// item page (our best delivery)
function VK_item_delivery() {
    let div = document.getElementById('VK_item_best_delevery');
    if (div) {

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];


        let item_delivery = VK_regular_menu_items.slice(0, 4)
        let cart_data = JSON.parse(localStorage.getItem('cart')) || [];


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

            let isInWishlist = wishlist.some(item => item.id === ele.id);
            let heartIcon = isInWishlist ? 'fa-solid fa-heart text-white' : 'fa-regular fa-heart text-white';

            const stars = generateStars(ele.review);
            let currnt_record = JSON.stringify(ele).replace(/"/g, '&quot;');
            return `
            <div class="col-xxl-3 col-lg-4 col-sm-6 my-4">
                <div class="overflow-hidden VK_regular_menu_img">
                    <a href="items.html?item_id=${ele.id}">
                        <img src="/images/assets/${ele.img}" class="w-100 h-100 object_cover" alt="${ele.name}">
                        <div class="VK_regular_cart">
                            <div class="d-flex justify-content-center align-items-end gap-2 h-100 pb-3">
                                <button class="border-0 rounded-circle VK_cart_btn" onclick="VK_add_to_cart(event,${currnt_record})">
                                    <img src="/images/vivek/cart.png" alt="Add to cart" width="20px">
                                </button>
                                <button class="border-0 rounded-circle VK_cart_btn" onclick="VK_add_wishlist(event,${currnt_record})">
                                    <i class="${heartIcon}"></i>
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

// items page
document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.search
    let params = new URLSearchParams(url)
    let id = params.get('item_id');

    if (id) {
        let cart_data = JSON.parse(localStorage.getItem('cart')) || []
        let find_cart = cart_data.find(el => el.id == id)

        if (find_cart) {
            document.getElementById('VK_item_cart').classList.add('d-none')
            document.getElementById('VK_item_ince').classList.remove('d-none')
            document.getElementById('VK_item_qty').innerText = find_cart.quantity
        }

        let data = VK_item_main_data.find(el => el.id == id)
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










// ------------------------------------------------------- search page -------------------------------------------------------

// search function
function VK_search() {
    let close = document.querySelector('.VK_input_cancel.d-none');
    close?.classList.remove('d-none');

    let search_text = document.getElementById('VK_search_box').value;
    let category = localStorage.getItem('category');

    if (search_text.length > 0) {
        if (category === "food") {
            VK_search_food(search_text);
        } else if (category === "groceries") {
            VK_search_grocery(search_text);
        }
    } else {
        VK_reset_search();
    }
}

// Handle food search
function VK_search_food(search_text) {
    let search_restro = VK_main_data.filter((ele) => {
        return ele.name.toLowerCase().includes(search_text.toLowerCase());
    });

    let item_search = VK_item_main_data.filter((ele) => {
        return ele.name.toLowerCase().includes(search_text.toLowerCase());
    });

    VK_update_search_display();
    VK_print_search_result(search_restro, item_search);
}

// Handle grocery search
function VK_search_grocery(search_text) {
    let search_grocery = groceries.filter((ele) => {
        return ele.name.toLowerCase().includes(search_text.toLowerCase());
    });

    VK_update_search_display();
    VK_print_grocery_results(search_grocery);
    console.log(search_grocery);
}

// Clear search results and reset UI
function VK_reset_search() {
    document.getElementById('VK_popular_dishes').classList.remove('d-none');
    document.getElementById('VK_search_history').classList.remove('d-none');
    document.getElementById('VK_megnifine').classList.remove('d-none');
    document.getElementById('VK_results').classList.add('d-none');
    document.getElementById('VK_search_results').classList.add('d-none');
}

// Update UI when search results are displayed
function VK_update_search_display() {
    document.getElementById('VK_popular_dishes').classList.add('d-none');
    document.getElementById('VK_search_history').classList.add('d-none');
    document.getElementById('VK_megnifine').classList.add('d-none');
    document.getElementById('VK_results').classList.remove('d-none');
    document.getElementById('VK_search_results').classList.remove('d-none');
}

// clear search btn
function VK_clear() {
    VK_reset_search();
    document.querySelector('.VK_input_cancel').classList.add('d-none');
    document.getElementById('VK_search_box').value = "";
}

// Print Food Search Results
function VK_print_search_result(restaurants, foodItems) {
    let restaurantDiv = document.getElementById('VK_restro_result_div');
    let itemDiv = document.getElementById('VK_item_result_div');

    restaurantDiv.innerHTML = "";
    itemDiv.innerHTML = "";

    let search_txt = document.getElementById('VK_search_box').value;

    if (restaurants.length > 0) {
        let restaurantHTML = `<h5>Restaurants for ${search_txt}</h5>`;
        restaurantHTML += restaurants.map((ele) => {
            return `
                <div class="d-flex align-items-center my-3">
                    <div class="VK_search_img">
                        <img src="/images/assets/${ele.search_icn}" class="object_cover w-100" alt="">
                    </div>
                    <div class="VK_search_item_desc py-2 ps-4">
                        <h6 class="VK_inter fw-bold text-black">${ele.name}</h6>
                        <div class="d-flex align-items-center flex-wrap">
                            <p class="VK_inter font_14 VK_search_text_desc m-0">
                                <span class="font_14 VK_review_star">
                                    <i class="fa-solid fa-star"></i>
                                </span>
                                ${ele.review}
                                <ul class="m-0 VK_search_ul">
                                    <li>20-25 mins</li>
                                </ul>
                                <ul class="m-0 VK_search_ul">
                                    <li>${ele.address}</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>`;
        }).join("");
        restaurantDiv.innerHTML = restaurantHTML;
    }

    if (foodItems.length > 0) {
        let itemHTML = `<h5>Food Items</h5>`;
        itemHTML += foodItems.map((ele) => {
            return `
                <div class="d-flex align-items-center my-3">
                    <div class="VK_search_img">
                        <img src="/images/assets/${ele.search_icn}" class="w-100" alt="">
                    </div>
                    <div class="VK_search_item_desc py-2 ps-4">
                        <h6 class="VK_inter fw-bold text-black">${ele.name}</h6>
                        <p class="VK_inter font_14 VK_search_text_desc m-0">Dish</p>
                    </div>
                </div>`;
        }).join("");
        itemDiv.innerHTML = itemHTML;
    }
}

// Print Grocery Search Results
function VK_print_grocery_results(groceryItems) {
    let groceryDiv = document.getElementById('VK_restro_result_div');
    groceryDiv.innerHTML = "";

    let search_txt = document.getElementById('VK_search_box').value;

    if (groceryItems.length > 0) {
        let groceryHTML = groceryItems.map((ele) => {
            return `
                <div class="d-flex align-items-center my-3">
                    <div class="VK_search_img">
                        <img src="/images/assets/${ele.image}" class="w-100" alt="">
                    </div>
                    <div class="VK_search_item_desc py-2 ps-4">
                        <h6 class="VK_inter fw-bold text-black">${ele.name}</h6>
                    </div>
                </div>`;
        }).join("");
        groceryDiv.innerHTML = groceryHTML;
    }
}


// food data
let VK_popular_dishes = [
    {
        name: "Burger",
        image: "icn1.png"
    },
    {
        name: "Pizza",
        image: "icn4.png"
    },
    {
        name: "Sandwich",
        image: "icn5.png"
    },
    {
        name: "Dosa",
        image: "icn6.png"
    },
    {
        name: "Idli",
        image: "icn7.png"
    },
    {
        name: "Samosa",
        image: "icn8.png"
    },
    {
        name: "Kachori",
        image: "icn9.png"
    },
]

// grocery data
var groceries = [
    {
        name: "Fruits",
        image: "icn10.png"
    },
    {
        name: "Atta & Dal",
        image: "icn11.png"
    },
    {
        name: "Dairy & Breads",
        image: "icn12.png"
    },
    {
        name: "Cold Drinks",
        image: "icn13.png"
    },
    {
        name: "Fruits",
        image: "icn10.png"
    },
    {
        name: "Cold Drinks",
        image: "icn13.png"
    },
    {
        name: "Atta & Dal",
        image: "icn12.png"
    },
]

// popular dish
function VK_popular_dish_data() {
    let div = document.getElementById('VK_popular_dish_div');
    let category = localStorage.getItem('category');

    if (div) {
        if (category === "food") {
            document.getElementById('VK_search_popular').innerText = "Popular Dishes";
            let html = VK_popular_dishes.map((el) => {
                return `
                <div class="VK_popular_item d-flex flex-column">
                    <div class="VK_popular_food_image align-self-center">
                        <img src="/images/assets/${el.image}" class="w-100 object_cover popular_img" alt="">
                    </div>
                    <p class="text-center text-black fw-600 VK_inter mt-auto">${el.name}</p>
                </div>`;
            }).join("");
            div.innerHTML = html;
        } else if (category === "groceries") {
            document.getElementById('VK_search_popular').innerText = "Groceries";
            let html = groceries.map((el) => {
                return `
                <div class="VK_popular_item d-flex flex-column">
                    <div class="VK_popular_food_image align-self-center">
                        <img src="/images/assets/${el.image}" class="w-100 object_cover popular_img" alt="">
                    </div>
                    <p class="text-center text-black fw-600 VK_inter mt-auto">${el.name}</p>
                </div>`;
            }).join("");
            div.innerHTML = html;
        }
    }
}
