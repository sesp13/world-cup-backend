const data = [
  'Switzerland Shield',
  'Yann Sommer',
  'Gregor Kobel',
  'Manuel Akanji',
  'Nico Elvedi',
  'Kevin Mbabu',
  'Ricardo Rodríguez',
  'Fabian Schär',
  'Silvan Widmer',
  'Remo Freuler',
  'Xherdan Shaqiri',
  'Djibril Sow',
  'Granit Xhaka',
  'Denis Zakaria',
  'Steven Zuber',
  'Breel Embolo',
  'Noah Okafor',
  'Haris Seferović',
  'Ruben Vargas',
];

finalStr = ``;

for (let i = 1; i < 20; i++) {
  const item = data[i - 1];
  finalStr += `'${item}', //${i} \n`;
}

console.log(finalStr);
