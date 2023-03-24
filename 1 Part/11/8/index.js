//1

// async function loadJson(url) {
//     let response = await fetch(url)
//
//     if (response.status == 200) {
//         return await response.json();
//     }
//
//     throw new Error(response.status);
// }
//
// loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

//2

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url)

    if (response.status == 200) {
        return await response.json();
    }

    throw new Error(response.status);
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    while(true) {
        let name = prompt("Введите логин?", "iliakan");

        try {
            let user = await loadJson(`https://api.github.com/users/${name}`)
            break
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                return demoGithubUser();
            } else {
                throw err;
            }
        }
    }

    alert(`Полное имя: ${user.name}.`);
    return user;
}

demoGithubUser();