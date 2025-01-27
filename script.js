//search
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const thumbnails = document.querySelectorAll(".img-container a");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        thumbnails.forEach(thumbnail => {
            const name = thumbnail.dataset.name.toLowerCase();
            if (name.includes(query)) {
                thumbnail.style.display = "inline-block";
            } else {
                thumbnail.style.display = "none";
            }
        });
    });

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        var query = document.getElementById('search').value.toLowerCase();
        var links = document.querySelectorAll('.img-container a');
        for (var i = 0; i < links.length; i++) {
            if (links[i].getAttribute('data-name').toLowerCase().includes(query)) {
                window.open(links[i].href, '_blank');
                return;
            }
        }
        alert('No matching video found.');
    });

    // Navigate to home page
    document.querySelector('#u1 li:first-child').addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });

    // Navigate to history page
    document.querySelector('#u1 li:nth-child(6)').addEventListener('click', function() {
        window.location.href = 'history.html'; 
    });
});

//menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('d1');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});