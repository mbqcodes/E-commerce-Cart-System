const products = [
    { id: 1, name: "Smartphone Premium", price: 799.99, image: "images/products/smartphone.avif", description: "El último smartphone con características avanzadas y cámara de alta resolución." },
    { id: 2, name: "Auriculares Inalámbricos", price: 199.99, image: "images/products/audifonos.avif", description: "Auriculares con cancelación de ruido y sonido de alta calidad." },
    { id: 3, name: "Reloj Inteligente", price: 299.99, image: "images/products/reloj-inteligente.avif", description: "Reloj inteligente con monitor de actividad y notificaciones." },
    { id: 4, name: "Tablet Pro", price: 599.99, image: "images/products/tablet-pro.avif", description: "Tablet de alto rendimiento ideal para trabajo y entretenimiento." },
    { id: 5, name: "Laptop Gaming", price: 1299.99, image: "images/products/notebook-gaming.avif", description: "Laptop potente diseñada para gaming y tareas exigentes." },
    { id: 6, name: "Cámara DSLR", price: 899.99, image: "images/products/camara-dslr.avif", description: "Cámara profesional con lentes intercambiables y 4K video." },
    { id: 7, name: "Teclado Mecánico", price: 149.99, image: "images/products/teclado-mecanico.avif", description: "Teclado mecánico con retroiluminación RGB y switches táctiles." },
    { id: 8, name: "Monitor 4K", price: 399.99, image: "images/products/monitor-4k.avif", description: "Monitor 4K UHD con colores vibrantes y amplio ángulo de visión." },
    { id: 9, name: "Altavoz Bluetooth", price: 129.99, image: "images/products/altavoz-bluetooth.avif", description: "Altavoz portátil con sonido envolvente y batería de larga duración." },
    { id: 10, name: "Tableta Gráfica", price: 249.99, image: "images/products/tableta-grafica.avif", description: "Tableta gráfica profesional para diseñadores y artistas digitales." },
    { id: 11, name: "Consola Gaming", price: 499.99, image: "images/products/consola-gaming.avif", description: "Consola de última generación con gráficos de alta fidelidad." },
    { id: 12, name: "Drone Profesional", price: 799.99, image: "images/products/drone-profesional.avif", description: "Drone con cámara 4K y sistema de estabilización avanzado." },
    { id: 13, name: "Smart TV 55\"", price: 699.99, image: "images/products/smart-tv.avif", description: "Televisor inteligente con resolución 4K y sistema de sonido integrado." },
    { id: 14, name: "Impresora 3D", price: 349.99, image: "images/products/impresora-3d.avif", description: "Impresora 3D de alta precisión para prototipos y modelos." },
    { id: 15, name: "Router WiFi 6", price: 179.99, image: "images/products/router-wifi.avif", description: "Router de última generación con cobertura extendida y velocidad máxima." },
    { id: 16, name: "Disco Duro Externo", price: 119.99, image: "images/products/disco-duro.avif", description: "Disco duro portátil de 2TB con conexión USB-C." },
    { id: 17, name: "Micrófono USB", price: 99.99, image: "images/products/microfono.avif", description: "Micrófono de condensador para streaming y grabación profesional." },
    { id: 18, name: "Monitor Curvo", price: 329.99, image: "images/products/monitor-curvo.avif", description: "Monitor curvo de 32 pulgadas con tasa de refresco de 144Hz." },
    { id: 19, name: "Cargador Inalámbrico", price: 49.99, image: "images/products/cargador-inalambrico.avif", description: "Cargador inalámbrico rápido compatible con múltiples dispositivos." },
    { id: 20, name: "Funda para Laptop", price: 39.99, image: "images/products/funda-notebook.avif", description: "Funda protectora resistente al agua para laptops de 15 pulgadas." },
    { id: 21, name: "Mouse Gaming", price: 79.99, image: "images/products/mouse.avif", description: "Mouse ergonómico con iluminación RGB y sensor de alta precisión." },
    { id: 22, name: "Silla Gaming", price: 299.99, image: "images/products/silla-gamer.avif", description: "Silla ergonómica con soporte lumbar y reposacabezas ajustable." },
    { id: 23, name: "Lámpara LED", price: 29.99, image: "images/products/lampara-led.avif", description: "Lámpara LED inteligente con control por voz y aplicación móvil." },
    { id: 24, name: "Webcam 4K", price: 129.99, image: "images/products/webcam.avif", description: "Cámara web con resolución 4K y micrófono integrado para videollamadas." },
    { id: 25, name: "Smartwatch Deportivo", price: 199.99, image: "images/products/smartwathc.avif", description: "Reloj deportivo con GPS y monitor de ritmo cardíaco." },
    { id: 26, name: "Power Bank 20000mAh", price: 49.99, image: "images/products/power-bank.webp", description: "Batería portátil de gran capacidad para cargar múltiples dispositivos." },
    { id: 27, name: "Cámara de Acción", price: 299.99, image: "images/products/camara-accion.avif", description: "Cámara compacta resistente al agua para deportes extremos." },
    { id: 28, name: "Proyector Portátil", price: 349.99, image: "images/products/proyector.avif", description: "Proyector HD compacto ideal para cine en casa y presentaciones." },
    { id: 29, name: "Gafas de Realidad Virtual", price: 399.99, image: "images/products/gafas-vr.avif", description: "Dispositivo VR inmersivo compatible con múltiples plataformas." },
    { id: 30, name: "Smartphone Económico", price: 299.99, image: "images/products/smartphone-economico.avif", description: "Smartphone con características básicas y buena autonomía." },
    { id: 31, name: "Tablet Infantil", price: 149.99, image: "images/products/tablet-infantil.avif", description: "Tablet diseñada para niños con aplicaciones educativas." },
    { id: 32, name: "Altavoz Inteligente", price: 89.99, image: "images/products/altavoz-inteligente.avif", description: "Altavoz con asistente de voz integrado y control de hogar inteligente." },
    { id: 33, name: "Cámara Instantánea", price: 129.99, image: "images/products/camara-instantanea.avif", description: "Cámara instantánea para capturar y revelar fotos al instante." },
    { id: 34, name: "Disco SSD 1TB", price: 159.99, image: "images/products/ssd.avif", description: "Disco sólido rápido para mejorar el rendimiento de tu computadora." },
    { id: 35, name: "Micrófono de Estudio", price: 199.99, image: "images/products/microfono-estudio.avif", description: "Micrófono de condensador para grabación profesional en estudio." },
    { id: 36, name: "Joystick Profesional", price: 79.99, image: "images/products/joystick.avif", description: "Joystick para simuladores y juegos de alta precisión." },
    { id: 37, name: "Smartwatch de Lujo", price: 599.99, image: "images/products/smartwatch-de-lujo.avif", description: "Reloj inteligente con materiales premium y funciones avanzadas." },
    { id: 38, name: "Teclado Inalámbrico", price: 99.99, image: "images/products/teclado-inalambrico.avif", description: "Teclado inalámbrico con batería de larga duración y diseño elegante." },
    { id: 39, name: "Router Mesh", price: 249.99, image: "images/products/router-mesh.avif", description: "Sistema de routers para cobertura completa en toda la casa." },
    { id: 40, name: "Auriculares Gaming", price: 149.99, image: "images/products/auriculares-gamer.avif", description: "Auriculares con sonido envolvente y micrófono ajustable." },
    { id: 41, name: "Cámara de Seguridad", price: 199.99, image: "images/products/camara-de-seguridad.avif", description: "Cámara IP para monitoreo remoto con visión nocturna." },
    { id: 42, name: "Proyector 4K", price: 499.99, image: "images/products/proyector-4k.avif", description: "Proyector de alta resolución para cine en casa y presentaciones." },
    { id: 43, name: "Tablet Convertible", price: 549.99, image: "images/products/tablet-convertible.avif", description: "Tablet 2 en 1 que se convierte en laptop para máxima productividad." },
    { id: 44, name: "Cargador Solar Portátil", price: 79.99, image: "images/products/cargador-solar.avif", description: "Cargador solar para dispositivos electrónicos en exteriores." },
    { id: 45, name: "Altavoz Portátil Waterproof", price: 129.99, image: "images/products/altavoz-portatil.avif", description: "Altavoz resistente al agua con batería de larga duración y sonido potente." }
];

let cart = [];

const productsRows = document.getElementById('products-rows');
const cartSidebar = document.getElementById('cart-sidebar');
const cartToggle = document.getElementById('cart-toggle');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const subtotalElement = document.getElementById('subtotal');
const taxesElement = document.getElementById('taxes');
const totalElement = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const closeModal = document.querySelector('.close-modal');
const modalProductDetails = document.getElementById('modal-product-details');



document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadCartFromStorage();
    updateCartUI();
    
    cartToggle.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    checkoutBtn.addEventListener('click', checkout);
    closeModal.addEventListener('click', closeProductModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeProductModal();
        }
    });
});

function loadProducts() {
    productsRows.innerHTML = '';
    
    const productsPerRow = 15;
    const totalRows = Math.ceil(products.length / productsPerRow);

    // Lista de títulos para cada fila
    const rowTitles = [
        "Ofertas Exclusivas",
        "Novedades Imperdibles",
        "Recomendados para ti"
    ];
    
    for (let i = 0; i < totalRows; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.className = 'product-row';
        
        const rowHeader = document.createElement('div');
        rowHeader.className = 'row-header';
        
        const rowTitle = document.createElement('h3');
        rowTitle.className = 'row-title';
        
        rowTitle.textContent = rowTitles[i] || `Fila ${i + 1}`;
        
        const rowControls = document.createElement('div');
        rowControls.className = 'row-controls';
        
        const scrollContainer = document.createElement('div');
        scrollContainer.className = 'products-scroll-container';
        scrollContainer.id = `row-scroll-${i}`;
        
        const productsRow = document.createElement('div');
        productsRow.className = 'products-row';
        productsRow.id = `products-row-${i}`;
        scrollContainer.appendChild(productsRow);
        
        const startIndex = i * productsPerRow;
        const endIndex = Math.min(startIndex + productsPerRow, products.length);
        
        for (let j = startIndex; j < endIndex; j++) {
            const product = products[j];
            if (product) {
                const productCard = createProductCard(product);
                productsRow.appendChild(productCard);
            }
        }
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'row-btn prev-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.addEventListener('click', () => scrollRow(scrollContainer, -1));
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'row-btn next-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.addEventListener('click', () => scrollRow(scrollContainer, 1));
        
        rowControls.appendChild(prevBtn);
        rowControls.appendChild(nextBtn);
        
        rowHeader.appendChild(rowTitle);
        rowHeader.appendChild(rowControls);
        
        rowContainer.appendChild(rowHeader);
        rowContainer.appendChild(scrollContainer);
        productsRows.appendChild(rowContainer);
    }
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <p class="product-description">${product.description}</p>
            <div class="product-actions">
                <button class="btn-secondary view-details" data-id="${product.id}">Detalles</button>
                <button class="btn-add-to-cart add-to-cart" data-id="${product.id}">Añadir</button>
            </div>
        </div>
    `;
    
    productCard.querySelector('.view-details').addEventListener('click', (e) => {
        const productId = parseInt(e.target.getAttribute('data-id'));
        showProductDetails(productId);
    });
    
    productCard.querySelector('.add-to-cart').addEventListener('click', (e) => {
        const productId = parseInt(e.target.getAttribute('data-id'));
        addToCart(productId);
    });
    
    return productCard;
}

function scrollRow(scrollContainer, direction, cardsToScroll = 2) {
    const productCard = scrollContainer.querySelector('.product-card');
    if (!productCard) return;
    
    const style = getComputedStyle(productCard);
    const cardWidth = productCard.offsetWidth + parseInt(style.marginRight);
    
    scrollContainer.scrollBy({
        left: direction * cardWidth * cardsToScroll,
        behavior: 'smooth'
    });
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        modalProductDetails.innerHTML = `
            <div class="modal-product">
                <img src="${product.image}" alt="${product.name}" class="modal-product-image">
                <div class="modal-product-details">
                    <h2 class="modal-product-title">${product.name}</h2>
                    <p class="modal-product-price">$${product.price.toFixed(2)}</p>
                    <p class="modal-product-description">${product.description}</p>
                    <div class="modal-product-actions">
                        <button class="btn-secondary close-modal-btn">Cerrar</button>
                        <button class="btn-primary add-to-cart-modal" data-id="${product.id}">Añadir al Carrito</button>
                    </div>
                </div>
            </div>
        `;
        productModal.classList.add('active');
        
        document.querySelector('.close-modal-btn').addEventListener('click', closeProductModal);
        document.querySelector('.add-to-cart-modal').addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
            closeProductModal();
        });
    }
}

function closeProductModal() {
    productModal.classList.remove('active');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        saveCartToStorage();
        updateCartUI();
        showNotification(`${product.name} añadido al carrito`);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
    showNotification('Producto eliminado del carrito');
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCartToStorage();
        updateCartUI();
    }
}

function toggleCart() {
    cartSidebar.classList.toggle('active');
}

function updateCartUI() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-actions">
                        <div class="quantity-controls">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-btn" data-id="${item.id}">Eliminar</button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item) {
                    updateQuantity(productId, item.quantity - 1);
                }
            });
        });
        
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item) {
                    updateQuantity(productId, item.quantity + 1);
                }
            });
        });
        
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const taxes = subtotal * 0.10; 
    const total = subtotal + taxes;
    
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxesElement.textContent = `$${taxes.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Añade algunos productos antes de proceder al pago.');
        return;
    }
    
    alert('¡Gracias por tu compra! Este es un demo, por lo que no se procesará ningún pago real.');
    
    cart = [];
    saveCartToStorage();
    updateCartUI();
    toggleCart();
    showNotification('¡Compra realizada con éxito!');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1003;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function saveCartToStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}




const sideMenu = document.getElementById("side-menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

function toggleSideMenu() {
    sideMenu.classList.toggle("active");
}

openMenu.addEventListener("click", toggleSideMenu);
closeMenu.addEventListener("click", toggleSideMenu);

document.addEventListener("click", (e) => {
    const isClickInsideMenu = sideMenu.contains(e.target);
    const isClickOnMenuButton = openMenu.contains(e.target);
    
    if (!isClickInsideMenu && !isClickOnMenuButton && sideMenu.classList.contains("active")) {
        sideMenu.classList.remove("active");
    }
});

