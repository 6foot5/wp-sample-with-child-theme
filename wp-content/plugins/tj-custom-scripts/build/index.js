/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log(tjDataFromWP);
const tjApp = document.getElementById('tj-app-container');
tjApp.innerHTML += `
  <h1>I've been injected by a custom script</h1>
  <p>I have so much potential!</p>
  <p>Want More? Behold some data passed down from WP:</p>
  <blockquote>${tjDataFromWP.question_text} - ${tjDataFromWP.question_key}</blockquote>
`;
/******/ })()
;
//# sourceMappingURL=index.js.map