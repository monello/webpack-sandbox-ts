const component = () => {
    const element = document.createElement('div');
    element.innerHTML = "Hello world!<br>Learning webpack";
    return element;
}

document.getElementById('app')?.insertAdjacentElement('afterbegin', component());