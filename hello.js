// hello.js
const sayHello = () => {
    console.log('Hello!');
};

const sayGoodnight = () => {
    console.log('Good night!');
};

module.exports.sayHello = sayHello;

//標準寫法 (比較多字) :
/*
module.exports = {
    sayHello: sayHello,
    sayGoodnight: sayGoodnight,
    title: 'I am Hello Module'
};
*/

// JS remarks(簡寫,模組化寫法) :
module.exports = {
    sayHello,      // = sayHello: sayHello,
    sayGoodnight,
        title,
};