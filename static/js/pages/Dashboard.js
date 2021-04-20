import View from "../View.js"

export default class Dashboard extends View {
    constructor(params) {
        super(params)
        this.title("dashboard")
    }

    render() {
        return `
            <h1>Welcome back, Nathan Pham</h1>
            <p>Hi there, this is your Dashboard.</p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `
    }
}