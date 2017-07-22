const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-1' },
  { type: 'yawn', value: 40},
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-2' },
  { type: 'attack', value: 12, target: 'player-1' },
];

const totalDamageOnPlayer1 = dragonEvents
  .filter(function isAttack(event) {
    return event.type === 'attack';
  })
  .filter(function isPlayer1(event) {
    return event.target === 'player-1';
  })
  .map(function getDragonEventValue(event) {
    return event.value;
  })
  .reduce(function sumDragonEventValues(prev, value) {
    return prev + value;
  }, 0);

console.log('totalDamageOnPlayer1\n', totalDamageOnPlayer1);
