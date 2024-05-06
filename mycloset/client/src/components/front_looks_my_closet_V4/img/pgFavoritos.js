//filtragem pelos button de acordo com a classificação das peças

function filtrarPorCategoria(categoria) {
    const todosLooks = document.querySelectorAll('.look');
    todosLooks.forEach(look => {
        if (categoria === 'todos' || look.dataset.categoria === categoria) {
            look.style.display = 'block'; // ou 'flex' dependendo do layout desejado
        } else {
            look.style.display = 'none';
        }
    });
}

document.getElementById('searchInput').oninput = function() {
    const filtro = this.value.toUpperCase();
    const looks = document.querySelectorAll('.look');
    looks.forEach(look => {
        const titulo = look.querySelector('.titulo').textContent.toUpperCase();
        look.style.display = titulo.indexOf(filtro) > -1 ? 'block' : 'none';
    });
};

//animação da frase acima da barra de pesquisa

document.addEventListener('DOMContentLoaded', function() {
    var highlightPhrase = document.getElementById('highlight-phrase');
    var date = new Date();
    var hour = date.getHours();

    if (hour < 12) {
        highlightPhrase.textContent = "Bom dia! Escolha seu look matinal!";
    } else if (hour < 18) {
        highlightPhrase.textContent = "Boa tarde! Encontre o look ideal para sua tarde!";
    } else {
        highlightPhrase.textContent = "Boa noite! Prepare-se para a noite com estilo!";
    }
});

// Barra de pesquisa
function debounce(func, delay) {
    let timerId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

function filtrarPorCategoria(categoria) {
    const todosLooks = document.querySelectorAll('.look');
    todosLooks.forEach(look => {
        if (categoria === 'todos' || look.dataset.categoria === categoria) {
            look.style.display = 'block'; // ou 'flex' dependendo do layout desejado
        } else {
            look.style.display = 'none';
        }
    });
}

function handleSearchInput() {
    const filtro = this.value.toUpperCase();
    const looks = document.querySelectorAll('.look');
    looks.forEach(look => {
        const titulo = look.querySelector('.look-title').textContent.toUpperCase();
        look.style.display = titulo.includes(filtro) ? 'block' : 'none';
    });
}

document.getElementById('searchInput').oninput = debounce(handleSearchInput, 300); // Ajuste o atraso conforme necessário


// icone de coração para favoritar
document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.children[0];
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    });
});

 //Button ver look completo

 document.getElementById('proceed-button').addEventListener('click', function() {
    window.location.href = '/looks-completos'; // Altere para a URL correta da sua página de looks completos
});
