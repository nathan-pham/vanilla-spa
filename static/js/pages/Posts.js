import View from "../View.js"

export default class Posts extends View {
    constructor(params) {
        super(params)
        this.title("posts")
    }

    render() {
        return Object.keys(this.params).length
            ? `
                <h1>Posts</h1>
                <p>Post ID: ${ this.params.id }</p>
            `
            : `
                <h1>All Posts</h1>
            `
    }
}