import View from "../View.js"

export default class Posts extends View {
    constructor(params) {
        super(params)
        this.title("posts")
    }

    render() {
        return Object.keys(this.params).length
            ? `
                <h1>posts</h1>
                <p>post id: ${ this.params.id }</p>
            `
            : `
                <h1>all posts</h1>
            `
    }
}