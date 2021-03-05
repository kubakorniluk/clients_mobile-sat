export const reactScrollIntoView = (selector) => {
    if(selector) {
        let element = document.querySelector(selector);
        element.scrollIntoView( {behavior: 'smooth'} );
    }
    else {
        console.warn("reactScrollIntoView: you must pass a selector to perform this action.");
    }
}