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
        date: "10/5/2023",
        description: "Descripción del libro Harry Potter y el prisionero de Azkaban..."
    },
    2: {
        title: "Harry Potter y la piedra filosofal",
        pages: 320,
        image: "./HP1.png",
        date: "15/6/2023",
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
            <div class="row">
                <div class="col-md-4" style="width: 20rem;">
                     <img src="${book.image}" class="card-img-top" alt="${book.title}">
                </div>
                <div class="col-md-8">
                    <h5 class="card-title">${book.title}</h5>
                    <p></p>
                    <p class="card-text">${book.description}</p>
                    <p class="card-text"><small class="text-muted">${book.pages} páginas</small></p
                    <p class="card-text"><small class="text-muted"> Publicado el ${book.date}</small></p

                </div>
            </div>
        `;
    } else {
        document.getElementById('book-details').innerHTML = '<p>Libro no encontrado</p>';
    }
}
/*
<p><strong>Nombre del libro:</strong> Nombre del libro/p>
<p><strong>Publicado hace:</strong> 2 semanas</p>
<p><strong>Otros libros del propietario:</strong> Libro 1, Libro 2, Libro 3</p>
<p><strong>Reseñas del propietario:</strong> 5</p>
*/

// Ejecutar la función cuando la página haya cargado
window.onload = showBookDetails;

/*
// Función para mostrar los detalles del libro
function showBookDetails(bookId) {
    const book = books[bookId];

    if (book) {
        const bookDetails = document.getElementById('book-details');
        bookDetails.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <img src="${book.image}" class="img-fluid" alt="${book.title}">
                </div>
                <div class="col-md-8">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.description}</p>
                    <p class="card-text"><small class="text-muted">${book.pages} páginas</small></p>
                    <a href="#" class="btn btn-primary">Solicitar libro</a>
                    <a href="#" class="btn btn-danger" onclick="clearBookDetails();">Volver</a>
                </div>
            </div>
        `;
    } else {
        document.getElementById('book-details').innerHTML = '<p>Libro no encontrado</p>';
    }
}

// Limpia el contenedor de detalles al inicio
window.onload = function() {
    document.getElementById('book-details').innerHTML = '';
};

// Función para limpiar los detalles del libro
function clearBookDetails() {
    document.getElementById('book-details').innerHTML = '';
}
*/