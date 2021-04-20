import View from "../View.js"

export default class Dashboard extends View {
    constructor(params) {
        super(params)
        this.title("dashboard")
    }

    render() {
        return `
            <h1>welcome back, Nathan Pham</h1>
            <p>this is your dashboard.</p>
        `
    }
}