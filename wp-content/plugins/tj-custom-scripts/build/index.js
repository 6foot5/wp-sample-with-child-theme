/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// tjDataFromWP is the variable we created using wp_add_inline_script() in our page-about-us.php template
console.log(tjDataFromWP);
const tjApp = document.getElementById('tj-app-container');
tjApp.innerHTML += `
  <h1 class="color-blue size-small">I've been injected by a custom script</h1>
  <p>I have so much potential!</p>
  <p>Want More? Behold some data passed down from WP:</p>
  <blockquote>${tjDataFromWP.question_text} - ${tjDataFromWP.question_key}</blockquote>
  <img src="${tjDataFromWP.image.sizes.medium}" />
`;
/******/ })()
;
//# sourceMappingURL=index.js.map