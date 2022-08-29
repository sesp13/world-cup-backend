const data = [
  'Wales Shield',
  'Danny Ward',
  'Wayne Hennessey',
  'Ethan Ampadu',
  'Ben Davies',
  'Chris Gunter',
  'Chris Mepham',
  'Connor Roberts',
  'Joe Rodon',
  'Neco Williams',
  'Joe Allen',
  'Joe Morrell',
  'Aaron Ramsey',
  'Jonathan Williams',
  'Harry Wilson',
  'Gareth Bale',
  'Daniel James',
  'Brennan Johnson',
  'Kieffer Moore',
];

finalStr = ``;

for (let i = 1; i < 20; i++) {
  const item = data[i - 1];
  finalStr += `'${item}', //${i} \n`;
}

console.log(finalStr);
