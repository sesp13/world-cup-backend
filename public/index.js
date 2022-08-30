const data = [
  'Poland Shield',
  'Wojciech Szczęsny',
  'Łukasz Skorupski',
  'Jan Bednarek',
  'Bartosz Bereszyński',
  'Matty Cash',
  'Kamil Glik',
  'Tymoteusz Puchacz',
  'Maciej Rybus',
  'Kamil Jóźwiak',
  'Mateusz Klich',
  'Grzegorz Krychowiak',
  'Jakub Moder',
  'Sebastian Szymański',
  'Piotr Zieliński',
  'Robert Lewandowski',
  'Arkadiusz Milik',
  'Krzysztof Piątek',
  'Karol Świderski',
];

finalStr = ``;

for (let i = 1; i < 20; i++) {
  const item = data[i - 1];
  finalStr += `'${item}', //${i} \n`;
}

console.log(finalStr);
