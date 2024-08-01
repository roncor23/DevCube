
  // Initialize an empty cart array
  let cart = [];

  // Function to add product to the cart
  function addToCart(productId) {
    // Find the product element by data-id
    const productElement = document.querySelector(`.card[data-id="${productId}"]`);
    if (!productElement) return;

    // Extract product details
    const productTitle = productElement.querySelector('.card-title').textContent;
    const productDescription = productElement.querySelector('.card-description').textContent;
    const productPrice = productElement.querySelector('.card-price').textContent;
    const packSelect = productElement.querySelector('.pack-select');
    const packSize = packSelect ? packSelect.value : '1';
    const quantityElement = productElement.querySelector('.quantity');
    const quantity = quantityElement ? parseInt(quantityElement.textContent, 10) : 1;

    // Create a product object
    const product = {
      id: productId,
      title: productTitle,
      description: productDescription,
      price: productPrice,
      packSize: packSize,
      quantity: quantity
    };

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex > -1) {
      // Update the quantity if the product is already in the cart
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Add the new product to the cart
      cart.push(product);
    }

    // Optionally, you can update the UI or store the cart data in local storage
    console.log('Product added to cart:', product);
    console.log('Current cart:', cart);

    const cartNo = cart.length;
    const cartBadge = document.getElementById('cart-badge');
    cartBadge.textContent = cartNo;
  }

  // Attach event listeners to all Add To Cart buttons
  document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-id');
      addToCart(productId);
    });
  });

  // Additional functionality like increment and decrement buttons can be implemented similarly
  document.querySelectorAll('.increment').forEach(button => {
    button.addEventListener('click', () => {
      const quantityElement = button.previousElementSibling;
      let quantity = parseInt(quantityElement.textContent, 10);
      quantityElement.textContent = ++quantity;
    });
  });

  document.querySelectorAll('.decrement').forEach(button => {
    button.addEventListener('click', () => {
      const quantityElement = button.nextElementSibling;
      let quantity = parseInt(quantityElement.textContent, 10);
      if (quantity > 1) {
        quantityElement.textContent = --quantity;
      }
    });
  });

