export const reactScrollIntoView = (selector) => {
    if(selector && typeof selector == 'string') {
        let element = document.querySelector(selector);
        element.scrollIntoView( {behavior: 'smooth'} );
    }
    else {
        console.warn("reactScrollIntoView: incorrect selector.");
    }
}