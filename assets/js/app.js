const loadHTML = async (e, url) => {
    const response = await fetch(url)
    const text = await response.text()
    const pagina = document.getElementById(e)
    pagina.innerHTML = text
}

loadHTML('header', 'header.html');
loadHTML('footer', 'footer.html');    
