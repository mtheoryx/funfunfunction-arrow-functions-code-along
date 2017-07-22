const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-1' },
  { type: 'yawn', value: 40},
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-2' },
  { type: 'attack', value: 12, target: 'player-1' },
];

const reduceToTotal = (prev, x) => (prev || 0) + x;

const isAttack = ({type}) => type === 'attack';

const getValue = ({value}) => value;

const totalDamageOnPlayer1 = dragonEvents
  .filter(isAttack)
  .filter(e => e.target === 'player-1')
  .map(getValue)
  .reduce(reduceToTotal);

console.log('totalDamageOnPlayer1\n', totalDamageOnPlayer1);
