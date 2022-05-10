let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Panaketo te acompaña en tu cambio de estilo de vida')
  .pauseFor(200)
  .deleteChars(10)
  .start();