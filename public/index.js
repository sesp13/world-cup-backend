const data = [
  'Japan Shield',
  'Shuichi Gonda',
  'Eiji Kawashima',
  'Yuto Nagatomo',
  'Yuta Nakayama',
  'Takehiro Tomiyasu',
  'Miki Yamane',
  'Maya Yoshida',
  'Wataru Endo',
  'Genki Haraguchi',
  'Hidemasa Morita',
  'Gaku Shibasaki',
  'Ao Tanaka',
  'Takuma Asano',
  'Kyogo Furuhashi',
  'Junya Ito',
  'Takumi Minamino',
  'Kaoru Mitoma',
  'Yuya Osako',
];

finalStr = ``;

for (let i = 1; i < 20; i++) {
  const item = data[i - 1];
  finalStr += `'${item}', //${i} \n`;
}

console.log(finalStr);
