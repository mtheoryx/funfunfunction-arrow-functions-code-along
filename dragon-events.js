const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-1' },
  { type: 'yawn', value: 40},
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-2' },
  { type: 'attack', value: 12, target: 'player-1' },
];

const totalDamageOnPlayer1 = dragonEvents
  .filter(event => event.type === 'attack')
  .filter(event => event.target === 'player-1')
  .map(event => event.value)
  .reduce((prev, value) => prev + value);

console.log('totalDamageOnPlayer1\n', totalDamageOnPlayer1);
