console.log('WP custom scripts initialized');
console.log(tjDataFromWP);

const tjApp = document.getElementById('tj-app-container');
tjApp.innerHTML += `
  <h1>I've been injected by a custom script</h1>
  <p>I have so much potential!</p>
  <p>Want More? Behold some data passed down from WP:</p>
  <blockquote>${tjDataFromWP.q1} - ${tjDataFromWP.a1}</blockquote>
`;