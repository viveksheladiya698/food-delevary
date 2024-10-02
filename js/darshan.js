let wishlist = [];

// ---------------------------------------------------------------  Grocery item  ------------------------------------------------

const grocery = [
    {
        id: 1,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 4,
        type: "Food",

    },
    {
        id: 2,
        img: "item2.png",
        name: "Pineapple",
        price: 60,
        review: 4,
        type: "Food",
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
        type: "Food",
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
    }
];

function generateStars(review) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= review) {
            starsHTML += '<img src="/darshan_img/Star.png" alt="Full Star">';
        } else {
            starsHTML += '<img src="/darshan_img/star1.png" class="d_emptystar" alt="Empty Star">';
        }
    }
    return starsHTML;
}

function generateGroceryItems() {
    const d_grocery = document.getElementById('D_grocery');

    if (d_grocery) {
        let groceryHTML = '';

        grocery.forEach(item => {
            // Stringify the item object to safely pass it as a parameter
            const itemJSON = JSON.stringify(item).replace(/"/g, '&quot;');
            const isWishlisted = wishlist.some(wishlistItem => wishlistItem.id === item.id);

            groceryHTML += `
                <div class="col-sm-6 col-lg-4 col-xl-3">
                    <div class="d_item">
                    <a href="personal.html?item_id=${item.id}">
                        <div class="d_img">
                            <img src="/darshan_img/${item.img}" alt="${item.name}">
                            <div class="d_overlayimg"></div>
                        </div>
                        </a>
                        <div class="d_iconoverlay">
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="d_icon d-flex align-items-center justify-content-center cart-icon" data-id="${item.id}" onclick="addToCart(${itemJSON})">
                                    <img src="/darshan_img/cart.png" alt="Cart">
                                </div>
                                <div class="d_heart d_icon d-flex align-items-center justify-content-center" onclick="toggleWishlistItem(event,${itemJSON})">
                                    <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                                </div>
                            </div>
                        </div>
                        <div class="d_content text-center">
                            <div class="d_title">${item.name}</div>
                            <div class="d_price">Price : $${item.price}</div>
                            <div class="d-flex align-items-center justify-content-center">
                                <div class="d_star me-3">
                                    ${generateStars(item.review)}
                                </div>
                                <div class="d_review">${item.review} Review</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        d_grocery.innerHTML = groceryHTML;
    }
}

// Call the function to generate the grocery items
generateGroceryItems();

// ---------------------------------------------------------------  Grocery item  ------------------------------------------------

// ---------------------------------------------------------------  Single Item   ------------------------------------------------

document.addEventListener('DOMContentLoaded', geturl)

function geturl() {
    let url = window.location.search
    let params = new URLSearchParams(url)
    let id = params.get("item_id")
    console.log(id);
    let single_item = grocery.find(el => el.id == id)
    console.log(single_item);
    singleproduct(single_item);

}

function singleproduct(item) {
    let oneitem = document.getElementById('D_singleproduct');

    const subImages = [
        { target: "subimg1.png", alt: "Product view 1" },
        { target: "subimg2.png", alt: "Product view 2" },
        { target: "subimg3.png", alt: "Product view 3" },
        { target: "subimg4.png", alt: "Product view 4" }
    ];
    
    const subImagesHTML = subImages.map((img, index) => `
        <div class="d_img d_cur${index === 3 ? ' mb-lg-0' : ''}" data-target="${img.target}">
            <img src="/darshan_img/${img.target}" alt="${img.alt}">
        </div>
    `).join('');

    if (oneitem) {
        oneitem.innerHTML = `
        <div class="col-12 col-lg-5">
            <div class="row g-3 flex-lg-row flex-column-reverse">
                <div class="col-sm-12 col-lg-3">
                    <div class="sub_img d-flex justify-content-md-between justify-content-center flex-lg-column align-items-center">
                        ${subImagesHTML}
                    </div>
                </div>
                <div class="col-sm-12 col-lg-9">
                    <div class="d_img" id="mainImage">
                        <img src="/darshan_img/${item.img}" alt="${item.name}">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-7 align-self-center">
            <div class="d_content">
                <h2 class="mb-2">${item.name}</h2>
                <div class="d_price mb-2">
                    Price: $${item.price}
                    ${item.originalPrice ? `<span class="text-decoration-line-through">$${item.originalPrice}</span>` : ''}
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="d_star me-3">
                        ${generateStars(item.review)}
                    </div>
                    <div class="d_review">${item.review} Review</div>
                </div>
                <div class="d_desc">${item.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inidunt ut labore et dolore magna aliqua.'}</div>
                <div class="d-sm-flex mt-lg-5 mt-4">
                    <div class="d_cta1">
                        <a href="#" class="d-block text-center text-decoration-none" 
                           onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')}); return false;">
                            Add to cart
                        </a>
                    </div>
                    <div class="d_cta2">
                        <a href="/foodcart.html" class="d-block text-center text-decoration-none">View cart</a>
                    </div>
                </div>
            </div>
        </div>`;

        // Add event listeners for thumbnail images
        const thumbnails = oneitem.querySelectorAll('.d_cur');
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function () {
                const targetImage = this.getAttribute('data-target');
                const mainImage = document.getElementById('mainImage').querySelector('img');
                mainImage.src = `/darshan_img/${targetImage}`;
            });
        });
    }
}

// ---------------------------------------------------------------  Single Item   ------------------------------------------------


// ---------------------------------------------------------------  Grocery Discount item  ------------------------------------------------


// Discount Grocery

const discountGrocery = [
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
];


function generateDiscountGroceryItems() {
    const d_discountgrocery = document.getElementById('D_discountgrocery');

    if (d_discountgrocery) {
        let groceryHTML = '';

        discountGrocery.forEach(item => {
            // Stringify the item object to safely pass it as a parameter
            const itemJSON = JSON.stringify(item).replace(/"/g, '&quot;');
            const isWishlisted = wishlist.some(wishlistItem => wishlistItem.id === item.id);
            groceryHTML += `
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="d_item">
                    <a href="personal.html?item_id=${item.id}">
                        <div class="d_img">
                            <img src="/darshan_img/${item.img}" alt="${item.name}">
                            <div class="d_overlayimg"></div>
                        </div>
                        ${item.discount ? `
                        <div class="d_discountvalue">
                            <span class="mb-0">${item.discount}% OFF</span>
                        </div>
                        ` : ''}
                        </a>
                        <div class="d_iconoverlay">
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="d_icon d-flex align-items-center justify-content-center cart-icon" data-id="${item.id}" onclick="addToCart(${itemJSON})">
                                    <img src="/darshan_img/cart.png" alt="Cart">
                                </div>
                                <div class="d_heart d_icon d-flex align-items-center justify-content-center" onclick="toggleWishlistItem(event,${itemJSON})">
                                    <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                                </div>
                            </div>
                        </div>
                        <div class="d_content text-center">
                            <div class="d_title">${item.name}</div>
                            <div class="d_price">Price : $${item.price}</div>
                            <div class="d-flex align-items-center justify-content-center">
                                <div class="d_star me-3">
                                    ${generateStars(item.review)}
                                </div>
                                <div class="d_review">${item.review} Review</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        d_discountgrocery.innerHTML = groceryHTML;
    }
}

// Call the function to generate the discount grocery items
generateDiscountGroceryItems();

// ---------------------------------------------------------------  Grocery Discount item  ------------------------------------------------



// ---------------------------------------------------------------  Grocery Category ------------------------------------------------

// Category

const categoryGrocery = [
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
];



// Function to generate HTML for grocery items
function generateGroceryItemHTML(item) {
    // Stringify the item object to safely pass it as a parameter
    const itemJSON = JSON.stringify(item).replace(/"/g, '&quot;');
    const isWishlisted = wishlist.some(wishlistItem => wishlistItem.id === item.id);
    return `
        <div class="col-sm-6 col-lg-4 col-xl-2 d_lgwidth">
            <div class="d_item">
            <a href="personal.html>item_id=${item.id}">
                <div class="d_img">
                    <img src="/darshan_img/${item.img}" alt="${item.name}">
                    <div class="d_overlayimg"></div>
                </div>
                ${item.discount ? `
                <div class="d_discountvalue">
                    <span class="mb-0">${item.discount}% OFF</span>
                </div>
                ` : ''}
                </a>
                <div class="d_iconoverlay">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="d_icon d-flex align-items-center justify-content-center cart-icon" data-id="${item.id}" onclick="addToCart(${itemJSON})">
                            <img src="/darshan_img/cart.png" alt="Cart">
                        </div>
                        <div class="d_heart d_icon d-flex align-items-center justify-content-center" onclick="toggleWishlistItem(event,${itemJSON})">
                            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        </div>
                    </div>
                </div>
                <div class="d_content text-center">
                    <div class="d_title">${item.name}</div>
                    <div class="d_price">Price : $${item.price}</div>
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="d_star me-3">
                            ${generateStars(item.review)}
                        </div>
                        <div class="d_review">${item.review} Review</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to render grocery items
function renderGroceryItems(items) {
    if (document.getElementById('D_categorygrocery')) {
        const container = document.getElementById('D_categorygrocery');
        container.innerHTML = items.map(generateGroceryItemHTML).join('');
        // Call to add event listeners after rendering
        // addCartEventListeners();
    }
}

// Function to filter grocery items
function filterGroceryItems() {
    let filteredItems = [...categoryGrocery];

    // Category filter
    const selectedCategory = document.querySelector('#categoryFilter li.active');
    if (selectedCategory && selectedCategory.dataset.category.toLowerCase() !== 'all') {
        filteredItems = filteredItems.filter(item =>
            item.category.toLowerCase() === selectedCategory.dataset.category.toLowerCase()
        );
    }

    // Rating filter
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        filteredItems = filteredItems.filter(item => item.review >= parseInt(selectedRating.value));
    }

    // Price filter
    const selectedPrices = Array.from(document.querySelectorAll('input[name="price"]:checked'))
        .map(input => input.value);
    if (selectedPrices.length > 0) {
        filteredItems = filteredItems.filter(item => {
            return selectedPrices.some(range => {
                const [min, max] = range.split('-').map(Number);
                return item.price >= min && (max ? item.price <= max : true);
            });
        });
    }

    // Offer filter
    const selectedDiscount = document.querySelector('input[name="discount"]:checked');
    if (selectedDiscount) {
        const [min, max] = selectedDiscount.value.split('-').map(Number);
        filteredItems = filteredItems.filter(item => item.discount >= min && (max ? item.discount <= max : true));
    }

    return filteredItems;
}



// Function to sort grocery items
function sortGroceryItems(items) {
    const sortInput = document.querySelector('input[name="sort"]:checked');
    const sortMethod = sortInput ? sortInput.value : null; // Safely access the value

    if (!sortMethod) {
        return items; // If no sort method is selected, return items as is
    }

    switch (sortMethod) {
        case 'price-low-high':
            return items.sort((a, b) => a.price - b.price);
        case 'price-high-low':
            return items.sort((a, b) => b.price - a.price);
        case 'rating':
            return items.sort((a, b) => b.review - a.review);
        case 'discount':
            return items.sort((a, b) => b.discount - a.discount);
        default:
            return items;
    }
}
// Function to update the display
function updateDisplay() {
    let items = filterGroceryItems();
    items = sortGroceryItems(items);
    renderGroceryItems(items);
}

// Event listeners for filters and sorting
document.querySelectorAll('#categoryFilter input, input[name="rating"], input[name="price"], input[name="discount"], input[name="sort"]')
    .forEach(input => {
        input.addEventListener('change', updateDisplay);
    });


// Category filter functionality

// New filtering functions

function filterItems(items, filters) {
    return items.filter(item => {
        if (filters.price && (item.price < 70 || item.price > 110)) return false;
        if (filters.offers && !item.discount) return false;
        if (filters.rating && item.review < 3) return false;
        if (filters.fastDelivery && !item.fastDelivery) return false;
        return true;
    });
}

function getActiveFilters() {
    const activeFilters = {};
    document.querySelectorAll('.d_search').forEach(element => {
        const filterType = element.dataset.filter;
        activeFilters[filterType] = element.classList.contains('active');
    });
    return activeFilters;
}

function handleFilterClick(element, isCloseButton = false) {
    if (isCloseButton) {
        element.closest('.d_search').classList.remove('active');
    } else {
        element.classList.toggle('active');
    }

    const activeFilters = getActiveFilters();
    const filteredItems = filterItems(categoryGrocery, activeFilters);
    renderGroceryItems(filteredItems);
}

function addFilterEventListeners() {
    // Click event for filter elements
    document.querySelectorAll('.d_search').forEach(element => {
        element.addEventListener('click', (e) => {
            if (!e.target.classList.contains('close-btn')) {
                handleFilterClick(element);
            }
        });
    });

    // Click event for close buttons
    document.querySelectorAll('.close-btn').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent filter click event
            handleFilterClick(closeBtn, true);
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderGroceryItems(categoryGrocery);
    addFilterEventListeners();
});


// Initial render
updateDisplay();

// ---------------------------------------------------------------  Grocery Category ------------------------------------------------

// ---------------------------------------------------------------  Related products ------------------------------------------------

// Function to get random items from the category array
function getRandomItems(array, count) {
    return array.slice(0, count);
}

// Function to generate HTML for related product items
function generateRelatedProductHTML(item) {
    const itemJSON = JSON.stringify(item).replace(/"/g, '&quot;');
    const isWishlisted = wishlist.some(wishlistItem => wishlistItem.id === item.id);

    return `
        <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="d_item">
                    <a href="personal.html?item_id=${item.id}">
                        <div class="d_img">
                            <img src="/darshan_img/${item.img}" alt="${item.name}">
                            <div class="d_overlayimg"></div>
                        </div>
                        ${item.discount ? `
                        <div class="d_discountvalue">
                            <span class="mb-0">${item.discount}% OFF</span>
                        </div>
                        ` : ''}
                        </a>
                        <div class="d_iconoverlay">
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="d_icon d-flex align-items-center justify-content-center cart-icon" data-id="${item.id}">
                                    <img src="/darshan_img/cart.png" alt="Cart">
                                </div>
                                <div class="d_heart d_icon d-flex align-items-center justify-content-center" onclick="toggleWishlistItem(event,${itemJSON})">
                                    <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                                </div>
                            </div>
                        </div>
                        <div class="d_content text-center">
                            <div class="d_title">${item.name}</div>
                            <div class="d_price">Price : $${item.price}</div>
                            <div class="d-flex align-items-center justify-content-center">
                                <div class="d_star me-3">
                                    ${generateStars(item.review)}
                                </div>
                                <div class="d_review">${item.review} Review</div>
                            </div>
                        </div>
                    </div>
                </div>
    `;
}

// Function to render related products
function renderRelatedProducts() {
    const relatedProductsContainer = document.getElementById('D_relatedproduct');
    if (relatedProductsContainer) {
        // Get 4 random items from categoryGrocery
        const relatedItems = getRandomItems(categoryGrocery, 4);

        // Generate HTML for related products
        const relatedProductsHTML = relatedItems.map(generateRelatedProductHTML).join('');

        // Set the HTML content
        relatedProductsContainer.innerHTML = relatedProductsHTML;

        // Add cart event listeners to the new items
        // addCartEventListeners();
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function () {
    renderRelatedProducts();
});

// ---------------------------------------------------------------  Related products ------------------------------------------------

// ---------------------------------------------------------------  Wishlist  ------------------------------------------------

// Wishlist functionality


// Function to load wishlist from local storage
function loadWishlist() {
    const storedWishlist = localStorage.getItem('wishlist');
    wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
    return wishlist;
}

// Function to save wishlist to local storage
function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Function to toggle wishlist items
function toggleWishlistItem(event, item) {
    event.preventDefault();
    const index = wishlist.findIndex(wishlistItem => wishlistItem.id === item.id);
    if (index === -1) {
        // Add to wishlist
        wishlist.push(item);
    } else {
        // Remove from wishlist
        wishlist.splice(index, 1);
    }
    saveWishlist();
    updateWishlistUI(wishlist);
}


// Function to update the wishlist UI
const wishlistContainer = document.getElementById('wishlist-container');
function updateWishlistUI(filteredWishlist) {
    if (wishlistContainer) {
        wishlistContainer.innerHTML = generateWishlistHTML(filteredWishlist);
    }
    updateGroceryItemsUI(filteredWishlist);
}

// Function to generate HTML for the wishlist
function generateWishlistHTML(wishlist) {
    return wishlist.map(item => `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div class="d_item" >
            <a href="personal.html">
                <div class="d_img">
                    <img src="/darshan_img/${item.img}" alt="${item.name}">
                    <div class="d_heart d-flex justify-content-center align-items-center" onclick="toggleWishlistItem(event,${JSON.stringify(item).replace(/"/g, '&quot;')})">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                </div>
                </a>
                <div class="d_con">
                    <div class="d_proname">${item.name}</div>
                    <div class="d_add">Price: $${item.price}</div>
                    <div class="d-flex">
                        <div class="d_star align-items-center me-3">
                            ${generateStars(item.review)}
                        </div>
                        <div class="d_review align-self-center">${item.review} Review</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Function to update grocery items UI

function updateGroceryItemsUI() {
    const groceryItems = document.querySelectorAll('.d_item');
    groceryItems.forEach(item => {
        const cartIcon = item.querySelector('.cart-icon');
        if (cartIcon) {
            const itemId = parseInt(cartIcon.dataset.id);
            const heartIcon = item.querySelector('.d_heart i');
            const isWishlisted = wishlist.some(wishlistItem => wishlistItem.id === itemId);

            if (heartIcon) {
                heartIcon.className = isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
            }
        }
    });
}

// Function to render the wishlist
function renderWishlist(filter) {
    // const wishlistContainer = document.getElementById('wishlistContainer');
    let filteredWishlist;

    // Filter the wishlist based on the selected filter
    if (filter === 'all') {
        filteredWishlist = wishlist; // Show all items
    } else {
        filteredWishlist = wishlist.filter(item => item.type.toLowerCase() === filter.toLowerCase());
    }

    // wishlistContainer.innerHTML = generateWishlistHTML(filteredWishlist);
    updateWishlistUI(filteredWishlist);
}

// Event listener for filter links
document.querySelectorAll('.d_type a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const filter = this.getAttribute('data-filter');

        // Remove 'active' class from all links and add to the clicked link
        document.querySelectorAll('.d_type a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');

        // Render wishlist based on selected filter
        renderWishlist(filter);
    });
});

// Initial render
renderWishlist('all');

// Function to initialize the page
function initializePage() {
    let wishlist = loadWishlist();
    updateWishlistUI(wishlist);
}

// Call the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);

// ---------------------------------------------------------------  Wishlist  ------------------------------------------------

// ---------------------------------------------------------------  Add to cart  -----------------------------------------------


function addToCart(item) {
    let data = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = data.find(el => el.id === item.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        data.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(data));
    showcarttoast();
    displayCart();
}

function removeFromCart(itemId) {
    let data = JSON.parse(localStorage.getItem('cart')) || [];
    data = data.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(data));
    displayCart();
}

function updateQuantity(itemId, change) {
    let data = JSON.parse(localStorage.getItem('cart')) || [];
    const item = data.find(el => el.id === itemId);

    if (item) {
        if (change < 0 && item.quantity <= 1) {
            return;
        }
        item.quantity += change;

        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            localStorage.setItem('cart', JSON.stringify(data));
            displayCart();
        }
    }
}

function calculateTotals(cartItems) {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryCharge = cartItems.length > 0 ? 10 : 0;
    const total = subtotal + deliveryCharge;

    return { subtotal, total };
}

function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContent = document.getElementById('cartContent');
    const cartlist = document.getElementById('d_cartlist');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const itemCountSpan = document.getElementById('itemCount');
    const billCountSpan = document.getElementById('billitemCount');

    if (cartItems.length > 0) {
        if (emptyCartMessage) {
            emptyCartMessage.classList.add('d-none');
        }
        if (cartlist) {
            cartlist.classList.remove('d-none');
        }

        if (cartContent) {

            const cartHTML = cartItems.map(item => `
            <div class="d_box mb-4">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="d_img">
                            <img src="/darshan_img/${item.img}" alt="${item.name}">
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="d_text h-100 d-flex flex-column">
                            <div class="d_name">${item.name}</div>
                            <div class="d_price">Price: $${item.price}</div>
                            <div class="d_flavor">${item.flavor ? `Flavor : ${item.flavor}` : ""}</div>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <a href="#" class="d_remove" onclick="removeFromCart(${item.id})">Remove</a>
                                <div class="d_increbtn d-flex align-items-center justify-content-between">
                                    <i class="fa-solid fa-minus ps-3" onclick="updateQuantity(${item.id}, -1)"></i>
                                    <div class="d_itemnum">${item.quantity}</div>
                                    <i class="fa-solid fa-plus pe-3" onclick="updateQuantity(${item.id}, 1)"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
            cartContent.innerHTML = cartHTML;
        }

        if (itemCountSpan) {
            itemCountSpan.textContent = cartItems.length;
        }
        if (billCountSpan) {
            billCountSpan.textContent = cartItems.length;
        }

        // Update totals
        const { subtotal, total } = calculateTotals(cartItems);
        if (document.getElementById('subTotal')) {
            document.getElementById('subTotal').textContent = `$${subtotal.toFixed(2)}`;
        }
        if (document.getElementById('totalAmount')) {
            document.getElementById('totalAmount').textContent = `$${total.toFixed(2)}`;
        }
    } else {
        if (emptyCartMessage) {
            emptyCartMessage.classList.remove('d-none');
        }
        if (cartlist) {
            cartlist.classList.add('d-none');
        }
    }
}

function initializePageCart() {
    displayCart();
}

// Initial call to display the cart on page load
document.addEventListener('DOMContentLoaded', initializePageCart);

function showcarttoast() {
    if (document.getElementById('d_toastcart')) {
        let data = JSON.parse(localStorage.getItem('cart')) || [];
        if (data.length > 0) {
            document.getElementById('d_toastcart').classList.remove('d-none')
            document.getElementById('d_cartcnt').innerText = data.length
        }
    }
}

showcarttoast()