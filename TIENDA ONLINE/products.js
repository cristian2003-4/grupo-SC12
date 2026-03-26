const products = [
    {
        id: 1,
        name: "Boku No Hero Academia Vol. 29",
        price: 60000,
        originalPrice: 80000,
        category: "Shounen",
        image: "../imagenes/Boku no Hero.jfif",
        description: "El clímax de la guerra contra el Frente de Liberación Paranormal.",
        stock: 5,
        featured: true
    },
    {
        id: 2,
        name: "Mairimashita! Iruma-Kun Vol. 27",
        price: 52000,
        originalPrice: 70000,
        category: "Shounen",
        image: "../imagenes/Mairimashita Iruma-kun.jfif",
        description: "El punto de inflexión en el examen de 'Devorador de Corazones' ¡La clase de inadaptados vs Los profesores de Babyls!",
        stock: 3,
        featured: true
    },
    {
        id: 3,
        name: "Jibaku Shounen Hanako-Kun Vol. 1",
        price: 25000,
        originalPrice: 50000,
        category: "Psicológico",
        image: "../imagenes/Hanako.jfif",
        description: "Knock knock, ¿has escuchado de Hanako-Kun, el chico del baño?",
        stock: 12,
        featured: false
    },
    {
        id: 4,
        name: "Dr. Stone Vol. 18",
        price: 32000,
        originalPrice: 65000,
        category: "Shounen",
        image: "../imagenes/Dr Stone.jfif",
        description: "El reino científico busca hacerse con la ciudad el maiz. ¡La guerra entre los dos mejores científicos del mundo!",
        stock: 3,
        featured: true
    },
    {
        id: 5,
        name: "Dragon Ball super Vol. 19",
        price: 20000,
        originalPrice: 50000,
        category: "Shounen",
        image: "../imagenes/Dragon Ball.jfif",
        description: "Goku, Vegeta y Granolah enfrentan a Gas, quien despierta un poder abrumador que cambia el rumbo de la batalla y revela secretos del pasado.",
        stock: 6,
        featured: false
    },
    {
        id: 6,
        name: "Tokyo Ghoul Vol. 01",
        price: 10000,
        originalPrice: 80000,
        category: "Psicológico",
        image: "../imagenes/Tokyo Ghoul.jfif",
        description: "Ken Kaneki, un estudiante que tras un extraño accidente se convierte en mitad humano y mitad ghoul, debe entrar en un oscuro mundo donde debe aprender a sobrevivir entre humanos y monstruos.",
        stock: 10,
        featured: true
    },
    {
        id: 7,
        name: "Blue Lock Vol. 02",
        price: 30000,
        originalPrice: 29000,
        category: "Shounen",
        image: "../imagenes/Blue Lock.png",
        description: "El equipo de Yoichi Isagi enfrenta su primer partido dentro de Jinpachi Ego’s proyecto, donde cada jugador debe demostrar su instinto goleador para no quedar eliminado.",
        stock: 2,
        featured: false
    },
    {
        id: 8,
        name: "Sasaki to Miyano Vol. 09",
        price: 72000,
        originalPrice: 80000,
        category: "Romance",
        image: "../imagenes/Sasaki and Miyano.jfif",
        description: "Con su graduación acercándose, Sasaki y Miyano reflexionan sobre su relación, pasan más tiempo juntos y enfrentan los cambios que vendrán cuando Sasaki deje la escuela.",
        stock: 5,
        featured: false
    },
    {
        id: 9,
        name: "Kuroshitsuji Vol. 05",
        price: 69999,
        originalPrice: 79999,
        category: "Psicológico",
        image: "../imagenes/Ciel and Sebastian.jfif",
        description: "Los continuos asesinatos en Londres llevan a Ciel a el caso de Jack the Ripper, ¿Logrará hacer justicia a todas las víctimas descuartizadas?",
        stock: 8,
        featured: false
    },
    {
        id: 10,
        name: "Chainsaw Man Vol. 01",
        price: 29900,
        originalPrice: 59900,
        category: "Shounen",
        image: "../imagenes/Chainsaw Man Volume 1.jfif",
        description: "Denji, un joven pobre que trabaja cazando demonios con su compañero Pochita, es traicionado y muere. Sin embargo, Pochita se fusiona con él y lo revive, convirtiéndolo en el poderoso Chainsaw Man, lo que lo lleva a trabajar para la misteriosa cazadora de demonios Makima.",
        stock: 10,
        featured: false
    },
    {
        id: 11,
        name: "FANGS Vol. 03",
        price: 100000,
        originalPrice: 300000,
        category: "Romance",
        image: "../imagenes/Fangs.jfif",
        description: "Luego de que Megi llegara de sorpresa a la fiesta de emparejamiento tras escapar del reclusorio, las cosas se pondrán complicadas entre En e Ichii. ¡Su antigua pareja le dió un beso! ¿Cómo podrán resolver esto?",
        stock: 1,
        featured: false
    },
    {
        id: 12,
        name: "Define the Relationship",
        price: 92000,
        originalPrice: 100000,
        category: "Romance",
        image: "../imagenes/manga.jfif",
        description: "En un mundo que dicta cómo deben amar los Alfas y Omegas, Karlyle descubre que sus sentimientos no siguen las reglas. Cuando Ash, un Alfa con quien comparte un pasado misterioso, entra en su vida, lo que parecía un experimento se convierte en un vínculo inesperado que desafía toda definición de relación.",
        stock: 1,
        featured: false
    }
];

// --- Funciones de productos ---
function getAllProducts() {
    return products;
}

function getFeaturedProducts() {
    return products.filter(product => product.featured);
}

function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// --- Función de filtrado corregida ---
function filterProducts(category = '', priceRange = '', searchTerm = '') {
    let filteredProducts = products;

    // Filtrar por categoría
    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Filtrar por rango de precio
    if (priceRange) {
        filteredProducts = filteredProducts.filter(product => {
            const price = product.price;
            switch (priceRange) {
                case '0-30000':
                    return price >= 0 && price <= 30000;
                case '30001-60000':
                    return price >= 30001 && price <= 60000;
                case '60001+':
                    return price >= 60001;
                default:
                    return true;
            }
        });
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term)
        );
    }

    return filteredProducts;
}

// --- Funciones para mostrar productos ---
function createProductCard(product) {
    const discountPercentage = product.originalPrice ? 
        Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card product-card h-100">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text flex-grow-1">${product.description}</p>
                    <div class="price-section mb-3">
                        <span class="price">$${product.price}</span>
                        ${product.originalPrice ? `<span class="original-price ms-2">$${product.originalPrice}</span>` : ''}
                        ${discountPercentage > 0 ? `<span class="badge bg-danger ms-2">${discountPercentage}% OFF</span>` : ''}
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">Stock: ${product.stock}</small>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus me-1"></i>Agregar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(productsToRender, containerId = 'productsGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (productsToRender.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-info">
                    <i class="fas fa-info-circle me-2"></i>
                    No se encontraron productos que coincidan con los filtros seleccionados.
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = productsToRender.map(product => createProductCard(product)).join('');
}

function renderFeaturedProducts() {
    const featuredProducts = getFeaturedProducts().slice(0, 3);
    renderProducts(featuredProducts, 'featuredProducts');
}