const grocery = [
    {
        id: 1,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 4
    },
    {
        id: 2,
        img: "item2.png",
        name: "Pineapple",
        price: 60,
        review: 4,
    },
    {
        id: 3,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 5,
    },
    {
        id: 4,
        img: "item4.png",
        name: "Atta",
        price: 100,
        review: 5,
    },
    {
        id: 5,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 5,
    },
    {
        id: 6,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 5,
    },
    {
        id: 7,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 5,
    },
    {
        id: 8,
        img: "item2.png",
        name: "Pineapple",
        price: 60,
        review: 5,
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
            groceryHTML += `
                <div class="col-sm-6 col-lg-4 col-xl-3">
                    <div class="d_item">
                        <div class="d_img">
                            <img src="/darshan_img/${item.img}" alt="${item.name}">
                            <div class="d_overlayimg"></div>
                        </div>
                        <div class="d_iconoverlay">
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="d_icon d-flex align-items-center justify-content-center cart-icon" data-id="${item.id}">
                                    <img src="/darshan_img/cart.png" alt="Cart">
                                </div>
                                <div class="d_icon d-flex align-items-center justify-content-center">
                                    <img src="/darshan_img/wishlist.png" alt="Wishlist">
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

// Discount Grocery

const discountGrocery = [
    {
        id: 1,
        img: "item5.png",
        name: "Tea and Coffee",
        price: 20,
        review: 4,
        discount: 'Get 30',
    },
    {
        id: 2,
        img: "item2.png",
        name: "Pineapple",
        price: 60,
        review: 4,
        discount: '',
    },
    {
        id: 3,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '40',
    },
    {
        id: 4,
        img: "item4.png",
        name: "Atta",
        price: 110,
        review: 4,
        discount: '30',
    },
    {
        id: 5,
        img: "item6.png",
        name: "Sauces and Spreads",
        price: 120,
        review: 4,
        discount: 'Get 30',
    },
    {
        id: 6,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '10',
    },
    {
        id: 7,
        img: "item7.png",
        name: "Cold Drinks & Juices",
        price: 20,
        review: 4,
        discount: '',
    },
    {
        id: 7,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 4,
        discount: '',
    },
];


function generateDiscountGroceryItems() {
    const d_discountgrocery = document.getElementById('D_discountgrocery');

    if (d_discountgrocery) {
        let groceryHTML = '';

        discountGrocery.forEach(item => {
            groceryHTML += `
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="d_item">
                        <div class="d_img">
                            <img src="/darshan_img/${item.img}" alt="${item.name}">
                            <div class="d_overlayimg"></div>
                        </div>
                        ${item.discount ? `
                        <div class="d_discountvalue">
                            <span class="mb-0">${item.discount}% OFF</span>
                        </div>
                        ` : ''}
                        <div class="d_iconoverlay">
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="d_icon d-flex align-items-center justify-content-center cart-icon" data-id="${item.id}">
                                    <img src="/darshan_img/cart.png" alt="Cart">
                                </div>
                                <div class="d_icon d-flex align-items-center justify-content-center">
                                    <img src="/darshan_img/wishlist.png" alt="Wishlist">
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

// Category


const categoryGrocery = [
    {
        id: 1,
        img: "item5.png",
        name: "Tea and Coffee",
        price: 20,
        review: 4,
        discount: '30',
        category: "tea and coffee",
    },
    {
        id: 2,
        img: "item2.png",
        name: "Pineapple",
        price: 60,
        review: 4,
        discount: '',
        category: "Fresh Fruits",
    },
    {
        id: 3,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '40',
        category: "Dairy, Bread and Eggs"
    },
    {
        id: 4,
        img: "item4.png",
        name: "Atta",
        price: 110,
        review: 4,
        discount: '30',
        category:"Atta, Rice and Dals",
    },
    {
        id: 5,
        img: "item6.png",
        name: "Sauces and Spreads",
        price: 120,
        review: 4,
        discount: '30',
        category:"Sauces and Spreads",
    },
    {
        id: 6,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '10',
        category:"Dairy, Bread and Eggs",
    },
    {
        id: 7,
        img: "item7.png",
        name: "Cold Drinks & Juices",
        price: 20,
        review: 4,
        discount: '',
        category:"Cold Drinks and Juices"
    },
    {
        id: 7,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 4,
        discount: '',
        category:"Fresh Vegetables"
    },
    {
        id: 1,
        img: "item5.png",
        name: "Tea and Coffee",
        price: 20,
        review: 4,
        discount: '30',
        category: "tea and coffee",
    },
    {
        id: 2,
        img: "item2.png",
        name: "Pineapple",
        price: 60,
        review: 4,
        discount: '',
        category: "Fresh Fruits",
    },
    {
        id: 3,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '40',
        category: "Dairy, Bread and Eggs"
    },
    {
        id: 4,
        img: "item4.png",
        name: "Atta",
        price: 110,
        review: 4,
        discount: '30',
        category:"Atta, Rice and Dals",
    },
    {
        id: 5,
        img: "item6.png",
        name: "Sauces and Spreads",
        price: 120,
        review: 4,
        discount: '30',
        category:"Sauces and Spreads",
    },
    {
        id: 6,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '10',
        category:"Dairy, Bread and Eggs",
    },
    {
        id: 7,
        img: "item7.png",
        name: "Cold Drinks & Juices",
        price: 20,
        review: 4,
        discount: '',
        category:"Cold Drinks and Juices"
    },
    {
        id: 7,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 4,
        discount: '',
        category:"Fresh Vegetables"
    },
];

let cartItems = 0;
let toastTimeout;
let toastElement = null;

// Function to generate HTML for grocery items
function generateGroceryItemHTML(item) {
    return `
        <div class="col-sm-6 col-lg-4 col-xl-2 d_lgwidth">
            <div class="d_item">
                <div class="d_img">
                    <img src="/darshan_img/${item.img}" alt="${item.name}">
                    <div class="d_overlayimg"></div>
                </div>
                ${item.discount ? `
                <div class="d_discountvalue">
                    <span class="mb-0">${item.discount}% OFF</span>
                </div>
                ` : ''}
                <div class="d_iconoverlay">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="d_icon d-flex align-items-center justify-content-center cart-icon" data-id="${item.id}">
                            <img src="/darshan_img/cart.png" alt="Cart">
                        </div>
                        <div class="d_icon d-flex align-items-center justify-content-center">
                            <img src="/darshan_img/wishlist.png" alt="Wishlist">
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
    const container = document.getElementById('D_categorygrocery');
    container.innerHTML = items.map(generateGroceryItemHTML).join('');
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
    const sortMethod = document.querySelector('input[name="sort"]:checked').value;
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
document.getElementById('categoryFilter').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        const activeItem = this.querySelector('li.active');
        if (activeItem) {
            activeItem.classList.remove('active');
            activeItem.style.backgroundColor = '';
        }
        e.target.classList.add('active');
        e.target.style.backgroundColor = '#f5f5f5';
        updateDisplay();
    }
});

// Function to show toast

function showToast(message) {
    if (toastElement) {
        document.body.removeChild(toastElement);
    }

    toastElement = document.createElement('div');
    toastElement.className = 'd_toatify';
    toastElement.innerHTML = `
        <div class="d_toast">
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <div class="d_img">
                        <img src="/darshan_img/check.png" alt="">
                    </div>
                    <p class="mb-0">${message}</p>
                </div>
                <div class="d_link">
                    <a href="">View cart</a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(toastElement);

    // Clear any existing timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    // Set a new timeout to remove the toast after 3 seconds
    toastTimeout = setTimeout(() => {
        if (toastElement) {
            document.body.removeChild(toastElement);
            toastElement = null;
        }
    }, 3000);
}
// Cart functionality
document.getElementById('D_categorygrocery').addEventListener('click', function(e) {
    if (e.target.closest('.cart-icon')) {
        const itemId = e.target.closest('.cart-icon').dataset.id;
        cartItems++;
        showToast(`${cartItems} item${cartItems > 1 ? 's' : ''} added`);
    }
});


// Initial render
updateDisplay();
