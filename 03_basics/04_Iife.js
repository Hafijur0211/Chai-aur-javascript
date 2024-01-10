// Intermediately invoked Function Expression (IIFE)

(function one() {
    // named IIFE
    console.log("Database Connected");
})();

// (function two() {
//   console.log("Database Connected Two");
// })();

((name) => {
    console.log(`Database Connected Two ${name}`);
})("hafijur");
