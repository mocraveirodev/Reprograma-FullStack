const EnviaEventinho = require('events');

const eventinho = new EnviaEventinho();
eventinho.on('evento', (xuxu) => {
  console.log('Chegou o xuxu!', xuxu.nomeDoEvento);
});
eventinho.emit('evento', { 'nomeDoEvento': 'E o gatinho tb!' });