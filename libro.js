// Función para obtener los parámetros de la URL
function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split('&').forEach(pair => {
        const [key, value] = pair.split('=');
        params[key] = decodeURIComponent(value);
    });
    return params;
}

// Datos de ejemplo para los libros
const books = {
    1: {
        title: "Harry Potter y el prisionero de Azkaban",
        pages: 480,
        image: "./HP3.jpg",
        description: "Descripción del libro Harry Potter y el prisionero de Azkaban..."
    },
    2: {
        title: "Harry Potter y la piedra filosofal",
        pages: 320,
        image: "./HP1.png",
        description: "Descripción del libro Harry Potter y la piedra filosofal..."
    }
    // Añade más libros aquí
};

// Función para mostrar los detalles del libro
function showBookDetails() {
    const params = getQueryParams();
    const bookId = params.id;
    const book = books[bookId];

    if (book) {
        const bookDetails = document.getElementById('book-details');
        bookDetails.innerHTML = `
            <h1>${book.title}</h1>
            <img src="${book.image}" alt="${book.title}" width="200">
            <p>${book.description}</p>
            <p><strong>Páginas:</strong> ${book.pages}</p>
        `;
    } else {
        document.getElementById('book-details').innerHTML = '<p>Libro no encontrado</p>';
    }
}

// Ejecutar la función cuando la página haya cargado
window.onload = showBookDetails;
