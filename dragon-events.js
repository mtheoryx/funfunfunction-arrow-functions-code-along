const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-1' },
  { type: 'yawn', value: 40},
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-2' },
  { type: 'attack', value: 12, target: 'player-1' },
];

const reduceToTotal = (prev, x) => (prev || 0) + x;

const totalDamageOnPlayer1 = dragonEvents
  .filter(e => e.type === 'attack')
  .filter(e => e.target === 'player-1')
  .map(e => e.value)
  .reduce(reduceToTotal);

console.log('totalDamageOnPlayer1\n', totalDamageOnPlayer1);
