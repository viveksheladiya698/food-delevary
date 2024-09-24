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
                                <div class="d_icon d-flex align-items-center justify-content-center">
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
                                <div class="d_icon d-flex align-items-center justify-content-center">
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
