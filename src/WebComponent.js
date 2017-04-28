

class PasswordFieldWebComponent extends HTMLElement {
    constructor() {
        super();
        this._password = null;
    }

    static get observedAttributes() {
        return ["value"];
    }
}