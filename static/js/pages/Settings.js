import View from "../View.js"

export default class Settings extends View {
    constructor(params) {
        super(params)
        this.title("settings")
    }

    render() {
        return `
            <h1>settings</h1>
        `
    }
}