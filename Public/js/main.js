function loadNavbar() {
    fetch('/Includes/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Erreur lors du chargement de la navbar:', error));
}

function loadFooter() {
    fetch('/Includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Erreur lors du chargement du footer:', error));
}

window.onload = function() {
    loadNavbar();
    loadFooter();
}