// Función para obtener los parámetros de la URL
function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split('&').forEach(pair => {
        const [key, value] = pair.split('=');
        params[key] = decodeURIComponent(value);
    });
    return params;
}

function loadBooks() {
    return fetch('allBooks.json')
        .then(response => response.json())
        .then(data => {
            books = data;
        })
        .catch(error => console.error('Error cargando libro:', error));
}
//EL FETCH SOLO ANDA PARA SERVERS!!

// Datos de ejemplo para los libros
/*const books = {
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
    // AÑADIR libros en otro formato (no const)
};
*/

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
                    <p class="card-text"><small class="text-muted"> Publicado por ....</small></p
                </div>
            </div>
        `;
    } else {
        document.getElementById('book-details').innerHTML = '<p>Libro no encontrado</p>';
    }
    // AGREGAR: USUARIO QUE LO PUBLICO, Y SU REPUTACION
}

window.onload = function() {
    loadBooks().then(showBookDetails);
};

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