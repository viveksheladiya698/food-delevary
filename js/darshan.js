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
        addCartEventListeners();
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
        addCartEventListeners();
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
        category: "Atta, Rice and Dals",
    },
    {
        id: 5,
        img: "item6.png",
        name: "Sauces and Spreads",
        price: 120,
        review: 4,
        discount: '30',
        category: "Sauces and Spreads",
    },
    {
        id: 6,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '10',
        category: "Dairy, Bread and Eggs",
    },
    {
        id: 7,
        img: "item7.png",
        name: "Cold Drinks & Juices",
        price: 20,
        review: 4,
        discount: '',
        category: "Cold Drinks and Juices"
    },
    {
        id: 7,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 4,
        discount: '',
        category: "Fresh Vegetables"
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
        category: "Atta, Rice and Dals",
    },
    {
        id: 5,
        img: "item6.png",
        name: "Sauces and Spreads",
        price: 120,
        review: 4,
        discount: '30',
        category: "Sauces and Spreads",
    },
    {
        id: 6,
        img: "item3.png",
        name: "Breads",
        price: 70,
        review: 4,
        discount: '10',
        category: "Dairy, Bread and Eggs",
    },
    {
        id: 7,
        img: "item7.png",
        name: "Cold Drinks & Juices",
        price: 20,
        review: 4,
        discount: '',
        category: "Cold Drinks and Juices"
    },
    {
        id: 7,
        img: "item1.png",
        name: "Tomato",
        price: 20,
        review: 4,
        discount: '',
        category: "Fresh Vegetables"
    },
];



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
    if(document.getElementById('D_categorygrocery'))
    {
    const container = document.getElementById('D_categorygrocery');
    container.innerHTML = items.map(generateGroceryItemHTML).join('');
       // Call to add event listeners after rendering
       addCartEventListeners();
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

// document.getElementById('categoryFilter').addEventListener('click', function (e) {
//     if (e.target.tagName === 'LI') {
//         const activeItem = this.querySelector('li.active');
//         if (activeItem) {
//             activeItem.classList.remove('active');
//             activeItem.style.backgroundColor = '';
//         }
//         e.target.classList.add('active');
//         e.target.style.backgroundColor = '#f5f5f5';
//         updateDisplay();
//     }
// });


// Function to show toast

let toastElement
let toastTimeout;
let cartItems = 0;

function showToast(message) {
    // Get the parent element by ID
    let par = document.getElementById('d_tost');

    // Create a new toast element
    if (toastElement) {
        toastElement.querySelector('p').innerText = message;
        clearTimeout(toastTimeout); // Clear previous timeout
    } else {
        // Create a new toast element
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

        // Append the new toast element to the specified parent
        par.appendChild(toastElement);
    };

    // Set a timeout to remove the toast after 3 seconds
    // toastTimeout = setTimeout(() => {
    //     if (toastElement) {
    //         par.removeChild(toastElement);
    //         toastElement = null; // Reset the toast element
    //     }
    // }, 3000);
}

// Function to handle cart icon click
function handleCartClick(e) {
    if (e.target.closest('.cart-icon')) {
        const itemId = e.target.closest('.cart-icon').dataset.id;
        cartItems++;
        showToast(`${cartItems} item${cartItems > 1 ? 's' : ''} added`);
    }
}

// Function to add click event listeners to cart icons
function addCartEventListeners() {
    const cartIcons = document.querySelectorAll('.cart-icon');
    cartIcons.forEach(icon => {
        icon.addEventListener('click', handleCartClick);
    });
}

// Call this function to set up event listeners once the document is loaded
document.addEventListener('DOMContentLoaded', addCartEventListeners);

// Initial render
updateDisplay();

// document.addEventListener('DOMContentLoaded', () => {
//     generateGroceryItems();

//     const productContainer = document.querySelector('.d_categorygrocery');
//     if (productContainer) {
//         debugger
//         productContainer.addEventListener('click', (e) => {
//             const productItem = e.target.closest('.d_item');
//             if (productItem) {
//                 const productId = parseInt(productItem.dataset.productId);
//                 const product = categoryGrocery.find(p => p.id === productId);
//                 if (product) {
//                     localStorage.setItem('selectedProduct', JSON.stringify(product));
//                     window.location.href = 'personal.html';
//                 }
//             }
//         });
//     }
// });

// personal.js (for personal.html - the product details page)

// document.addEventListener('DOMContentLoaded', () => {
//     const productJson = localStorage.getItem('selectedProduct');
//     if (productJson) {
//         const product = JSON.parse(productJson);
//         updateProductDetails(product);
//     }

//     // Add click event listeners for sub-images
//     const subImages = document.querySelectorAll('.sub_img .d_img');
//     subImages.forEach(img => {
//         img.addEventListener('click', () => {
//             const targetImage = img.dataset.target;
//             const mainImage = document.querySelector('#mainImage img');
//             if (mainImage) {
//                 mainImage.src = `/darshan_img/${targetImage}`;
//             }
//         });
//     });
// });

// function updateProductDetails(product) {
//     // Update main image
//     const mainImage = document.querySelector('#mainImage img');
//     if (mainImage) {
//         mainImage.src = `/darshan_img/${product.img}`;
//     }

//     // Update sub images
//     const subImages = document.querySelectorAll('.sub_img .d_img');
//     subImages.forEach((img, index) => {
//         if (product.subImages && product.subImages[index]) {
//             const imgTag = img.querySelector('img');
//             if (imgTag) {
//                 imgTag.src = `/darshan_img/${product.subImages[index]}`;
//                 img.dataset.target = product.subImages[index];
//             }
//         }
//     });

//     // Update product info
//     const productName = document.querySelector('.d_content h2');
//     if (productName) {
//         productName.textContent = product.name;
//     }
    
//     const priceElement = document.querySelector('.d_content .d_price');
//     if (priceElement) {
//         priceElement.innerHTML = `Price : $${product.price} ${product.oldPrice ? `<span class="text-decoration-line-through">$${product.oldPrice}</span>` : ''}`;
//     }
    
//     const starElement = document.querySelector('.d_content .d_star');
//     if (starElement) {
//         starElement.innerHTML = generateStars(product.review);
//     }
    
//     const reviewElement = document.querySelector('.d_content .d_review');
//     if (reviewElement) {
//         reviewElement.textContent = `${product.review} Review`;
//     }
    
//     const descElement = document.querySelector('.d_content .d_desc');
//     if (descElement) {
//         descElement.textContent = product.description;
//     }

//     // Update product info tab
//     const infoList = document.querySelectorAll('#pills-home .d_info ul');
//     if (infoList[1]) {
//         infoList[1].innerHTML = `
//             <li>${product.brand || 'N/A'}</li>
//             <li>${product.manufacturer || 'N/A'}</li>
//             <li>${product.soldBy || 'N/A'}</li>
//             <li>${product.netQty || 'N/A'}</li>
//             <li>${product.productType || 'N/A'}</li>
//             <li>${product.customerCare || 'N/A'}</li>
//         `;
//     }

//     // Update description tab
//     const descriptionElement = document.querySelector('#pills-profile .d_desciption p');
//     if (descriptionElement) {
//         descriptionElement.textContent = product.fullDescription || product.description;
//     }

//     // Update reviews tab (if you have this data)
//     // ... (update reviews here if you have the data)
// }
