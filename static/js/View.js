export default class View {
    constructor(params) {
        this.params = params
    }

    title(t) {
        document.title = t
    }

    render() {
        return ""
    }

    hydrate(ctx) {
        
    }
}