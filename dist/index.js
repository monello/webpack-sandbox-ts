"use strict";
var _a;
const component = () => {
    const element = document.createElement('div');
    element.innerHTML = "Hello world!<br>Learning webpack";
    return element;
};
(_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('afterbegin', component());
//# sourceMappingURL=index.js.map