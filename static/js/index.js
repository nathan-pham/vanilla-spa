import Dashboard from "./pages/Dashboard.js"

const pathToRegex = path => new RegExp('^' + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + '$')

const getParams = match => {
    const values = match.result.slice(1)
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1])

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]]
    }))
}


const router = async () => {
    const routes = [
        { path: '/', view: Dashboard },
        { path: "/posts", view: Dashboard },
        { path: "/posts/:id", view: Dashboard },
        { path: "/settings", view: Dashboard },
    ]

    const matches = routes.map(route => ({ route, result: location.pathname.match(pathToRegex(route.path)) }))
    let match = matches.find(potential => potential.result !== null)

    if(!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }

    const view = new match.route.view(getParams(match))
    const app = document.getElementById("app-content")

    app.innerHTML = await view.render()
    view.hydrate(app)
}

const navigateTo = (url) => {
    history.pushState(null, null, url)
    router()
}

document.body.addEventListener("click", (e) => {
    if(e.target.matches("[data-link]")) {
        e.preventDefault()
        navigateTo(e.target.href)
    }

    router()
})

window.addEventListener("popstate", router)

router()