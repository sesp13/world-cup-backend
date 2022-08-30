const data = [
  'Tunisia Shield',
  'Bechir Ben Saïd',
  'Farouk Ben Mustapha',
  'Dylan Bronn',
  'Mohamed Dräger',
  'Bilel Ifa',
  'Ali Maâloul',
  'Hamza Mathlouthi',
  'Yassine Meriah',
  'Montassar Talbi',
  'Mohamed Ali Ben Romdhane',
  'Wahbi Khazri',
  'Aïssa Laïdouni',
  'Ferjani Sassi',
  'Ellyes Skhiri',
  'Anis Slimane',
  'Seifeddine Jaziri',
  'Youssef Msakni',
  'Naïm Sliti',
];

finalStr = ``;

for (let i = 1; i < 20; i++) {
  const item = data[i - 1];
  finalStr += `'${item}', //${i} \n`;
}

console.log(finalStr);
