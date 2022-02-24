const links = document.querySelectorAll('.navbar-link')

// Loop through the links
links.forEach(link => {
    link.addEventListener('click', () => {
        // Replacing class name of link element
        links.forEach(link => {
            link.className = 'navbar-link'
        })

        link.classList.add('change')

        // Adding new class to the sibling elements of links
        link.previousElementSibling.classList.add('prevElChange')
        link.nextElementSibling.classList.add('nextElChange')
    })
})