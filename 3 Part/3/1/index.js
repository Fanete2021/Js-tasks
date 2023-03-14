async function getUsers(names) {
    let logins = []

    for (let name of names) {
        let user = fetch(`https://api.github.com/users/${name}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return null
                }
             })

        logins.push(user)
    }

    return await Promise.all(logins)
}

let data = getUsers(['iliakan', 'remy', 'no.such.users'])

data.then(logins => {
    for (let login of logins) {
        console.log(login)
    }
})