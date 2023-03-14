let links = document.querySelectorAll('[href]')

for(let i = 0; i < links.length; ++i) {
    let href = links[i].getAttribute('href')
    if (href.includes('://') && !href.startsWith('http://internal.com')) {
        links[i].style.color = 'orange'
    }
}