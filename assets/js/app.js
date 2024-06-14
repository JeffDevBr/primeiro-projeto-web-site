async function loadHTML(elementId, url) {
    const response = await fetch(url)
    const text = await response.text()
    document.getElementById(elementId).innerHTML = text
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadHTML('header', 'header.html')
    await loadHTML('footer', 'footer.html')

    menu()
})


function menu() {
    const drawer = document.querySelector('#drawer')
    const open = document.querySelector('[data-drawer="open"]')
    const close = document.querySelector('[data-drawer="close"]')
    const toogle = document.querySelector('[data-drawer="toogle"]')

    const openMenu = () => {
        if (drawer)
            drawer.classList.add('opened')
    }

    const closeMenu = () => {
        if (drawer)
            drawer.classList.remove('opened')
    }

    const toggleMenu = () => {
        if (drawer)
            drawer.classList.toggle('opened')
    }

    open.addEventListener('click', openMenu)
    close.addEventListener('click', closeMenu)
    toogle.addEventListener('click', toggleMenu)

}





