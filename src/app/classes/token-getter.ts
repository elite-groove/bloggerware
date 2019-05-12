export class TokenGetter {
    value() {
        return window.localStorage['token'];
    }
}
