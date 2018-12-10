console.log('Source script');

/* Appends the string to the dom with respect to
 * {params} selector: string and content: string.
 */
function render(selector, content) {
    const containerSelector = document.querySelector(selector);
    containerSelector.innerHTML = content;
}

render('#output', `Printed from <b>Javascript</b>`);