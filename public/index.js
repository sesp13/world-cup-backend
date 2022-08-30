const data = [
  'South Korea Shield',
  'Seung-gyu Kim',
  'Hyeon-woo Jo',
  'Chul Hong',
  'Tae-hwan Kim',
  'Min-jae Kim',
  'Young-gwon Kim',
  'Jin-su Kim',
  'Yong Lee',
  'In-beom Hwang',
  'Woo-young Jung',
  'Jae-sung Lee',
  'Seung-ho Paik',
  'Gue-sung Cho',
  'Hee-chan Hwang',
  'Ui-jo Hwang',
  'Chang-hoon Kwon',
  'Heung-min Son',
  'Min-kyu Song',
];

finalStr = ``;

for (let i = 1; i < 20; i++) {
  const item = data[i - 1];
  finalStr += `'${item}', //${i} \n`;
}

console.log(finalStr);
