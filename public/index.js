const data = [
  'Qatar shield',
  'Saad Al Sheeb',
  'Meshaal Barsham',
  'Homam Ahmed',
  'Bassam Alrawi',
  'Abdulkarim Hassan',
  'Musaab Khidir',
  'Boualem Khoukhi',
  'Pedro Miguel',
  'Tarek Salman',
  'Karim Boudiaf',
  'Abdulaziz Hatem',
  'Assim Omer Madibo',
  'Yousuf Abdurisag',
  'Akram Hassan Afif',
  'Ahmad Alaaeldin',
  'Hasan Al-Haydos',
  'Almoez Ali',
  'Mohammed Muntari',
];

const code = 'QAT';

finalStr = ``;

for (let i = 1; i < 20; i++) {
  const item = data[i - 1];
  finalStr += `'${item}', //${i} \n`;
}

console.log(finalStr);
