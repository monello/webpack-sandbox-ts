const component = () => {
    const element = document.createElement('div');
    element.innerHTML = "Hello world!<br>Learning webpack<br>with a Sprinkle of TypeScript";
    return element;
}

document.getElementById('app')?.insertAdjacentElement('afterbegin', component());