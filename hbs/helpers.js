const hbs = require('hbs');

//helpers: funciones que se disparan cuando el template lo requiere.

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalize', (text) => {

    let words = text.split(' ');

    words.forEach((word, index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');

});