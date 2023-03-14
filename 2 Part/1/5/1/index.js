let ul = document.querySelector('ul')

for (let li of document.querySelectorAll('li')) {
    let content = li.firstChild.textContent.replace('\n', '').trimEnd()
    alert(content + ': ' + li.getElementsByTagName('li').length)
}